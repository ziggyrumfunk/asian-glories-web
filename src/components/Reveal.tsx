'use client';

import { useEffect } from 'react';

/**
 * Activates the `.rv.on` class on any element with class `.rv` once it scrolls
 * into view. Drop a single <RevealScript /> into the root layout (or any page)
 * and add `className="rv"` plus optional `d1`/`d2`/`d3`/`d4`/`d5` delay classes
 * to anything you want to animate in.
 */
export default function RevealScript() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('on'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
