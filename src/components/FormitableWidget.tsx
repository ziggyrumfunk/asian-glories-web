'use client';

import Script from 'next/script';

/**
 * Mount Formitable's B2 widget once globally. It injects a floating toolbar
 * launcher (visible on every page) and exposes window.FT.open() so existing
 * "Reserveer" buttons across the site can programmatically open the panel.
 *
 * Restaurant ID is the Asian Glories Formitable key. Auto-open is disabled
 * (data-open="0") so the panel doesn't pop up on first load.
 *
 * Implementation note: Formitable's official embed uses an inline async
 * loader that relies on a pre-existing <script> tag in the DOM, which doesn't
 * always work under Next.js's hydration order. We load the SDK directly via
 * next/script instead — same end result, simpler, more reliable.
 */
export default function FormitableWidget() {
  return (
    <>
      <Script
        id="formitable-sdk"
        src="https://cdn.formitable.com/sdk/v1/ft.sdk.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.FT?.load) {
            window.FT.load('Analytics');
          }
        }}
      />
      <div
        className="ft-widget-b2"
        data-restaurant="6ee9bd8e"
        data-open="0"
        data-open-mobile="false"
        data-color="hsl(159, 58%, 16%)"
        data-language="auto"
        data-tag="Website"
        data-toolbar="true"
        data-toolbar-mobile="true"
      />
    </>
  );
}
