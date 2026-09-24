'use client';

import { useState } from 'react';

type Tab = 'tasting' | 'alacarte' | 'tapas';

export default function MenuTabs({
  tasting,
  alacarte,
  tapas,
}: {
  tasting: React.ReactNode;
  alacarte: React.ReactNode;
  tapas: React.ReactNode;
}) {
  const [active, setActive] = useState<Tab>('tasting');

  return (
    <>
      <nav className="tab-nav" aria-label="Menucategorieën">
        <div className="tab-nav__inner">
          <button
            className={`tab-btn ${active === 'tasting' ? 'active' : ''}`}
            onClick={() => setActive('tasting')}
          >
            <div className="tab-btn__inner">
              <span className="tab-btn__label">Proeverijmenu&apos;s</span>
              <span className="tab-btn__hint">
                Chef Menu | Tasting | Dim Sum | Vegetarisch
              </span>
            </div>
          </button>
          <button
            className={`tab-btn ${active === 'alacarte' ? 'active' : ''}`}
            onClick={() => setActive('alacarte')}
          >
            <div className="tab-btn__inner">
              <span className="tab-btn__label">&Agrave; la carte</span>
              <span className="tab-btn__hint">Soepen | Voorgerechten | Hoofdgerechten</span>
            </div>
          </button>
          <button
            className={`tab-btn ${active === 'tapas' ? 'active' : ''}`}
            onClick={() => setActive('tapas')}
          >
            <div className="tab-btn__inner">
              <span className="tab-btn__label">Dinsdag Tapas</span>
              <span className="tab-btn__hint">Elke dinsdagavond | Tapas &amp; tasting menu&apos;s</span>
            </div>
          </button>
        </div>
      </nav>

      <main className="menu-body">
        <section className={`menu-section ${active === 'tasting' ? 'visible' : ''}`}>{tasting}</section>
        <section className={`menu-section ${active === 'alacarte' ? 'visible' : ''}`}>
          {alacarte}
        </section>
        <section className={`menu-section ${active === 'tapas' ? 'visible' : ''}`}>{tapas}</section>
      </main>
    </>
  );
}
