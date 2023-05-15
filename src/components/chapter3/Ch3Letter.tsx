import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, inView } from "motion";

import { Lottie } from "../Lottie";
import { QLetter } from "../react/QLetter";

export interface Ch3LetterProps {
  title: string;
  lottieName: string;
}

export const Ch3Letter = component$<Ch3LetterProps>(({ title, lottieName }) => {
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 640 618"
        width={640}
        height={618}
        class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <path
          fill="#FFA9D1"
          d="M.5 182.5h639V610a7.5 7.5 0 01-7.5 7.5H8A7.5 7.5 0 01.5 610V182.5z"
        />
        <path
          stroke="#000"
          d="M.5 182.5h639V610a7.5 7.5 0 01-7.5 7.5H8A7.5 7.5 0 01.5 610V182.5z"
        />
        <path
          fill="#FFA9D1"
          stroke="#000"
          d="M321.524.911c-1.001-.548-2.047-.548-3.048 0L4.567 172.893c-1.518.832-2.624 2.5-3.3 4.628-.672 2.12-.895 4.631-.698 7.042.198 2.414.814 4.684 1.782 6.334.968 1.65 2.236 2.603 3.74 2.603h627.818c1.504 0 2.772-.953 3.74-2.603.968-1.65 1.584-3.92 1.782-6.334.197-2.411-.026-4.922-.699-7.042-.675-2.128-1.781-3.796-3.299-4.628L321.524.911z"
        />
      </svg>
      <QLetter title={title}>
        <Slot />
      </QLetter>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 640 428"
        width={640}
        height={428}
        class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <path
          fill="#FFA9D1"
          stroke="#000"
          d="M.5 422V.5h1.956c.492.43 1.049.79 1.671 1.062l313.91 136.521a4.829 4.829 0 003.926 0L635.873 1.562A6.422 6.422 0 00637.544.5h1.956V422a5.5 5.5 0 01-5.5 5.5H6A5.5 5.5 0 01.5 422z"
        />
        <path stroke="#000" strokeDasharray="2 2" d="M0 383.5h640" />
      </svg>
      <Lottie
        class="absolute bottom-[85px] left-1/2 -translate-x-1/2"
        src={`./imgs/lotties/model/${lottieName}.json`}
        height="160px"
        width="160px"
      />
    </div>
  );
});
