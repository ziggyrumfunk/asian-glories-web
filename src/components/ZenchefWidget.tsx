'use client';

import Script from 'next/script';

/**
 * Mount Zenchef's booking widget once globally. The SDK reads the config div
 * below and injects a floating "Reserveer" button (bottom-right, every page)
 * that opens the reservation panel wired to Asian Glories' live availability.
 *
 * Restaurant ID 383175 is the Asian Glories Zenchef account, the same widget
 * that ran on the old Wix site (see zenchef-widget-setup.md in the parent
 * project folder for the full handover notes).
 *
 * data-open="" means no auto-open; set e.g. data-open="1500" to auto-open
 * after 1.5s. data-primary-color takes 6 hex digits WITHOUT '#' (brand dark
 * green). The SDK ships its own responsive CSS: full-screen panel on phones.
 */
export default function ZenchefWidget() {
  return (
    <>
      <Script
        id="zenchef-sdk"
        src="https://sdk.zenchef.com/v1/sdk.min.js"
        strategy="afterInteractive"
      />
      <div
        className="zc-widget-config"
        data-restaurant="383175"
        data-open=""
        data-primary-color="114032"
      />
    </>
  );
}
