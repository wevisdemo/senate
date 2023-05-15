import { component$ } from "@builder.io/qwik";

import { QAboutText } from "~/components/react/QAboutText";
import { QWvSharer } from "~/components/react/QWvSharer";

export default component$(() => (
  <QAboutText>
    <QWvSharer center />
  </QAboutText>
));
