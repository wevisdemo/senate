import { component$, Slot } from "@builder.io/qwik";
import Navbar from "~/components/Navbar";
import QWvFooter from "~/components/react/QWvFooter";

export default component$(() => {
  return (
    <>
      <Navbar />
      <Slot />
      <QWvFooter />
    </>
  );
});
