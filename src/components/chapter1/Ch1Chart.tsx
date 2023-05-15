import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView } from "motion";

interface Ch1ChartProps {
  who: string;
  desc?: string[];
  data: number[];
}

const MAX_NUM = 130;

export const Ch1Chart = component$<Ch1ChartProps>(({ who, desc, data }) => {
  const elContainer = useSignal<HTMLDivElement>();

  useVisibleTask$(
    () => {
      if (elContainer.value) {
        const [, elBar] = elContainer.value.children;
        elContainer.value.classList.add("opacity-0", "translate-y-50");
        elBar.classList.add("scale-x-0");

        inView(
          elContainer.value,
          () => {
            if (elContainer.value) {
              elContainer.value.classList.remove("opacity-0", "translate-y-50");
              elBar.classList.remove("scale-x-0");
            }
          },
          {
            amount: 0.99,
          }
        );
      }
    },
    {
      strategy: "document-idle",
    }
  );

  return (
    <div ref={elContainer} class="mb-5 transition duration-500">
      <p class="mb-5">
        <span class="wv-h8 mr-10 inline-block font-kondolar font-bold">{who}</span>
        <span class="wv-b3 mr-10 inline-block font-bold">{data[3]} คน</span>
        {desc?.map((txt, i) => (
          <>
            <span key={i} class="wv-b4 nobr">
              {txt}
            </span>{" "}
          </>
        ))}
      </p>
      <div class="flex h-40 w-full origin-left transition-transform duration-500">
        {data[0] > 0 && (
          <>
            <div
              class="bg-senate-green"
              style={{ width: (data[0] / MAX_NUM) * 100 + "%" }}
            />
            <span class="sr-only">เป็น ส.ว. โดยตำแหน่ง {data[0]} คน</span>
          </>
        )}
        {data[1] > 0 && (
          <>
            <div
              class="bg-senate-blue"
              style={{ width: (data[1] / MAX_NUM) * 100 + "%" }}
            />
            <span class="sr-only">เป็น ส.ว. เลือกโดย คสช. {data[1]} คน</span>
          </>
        )}
        {data[2] > 0 && (
          <>
            <div
              class="bg-senate-pink"
              style={{ width: (data[2] / MAX_NUM) * 100 + "%" }}
            />
            <span class="sr-only">เป็น ส.ว. เลือกกันเอง {data[2]} คน</span>
          </>
        )}
      </div>
    </div>
  );
});
