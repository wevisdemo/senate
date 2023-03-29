import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

const TITLE = "Senate — WeVis";
const DESC =
  "ชวนอ่านและค้นหาเรื่องราวการสืบทอดอำนาจของ คสช. ผ่านกลไกที่ให้อำนาจ ส.ว. กำหนดทิศทางการเมืองไทย เมื่อผลเลือกตั้งของประชาชนถูกทำให้ไร้ความหมาย";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <base href={loc.url.href} />

      <link rel="canonical" href={loc.url.href} />
      <link rel="manifest" href={`${loc.url.href}manifest.json`} />
      <link rel="icon" type="image/svg+xml" href={`${loc.url.href}favicon.svg`} />

      <title>{TITLE}</title>
      <meta name="description" content={DESC} />

      <meta property="og:url" content={loc.url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:image" content={`${loc.url.href}og.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={new URL(loc.url.href).hostname} />
      <meta property="twitter:url" content={loc.url.href} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image" content={`${loc.url.href}og.png`} />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
