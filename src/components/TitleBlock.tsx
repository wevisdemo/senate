import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView } from "motion";

interface TitleBlockProps {
  class?: string;
}

export const TitleBlock = component$<TitleBlockProps>(({ class: clazz }) => {
  const elTextContainer = useSignal<HTMLDivElement>();

  useVisibleTask$(() => {
    if (elTextContainer.value) {
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
  });

  useVisibleTask$(
    () => {
      if (elTextContainer.value) elTextContainer.value.classList.add("opacity-0");
    },
    { strategy: "document-idle" }
  );

  return (
    <div
      class={`wv-h4 con mb-60 rounded-10 bg-black text-center font-kondolar font-black text-white ${
        clazz ?? ""
      }`}
    >
      <span class="block py-20 px-40" ref={elTextContainer}>
        <Slot />
      </span>
    </div>
  );
});
