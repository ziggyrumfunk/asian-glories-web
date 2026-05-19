'use client';

import { useEffect, useRef } from 'react';

/**
 * Wraps the book mockup so it tilts subtly toward the cursor. The class names
 * inside come from the imported JSX, this component only attaches the mouse
 * listeners and resets the transform on mouseleave.
 */
export default function BookMockupTilt({ children }: { children: React.ReactNode }) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const mockup = scene.querySelector<HTMLElement>('.book-mockup');
    if (!mockup) return;

    const onMove = (e: MouseEvent) => {
      const r = mockup.getBoundingClientRect();
      const cx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const cy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      mockup.style.transform = `rotate(${-3 + cx * 3}deg) translateY(${cy * -6}px)`;
    };
    const onLeave = () => {
      mockup.style.transform = 'rotate(-3deg)';
    };
    scene.addEventListener('mousemove', onMove);
    scene.addEventListener('mouseleave', onLeave);
    return () => {
      scene.removeEventListener('mousemove', onMove);
      scene.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={sceneRef} className="book-scene rv">
      {children}
    </div>
  );
}
