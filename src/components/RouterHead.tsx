import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

const TITLE = "แลหลัง เหลียวหน้า ส.ว. — WeVis";
const DESC =
  "ชวนอ่านและค้นหาเรื่องราวการสืบทอดอำนาจของ คสช. ผ่านกลไกที่ให้อำนาจ ส.ว. กำหนดทิศทางการเมืองไทย เมื่อผลเลือกตั้งของประชาชนถูกทำให้ไร้ความหมาย";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const hrefWithoutAbout = loc.url.href.replace("about/", "");

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <base href={loc.url.href} />
      <link rel="canonical" href={loc.url.href} />

      <link rel="apple-touch-icon" sizes="180x180" href="/senate/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/senate/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/senate/favicon-16x16.png" />
      <link rel="manifest" href="/senate/site.webmanifest" />
      <link rel="mask-icon" href="/senate/safari-pinned-tab.svg" color="#222222" />
      <link rel="shortcut icon" href="/senate/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffa9d1" />
      <meta name="msapplication-config" content="/senate/browserconfig.xml" />
      <meta name="theme-color" content="#000000" />

      <title>{TITLE}</title>
      <meta name="description" content={DESC} />

      <meta property="og:url" content={loc.url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:image" content={`${hrefWithoutAbout}og.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={loc.url.hostname} />
      <meta property="twitter:url" content={loc.url.href} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image" content={`${hrefWithoutAbout}og.png`} />

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
