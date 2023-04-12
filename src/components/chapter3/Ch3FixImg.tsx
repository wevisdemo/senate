import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, inView } from "motion";

const Ch3FixImg = component$(() => {
  const elImg = useSignal<HTMLImageElement>();

  useVisibleTask$(() => {
    if (elImg.value)
      inView(
        elImg.value,
        () => {
          if (elImg.value) {
            animate(
              elImg.value,
              {
                transform: ["rotate(90deg)", "rotate(0deg)"],
                opacity: [0, 1],
              },
              { duration: 0.5 }
            );
          }
        },
        {
          amount: 0.99,
        }
      );
  });

  return (
    <img
      ref={elImg}
      class="mx-auto mt-60 mb-60 opacity-0"
      src="./imgs/fix-icon.webp"
      alt=""
      width={134}
      height={153}
      loading="lazy"
      decoding="async"
    />
  );
});

export default Ch3FixImg;
