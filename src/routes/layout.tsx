import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/Navbar";
import { QWvFooter } from "~/components/react/QWvFooter";
import { QWvCookie } from "~/components/react/QWvCookie";

export default component$(() => (
  <>
    <Navbar />
    <QWvCookie />
    <Slot />
    <QWvFooter />
  </>
));
