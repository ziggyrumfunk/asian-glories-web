'use client';

import Script from 'next/script';

/**
 * Mount Formitable's B2 widget once globally. It injects a floating toolbar
 * launcher (visible on every page) and exposes window.FT.open() so existing
 * "Reserveer" buttons across the site can programmatically open the panel.
 *
 * Restaurant ID is the Asian Glories Formitable key. Auto-open is disabled
 * (data-open="0") so the panel doesn't pop up on first load.
 */
export default function FormitableWidget() {
  return (
    <>
      <Script
        id="formitable-sdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (d, s, id, h) { var ftjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; var js = d.createElement(s); js.id = id; js.src = "https://cdn.formitable.com/sdk/v1/ft.sdk.min.js"; h && (js.onload = h); ftjs.parentNode.insertBefore(js, ftjs); }(document, 'script', 'formitable-sdk', function () { FT.load('Analytics'); }));`,
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
