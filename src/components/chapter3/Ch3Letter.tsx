import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import QLetter from "../react/QLetter";
import Lottie from "../Lottie";
import { animate, inView } from "motion";

export interface Ch3LetterProps {
  title: string;
  lottieName: string;
}

const Ch3Letter = component$<Ch3LetterProps>(({ title, lottieName }) => {
  const elLetter = useSignal<HTMLDivElement>();

  useVisibleTask$(
    () => {
      if (elLetter.value) {
        elLetter.value.classList.add("opacity-0");

        inView(
          elLetter.value,
          () => {
            if (elLetter.value)
              animate(
                elLetter.value,
                {
                  transform: ["rotate(-2deg) scale(1.1)", "rotate(0deg) scale(1)"],
                  opacity: [0, 1],
                },
                { duration: 0.5 }
              );
          },
          {
            amount: 0.5,
          }
        );
      }
    },
    { strategy: "document-idle" }
  );

  return (
    <div ref={elLetter} class="w-full origin-top overflow-hidden">
      <QLetter title={title}>
        <Slot />
      </QLetter>
      <Lottie
        clazz="absolute bottom-[115px] left-1/2 -translate-x-1/2"
        src={`./imgs/lotties/model/${lottieName}.json`}
        height="160px"
        width="160px"
      />
    </div>
  );
});

export default Ch3Letter;
