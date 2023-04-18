import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView, stagger, timeline } from "motion";

interface ChapterBreakProps {
  part: number;
  title: string[];
}

const ChapterBreak = component$(({ part, title }: ChapterBreakProps) => {
  const elChapterBreakContainer = useSignal<HTMLDivElement>();
  const elPartContainer = useSignal<HTMLDivElement>();
  const elImgContainer = useSignal<HTMLDivElement>();
  const elTitleContainer = useSignal<HTMLDivElement>();

  useVisibleTask$(() => {
    if (elChapterBreakContainer.value) {
      const threshold = Math.min(
        0.99,
        document.getElementById("100vh")!.getBoundingClientRect().height /
          elChapterBreakContainer.value.getBoundingClientRect().height -
          0.1
      );
      inView(
        elChapterBreakContainer.value,
        () => {
          if (elPartContainer.value && elImgContainer.value && elTitleContainer.value) {
            const [elPartText, elPartNumber] = elPartContainer.value.children;
            const [elImg] = elImgContainer.value.children;
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
              [elImg, { opacity: [0, 1] }, { duration: 1, at: 0.3 }],
              [
                elImg,
                { transform: ["scale(.8)", "scale(1)"] },
                { duration: 1.5, at: 0.3, easing: "ease-out" },
              ],
              [
                [...elTitleContainer.value.children],
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
          }
        },
        {
          amount: threshold,
        }
      );
    }
  });

  useVisibleTask$(
    () => {
      if (elPartContainer.value && elImgContainer.value && elTitleContainer.value)
        [
          ...elPartContainer.value.children,
          ...elImgContainer.value.children,
          ...elTitleContainer.value.children,
        ].forEach((el) => el.classList.add("opacity-0"));
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
      <div
        ref={elPartContainer}
        class="text-center font-kondolar font-black leading-none"
      >
        <span class="wv-h9 mb-[12px] block">Part</span>
        <span class="block text-[100px]">{part}</span>
      </div>
      <div ref={elImgContainer} class="flex h-full items-center">
        <Slot />
      </div>
      <div
        ref={elTitleContainer}
        class="wv-h5 text-center font-kondolar font-black lg:text-left"
      >
        {title.map((ch, i) =>
          ch === "-" ? (
            <br key={i} />
          ) : (
            <span class="inline-block whitespace-pre" key={i}>
              {ch}
            </span>
          )
        )}
      </div>
    </div>
  );
});

export default ChapterBreak;
