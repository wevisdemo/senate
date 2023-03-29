import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView } from "motion";

const TitleBlock = component$(() => {
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

  return (
    <div class="wv-h4 container mb-60 rounded-10 bg-black text-center font-kondolar font-black text-bg">
      <span class="block py-20 px-40 opacity-0" ref={elTextContainer}>
        <Slot />
      </span>
    </div>
  );
});

export default TitleBlock;
