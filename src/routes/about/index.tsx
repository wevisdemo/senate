import { component$ } from "@builder.io/qwik";

import { QAboutText } from "~/components/react/QAboutText";
import { QWvSharer } from "~/components/react/QWvSharer";
import { QAboutButtons } from "~/components/react/QAboutButtons";

export default component$(() => (
  <QAboutText>
    <QAboutButtons />
    <div class="mb-[3rem]" />
    <QWvSharer center />
  </QAboutText>
));
