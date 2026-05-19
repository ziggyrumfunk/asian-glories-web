export default function AwardsStrip() {
  return (
    <div className="bg-green" style={{ padding: '30px var(--pad)' }}>
      <div className="max-w-site mx-auto flex items-center justify-center flex-wrap" style={{ gap: 'clamp(24px,5vw,72px)' }}>
        <div className="flex items-center gap-[18px] rv">
          <img
            src="/images/bib-gourmand.jpg"
            alt="Michelin Bib Gourmand"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain bg-white rounded p-[5px] shrink-0"
          />
          <div>
            <span className="block text-[12px] font-bold tracking-[0.1em] uppercase text-gold">Michelin</span>
            <span className="block text-[11px] font-light tracking-[0.06em] text-white/50 mt-[2px]">Bib Gourmand</span>
          </div>
        </div>
        <div className="hidden md:block w-px h-11 bg-white/10" />
        <div className="flex items-center gap-[18px] rv d2">
          <img
            src="/images/gault-millau.jpg"
            alt="Gault&Millau"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain bg-white rounded p-[5px] shrink-0"
          />
          <div>
            <span className="block text-[12px] font-bold tracking-[0.1em] uppercase text-gold">Gault&amp;Millau</span>
            <span className="block text-[11px] font-light tracking-[0.06em] text-white/50 mt-[2px]">Erkend restaurant</span>
          </div>
        </div>
        <div className="hidden md:block w-px h-11 bg-white/10" />
        {/* Google rating: hardcoded for now. Hook up to Google Places API later
            and the surrounding markup stays the same. */}
        <div className="flex items-center gap-[18px] rv d3">
          <div
            aria-label="Google rating"
            className="flex items-center justify-center w-[60px] h-[60px] bg-white rounded shrink-0"
            style={{ color: '#114032', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            <span style={{ fontSize: 28, fontWeight: 300, lineHeight: 1 }}>4.5</span>
          </div>
          <div>
            <span className="block text-[12px] font-bold tracking-[0.1em] uppercase text-gold">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </span>
            <span className="block text-[11px] font-light tracking-[0.06em] text-white/50 mt-[2px]">
              Google Reviews
            </span>
          </div>
        </div>
        <div className="hidden md:block w-px h-11 bg-white/10" />
        <div className="flex items-center gap-[18px] rv d4">
          <div>
            <span className="block text-[12px] font-bold tracking-[0.1em] uppercase text-gold">Lunch &amp; Diner</span>
            <span className="block text-[11px] font-light tracking-[0.06em] text-white/50 mt-[2px]">
              Westewagenstraat 74, Rotterdam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
