import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView } from "motion";
import { QBalancer } from "./react/QBalancer";

interface TitleBlockProps {
  class?: string;
  text: string;
}

export const TitleBlock = component$<TitleBlockProps>(({ class: clazz, text }) => {
  const elTextContainer = useSignal<HTMLDivElement>();

  useVisibleTask$(
    () => {
      if (elTextContainer.value) {
        elTextContainer.value.classList.add("opacity-0");

        inView(
          elTextContainer.value,
          () => {
            if (elTextContainer.value) {
              elTextContainer.value.classList.add("reveal");
            }
          },
          { amount: 0.99 }
        );
      }
    },
    { strategy: "document-idle" }
  );

  return (
    <div
      class={`wv-h4 con mb-60 rounded-10 bg-black text-center font-kondolar font-black text-white ${
        clazz ?? ""
      }`}
    >
      <div ref={elTextContainer}>
        <QBalancer class="px-40 py-20" text={text} />
      </div>
    </div>
  );
});
