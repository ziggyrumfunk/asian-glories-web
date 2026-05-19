'use client';

import { useEffect, useRef, useState } from 'react';
import { useT } from '@/lib/i18n';
import './press-wall.css';

/**
 * Editorial press rotator. One large pull-quote is shown at a time on a dark
 * green panel; the section auto-cycles every 7 seconds, pauses while the user
 * hovers, and exposes clickable indicator dots for manual navigation.
 *
 * Sources for each quote are linked through the entire card (cursor:pointer
 * on the visit button), so anyone interested can verify the citation.
 */
const quotes = [
  {
    quote: "Reputed to be the city's best Cantonese restaurant.",
    publication: 'Michelin Guide',
    award: 'Bib Gourmand',
    cite: 'https://guide.michelin.com/us/en/zuid-holland/rotterdam/restaurant/asian-glories',
  },
  {
    quote: 'De basisproducten zijn vers en kwaliteitsvol, de opmaak fijn en verzorgd.',
    publication: 'Gault & Millau',
    award: '13/20',
    cite: 'https://www.gault-millau.nl/en/restaurants/asian-glories-rotterdam',
  },
  {
    quote: 'One of the best Chinese restaurants in the Netherlands.',
    publication: 'City Guide Rotterdam',
    award: '',
    cite: 'https://www.cityguiderotterdam.com/eating-out/restaurants/chinese/asian-glories-rotterdam/',
  },
];

const INTERVAL_MS = 6000;

export default function PressWall({ variant = 'section' }: { variant?: 'section' | 'inline' }) {
  const t = useT();
  const [active, setActive] = useState(0);
  // Track hover state so auto-rotation pauses while the user is reading
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => {
      setActive((i) => (i + 1) % quotes.length);
    }, INTERVAL_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, paused]);

  const Wrapper = variant === 'inline' ? 'div' : 'section';

  return (
    <Wrapper
      className={`press press--${variant}`}
      aria-label="In the press"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative oversized quotation mark */}
      <span className="press__mark" aria-hidden="true">
        &ldquo;
      </span>

      <div className="press__inner">
        {variant === 'section' ? (
          <p className="press__eyebrow rv">{t('press.eyebrow')}</p>
        ) : null}

        {/* Stacked layers, only the active one is visible at a time; the rest
            sit behind with opacity 0 so transitions cross-fade cleanly. */}
        <div className="press__stage">
          {quotes.map((q, i) => (
            <article
              key={i}
              className="press__slide"
              aria-hidden={i !== active}
              data-active={i === active ? 'true' : 'false'}
            >
              <blockquote className="press__quote">&ldquo;{q.quote}&rdquo;</blockquote>
              <div className="press__attr">
                <span className="press__pub">{q.publication}</span>
                {q.award ? <span className="press__award">{q.award}</span> : null}
              </div>
              <a
                href={q.cite}
                target="_blank"
                rel="noopener noreferrer"
                className="press__source"
              >
                Lees verder &rarr;
              </a>
            </article>
          ))}
        </div>

        {/* Progress ticks — click to jump. The active tick fills from left to
            right over the auto-cycle interval as a visual timer. The `key`
            forces a CSS animation restart each time the active slide changes. */}
        <div className="press__dots" role="tablist" aria-label="Press quotes">
          {quotes.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Toon quote ${i + 1} van ${quotes.length}`}
              className="press__dot"
              data-active={i === active ? 'true' : 'false'}
              onClick={() => setActive(i)}
            >
              <span className="press__dot-track">
                {i === active ? (
                  <span
                    key={`${active}-${paused}`}
                    className="press__dot-fill"
                    data-paused={paused ? 'true' : 'false'}
                    style={{
                      animationDuration: `${INTERVAL_MS}ms`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                  />
                ) : null}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
