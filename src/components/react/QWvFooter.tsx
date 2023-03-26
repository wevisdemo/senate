/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import WvFooter from "@wevisdemo/ui/react/footer";

// Footer doesn't need to hydrate :D
export default qwikify$(() => <WvFooter />);
