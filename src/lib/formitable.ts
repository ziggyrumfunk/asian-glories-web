/**
 * Helpers for opening the Formitable reservation panel from anywhere.
 *
 * The B2 widget creates its own floating launcher (the gold button bottom-
 * right of the page), but we also want existing "Reserveer" buttons in the
 * nav and reservation section to open the same panel.
 *
 * Formitable's SDK varies by version: some expose window.FT.open(id), others
 * use a sub-object like window.FT.b2 or auto-bind clicks to elements with a
 * specific data attribute. We try several known approaches in order, then
 * dispatch a click on the rendered toolbar launcher as a fallback, then
 * finally fall back to email.
 */

declare global {
  interface Window {
    FT?: any;
  }
}

const RESTAURANT_ID = '6ee9bd8e';
const FALLBACK_EMAIL = 'info@asianglories.nl';

export function openReservation() {
  if (typeof window === 'undefined') return;
  const ft = window.FT;

  // 1) Try the modern SDK API: FT.open(restaurantId)
  if (ft?.open) {
    try {
      ft.open(RESTAURANT_ID);
      return;
    } catch {
      /* fall through */
    }
  }

  // 2) Some Formitable versions namespace under FT.b2
  if (ft?.b2?.open) {
    try {
      ft.b2.open(RESTAURANT_ID);
      return;
    } catch {
      /* fall through */
    }
  }

  // 3) Click the floating launcher that the widget rendered. We look for the
  //    most common selectors Formitable uses, plus any button inside the
  //    widget container as a final guess.
  const selectors = [
    '.ft-b2-toolbar-button',
    '.ft-widget-b2-toolbar button',
    '.ft-widget-b2 .ft-launcher',
    '.ft-widget-b2 button',
    '.ft-widget-b2 [role="button"]',
    '.ft-widget-b2 a',
  ];
  for (const sel of selectors) {
    const el = document.querySelector<HTMLElement>(sel);
    if (el) {
      el.click();
      return;
    }
  }

  // 4) Last resort: hand off to email
  window.location.href = `mailto:${FALLBACK_EMAIL}`;
}

/** Use as `onClick={onReserveClick}` on anchor tags so they don't follow href. */
export function onReserveClick(e: React.MouseEvent) {
  e.preventDefault();
  openReservation();
}
