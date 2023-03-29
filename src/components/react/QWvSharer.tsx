/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import WvSharer from "@wevisdemo/ui/react/sharer";

export default qwikify$(() => <WvSharer allowCopyLink light center />, {
  eagerness: "hover",
});
