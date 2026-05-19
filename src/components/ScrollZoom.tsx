'use client';

import { useEffect, useRef } from 'react';

/**
 * Ken Burns style scroll-zoom. The image starts zoomed in (1.25x by default) and
 * eases out to its natural 1.0x as the user scrolls it past the viewport.
 *
 * - The effect is contained inside a clipped frame (overflow: hidden on the wrapper).
 * - Uses CSS variables driven by a scroll listener inside an IntersectionObserver,
 *   so the listener only fires while the element is in view.
 * - Respects prefers-reduced-motion: zoom is disabled if the user opted out.
 *
 * Typical usage:
 *
 *   <ScrollZoom
 *     src="/images/sfeer.jpg"
 *     alt="Sfeer in Asian Glories"
 *     className="zoom-frame"   // give the frame a height/width via this class
 *     imageClassName="..."     // optional extra image classes
 *     from={1.25}              // starting scale (default 1.25)
 *     to={1.0}                 // ending scale (default 1.0)
 *   />
 */
export default function ScrollZoom({
  src,
  alt,
  className,
  imageClassName,
  from = 1.25,
  to = 1.0,
  objectPosition = 'center',
  loading = 'lazy',
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  from?: number;
  to?: number;
  objectPosition?: string;
  loading?: 'eager' | 'lazy';
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      img.style.transform = `scale(${to})`;
      return;
    }

    let active = false;
    let rafId = 0;

    const update = () => {
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 when the frame's top is at the bottom of the viewport
      // 1 when the frame's bottom is at the top of the viewport
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      const t = Math.max(0, Math.min(1, traveled / total));
      const scale = from + (to - from) * t;
      img.style.transform = `scale(${scale})`;
    };

    const onScroll = () => {
      if (!active) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) update();
      },
      { threshold: 0 },
    );
    io.observe(frame);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [from, to]);

  return (
    <div
      ref={frameRef}
      className={`scroll-zoom ${className ?? ''}`.trim()}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        className={imageClassName}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
          // 'transform-origin: center' keeps the zoom centered inside the frame.
          // 'willChange: transform' hints the browser to use GPU compositing.
          transformOrigin: 'center',
          willChange: 'transform',
          transform: `scale(${from})`,
        }}
      />
    </div>
  );
}
