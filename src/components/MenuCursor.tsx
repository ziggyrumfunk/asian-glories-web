'use client';

import { useEffect, useRef } from 'react';

/**
 * Cursor-following image preview for dish rows on the menu page.
 *
 * Mount this once inside the menu body. It listens for mouseenter on any
 * `.dish-row[data-img]` descendant and follows the cursor with the matching
 * dish image. The image lags slightly behind the cursor for a satin feel.
 *
 * Disabled on touch devices (hover doesn't really exist there) and for users
 * with prefers-reduced-motion.
 */
export default function MenuCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const img = imgRef.current;
    if (!cursor || !img) return;

    // Skip on touch-only devices and when reduced-motion is requested.
    const isTouchOnly = window.matchMedia('(hover: none)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchOnly || reduce) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;
    let visible = false;

    const tick = () => {
      // Easing toward target — 0.18 gives a subtle, classy lag.
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX + 24;
      targetY = e.clientY + 24;
    };

    const onRowEnter = (e: Event) => {
      const row = e.currentTarget as HTMLElement;
      const src = row.dataset.img;
      if (!src) return;
      img.src = src;
      cursor.dataset.on = 'true';
      if (!visible) {
        visible = true;
        // Seed position so the cursor doesn't fly in from (0,0)
        if (e instanceof MouseEvent) {
          targetX = currentX = e.clientX + 24;
          targetY = currentY = e.clientY + 24;
        }
        raf = requestAnimationFrame(tick);
      }
    };

    const onRowLeave = () => {
      cursor.dataset.on = 'false';
      // Keep the rAF running briefly so the cursor can ease away if the next
      // dish-row enter event comes in quickly. Stop after the fade.
      setTimeout(() => {
        if (cursor.dataset.on !== 'true') {
          cancelAnimationFrame(raf);
          visible = false;
        }
      }, 400);
    };

    document.addEventListener('mousemove', onMove);
    const rows = document.querySelectorAll<HTMLElement>('.dish-row[data-img]');
    rows.forEach((row) => {
      row.addEventListener('mouseenter', onRowEnter);
      row.addEventListener('mouseleave', onRowLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      rows.forEach((row) => {
        row.removeEventListener('mouseenter', onRowEnter);
        row.removeEventListener('mouseleave', onRowLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={cursorRef} className="menu-cursor" data-on="false" aria-hidden="true">
      <img ref={imgRef} alt="" className="menu-cursor__img" />
    </div>
  );
}
