import { component$ } from "@builder.io/qwik";

interface Ch1ChartProps {
  who: string;
  number: number;
  desc?: string;
  series1?: number;
  series2?: number;
  series3?: number;
}

const MAX_NUM = 130;

const Ch1Chart = component$<Ch1ChartProps>(
  ({ who, number, desc, series1, series2, series3 }) => {
    return (
      <div class="mb-5">
        <p class="mb-5 flex flex-wrap items-baseline gap-x-10">
          <span class="wv-h8 font-kondolar font-bold">{who}</span>
          <span class="wv-b3 font-bold">{number} คน</span>
          {desc && <span class="wv-b4 nobr">{desc}</span>}
        </p>
        <div class="flex h-40 w-full">
          {series1 && (
            <div
              class="bg-senate-green"
              style={{ width: (series1 / MAX_NUM) * 100 + "%" }}
            ></div>
          )}
          {series2 && (
            <div
              class="bg-senate-blue"
              style={{ width: (series2 / MAX_NUM) * 100 + "%" }}
            ></div>
          )}
          {series3 && (
            <div
              class="bg-senate-pink"
              style={{ width: (series3 / MAX_NUM) * 100 + "%" }}
            ></div>
          )}
        </div>
      </div>
    );
  }
);

export default Ch1Chart;
