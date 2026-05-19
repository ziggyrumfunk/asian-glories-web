/**
 * Helpers for opening the Formitable reservation panel from anywhere.
 *
 * The B2 widget creates its own floating launcher, but we also want existing
 * "Reserveer" buttons (nav, hero, reservation section) to open the same panel.
 * The Formitable SDK exposes window.FT.open(restaurantId) for that.
 */

declare global {
  interface Window {
    FT?: {
      load: (module: string) => void;
      open: (restaurantId?: string) => void;
    };
  }
}

const RESTAURANT_ID = '6ee9bd8e';
const FALLBACK_EMAIL = 'info@asianglories.nl';

export function openReservation() {
  if (typeof window === 'undefined') return;
  if (window.FT?.open) {
    window.FT.open(RESTAURANT_ID);
    return;
  }
  // SDK hasn't loaded yet (slow network, ad blocker, etc.). Fall back to email.
  window.location.href = `mailto:${FALLBACK_EMAIL}`;
}

/** Use as `onClick={onReserveClick}` on anchor tags so they don't follow href. */
export function onReserveClick(e: React.MouseEvent) {
  e.preventDefault();
  openReservation();
}
