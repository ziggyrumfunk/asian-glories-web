'use client';

import { useState } from 'react';

type Tab = 'tasting' | 'plates' | 'signature';

export default function MenuTabs({
  tasting,
  plates,
  signature,
}: {
  tasting: React.ReactNode;
  plates: React.ReactNode;
  signature: React.ReactNode;
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
              <span className="tab-btn__hint">Elke dag | 4, 6 of 8 gangen</span>
            </div>
          </button>
          <button
            className={`tab-btn ${active === 'plates' ? 'active' : ''}`}
            onClick={() => setActive('plates')}
          >
            <div className="tab-btn__inner">
              <span className="tab-btn__label">Kleine gerechten</span>
              <span className="tab-btn__hint">Elke dag | Om te delen</span>
            </div>
          </button>
          <button
            className={`tab-btn ${active === 'signature' ? 'active' : ''}`}
            onClick={() => setActive('signature')}
          >
            <div className="tab-btn__inner">
              <span className="tab-btn__label">Signatuurgerechten</span>
              <span className="tab-btn__hint">Vrijdag t/m zondag | Om te delen</span>
            </div>
          </button>
        </div>
      </nav>

      <main className="menu-body">
        <section className={`menu-section ${active === 'tasting' ? 'visible' : ''}`}>{tasting}</section>
        <section className={`menu-section ${active === 'plates' ? 'visible' : ''}`}>{plates}</section>
        <section className={`menu-section ${active === 'signature' ? 'visible' : ''}`}>
          {signature}
        </section>
      </main>
    </>
  );
}
