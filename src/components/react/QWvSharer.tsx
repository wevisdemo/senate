/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import WvSharer from "@wevisdemo/ui/react/sharer";

interface QWvSharerProps {
  indexPage?: boolean;
  center?: boolean;
}

export const QWvSharer = qwikify$<QWvSharerProps>(
  ({ indexPage, center }) => (
    <WvSharer allowCopyLink={indexPage} light={indexPage} center={center} />
  ),
  {
    eagerness: "visible",
  }
);
