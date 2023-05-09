import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView, stagger, timeline } from "motion";

interface ChapterBreakProps {
  part: number;
  title: string[];
}

export const ChapterBreak = component$<ChapterBreakProps>(({ part, title }) => {
  const elChapterBreakContainer = useSignal<HTMLDivElement>();

  useVisibleTask$(
    () => {
      if (elChapterBreakContainer.value) {
        const [elPartContainer, elImgContainer, elTitleContainer] =
          elChapterBreakContainer.value.children;

        [
          ...elPartContainer.children,
          ...elImgContainer.children,
          ...elTitleContainer.children,
        ].forEach((el) => el.classList.add("opacity-0"));

        const threshold = Math.min(
          0.99,
          document.getElementById("100vh")!.getBoundingClientRect().height /
            elChapterBreakContainer.value.getBoundingClientRect().height -
            0.1
        );

        inView(
          elChapterBreakContainer.value,
          () => {
            const [elPartText, elPartNumber] = elPartContainer.children;
            timeline([
              [
                elPartText,
                { transform: ["translateY(100%)", "translateY(0)"], opacity: [0, 1] },
                { duration: 0.5 },
              ],
              [
                elPartNumber,
                { transform: ["translateY(20%)", "translateY(0)"], opacity: [0, 1] },
                { duration: 0.5, at: 0.1 },
              ],
              [elImgContainer.children[0], { opacity: [0, 1] }, { duration: 1, at: 0.3 }],
              [
                elImgContainer.children[0],
                { transform: ["scale(.8)", "scale(1)"] },
                { duration: 1.5, at: 0.3, easing: "ease-out" },
              ],
              [
                [...elTitleContainer.children],
                {
                  transform: ["translateY(100%)", "translateY(0)"],
                  clipPath: [
                    "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
                    "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  ],
                  opacity: [1, 1],
                },
                { duration: 0.5, at: 0.5, delay: stagger(0.1) },
              ],
            ]);
          },
          {
            amount: threshold,
          }
        );
      }
    },
    {
      strategy: "document-idle",
    }
  );

  return (
    <div
      ref={elChapterBreakContainer}
      id={`ch${part}`}
      class="flex w-full flex-col items-center justify-center gap-10 border-t border-dashed border-t-white bg-black py-40 text-white lg:h-[360px] lg:flex-row lg:gap-60 lg:p-0"
    >
      <div class="text-center font-kondolar font-black leading-none">
        <span class="wv-h9 mb-[12px] block">Part</span>
        <span class="block text-[100px]">{part}</span>
      </div>
      <div class="flex h-full items-center">
        <Slot />
      </div>
      <div
        class="wv-h5 text-center font-kondolar font-black lg:text-left"
        aria-label={title.join("").replace("-", " ")}
      >
        {title.map((ch, i) =>
          ch === "-" ? (
            <br key={i} />
          ) : (
            <span class="inline-block whitespace-pre" key={i} aria-hidden="true">
              {ch}
            </span>
          )
        )}
      </div>
    </div>
  );
});
