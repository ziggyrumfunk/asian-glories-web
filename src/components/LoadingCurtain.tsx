'use client';

import { useEffect, useState } from 'react';

/**
 * A full-screen green curtain shown on first paint and faded out when the
 * page is ready. Hides the FOUC during font load and gives a moment of brand
 * presentation before the hero appears.
 *
 * Bypassed entirely for users with prefers-reduced-motion, who get straight
 * to content with no animation.
 *
 * Behaviour:
 * - On mount: curtain visible, body scroll locked
 * - Waits for `document.fonts.ready` and the hero image to load
 * - Holds for a minimum of ~600ms so it doesn't flash on fast refresh
 * - Fades out over 700ms, unlocks scroll, then unmounts
 */
export default function LoadingCurtain() {
  const [stage, setStage] = useState<'visible' | 'fading' | 'gone'>('visible');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setStage('gone');
      return;
    }

    const start = performance.now();
    const MIN_HOLD = 600;
    const fontsReady =
      typeof document !== 'undefined' && 'fonts' in document
        ? (document as Document).fonts.ready
        : Promise.resolve();

    // Wait for the hero background image to be in the browser cache before
    // dropping the curtain — avoids a flash of green-then-hero-pop.
    const heroImg = new Image();
    heroImg.src = '/images/warm-interior.jpg';
    const heroReady = new Promise<void>((resolve) => {
      if (heroImg.complete) resolve();
      else {
        heroImg.addEventListener('load', () => resolve(), { once: true });
        heroImg.addEventListener('error', () => resolve(), { once: true });
      }
    });

    document.documentElement.style.overflow = 'hidden';

    Promise.all([fontsReady, heroReady]).then(() => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_HOLD - elapsed);
      setTimeout(() => {
        setStage('fading');
        // Match the CSS transition duration before unmounting.
        setTimeout(() => {
          setStage('gone');
          document.documentElement.style.overflow = '';
        }, 750);
      }, wait);
    });

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (stage === 'gone') return null;

  return (
    <div
      aria-hidden="true"
      className="loading-curtain"
      data-fading={stage === 'fading' ? 'true' : 'false'}
    >
      <img
        src="/images/asian-glories-logo-wide-normal.png"
        alt=""
        className="loading-curtain__logo"
      />
    </div>
  );
}
