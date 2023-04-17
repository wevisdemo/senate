import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView } from "motion";

interface Ch1ChartProps {
  who: string;
  desc?: string;
  data: number[];
}

const MAX_NUM = 130;

const Ch1Chart = component$<Ch1ChartProps>(({ who, desc, data }) => {
  const elBar = useSignal<HTMLDivElement>();

  useVisibleTask$(
    () => {
      if (elBar.value) {
        elBar.value.classList.add("scale-x-0");
        inView(
          elBar.value,
          () => {
            if (elBar.value) elBar.value.classList.remove("scale-x-0");
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
    <div class="mb-5">
      <p class="mb-5 flex flex-wrap items-baseline gap-x-10">
        <span class="wv-h8 font-kondolar font-bold">{who}</span>
        <span class="wv-b3 font-bold">{data[3]} คน</span>
        {desc && <span class="wv-b4 nobr">{desc}</span>}
      </p>
      <div
        ref={elBar}
        class="flex h-40 w-full origin-left transition-transform duration-500"
      >
        {data[0] > 0 && (
          <div
            class="bg-senate-green"
            style={{ width: (data[0] / MAX_NUM) * 100 + "%" }}
          />
        )}
        {data[1] > 0 && (
          <div
            class="bg-senate-blue"
            style={{ width: (data[1] / MAX_NUM) * 100 + "%" }}
          />
        )}
        {data[2] > 0 && (
          <div
            class="bg-senate-pink"
            style={{ width: (data[2] / MAX_NUM) * 100 + "%" }}
          />
        )}
      </div>
    </div>
  );
});

export default Ch1Chart;
