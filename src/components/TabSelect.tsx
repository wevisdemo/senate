import type { QRL } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";

export interface TabSelectProps {
  id: string;
  secondBtnText: string;
  onChange: QRL<(value: number) => any>;
}

const TabSelect = component$<TabSelectProps>(({ id, secondBtnText, onChange }) => {
  const inputName = "tabselect-" + id;

  return (
    <div class="flex items-center justify-center gap-20 p-10">
      <p class="wv-b2 font-bold">โหมดการสำรวจ</p>
      <div class="flex overflow-hidden rounded-10 bg-white ring-1 ring-inset ring-black">
        <input
          class="peer/0 sr-only"
          type="radio"
          name={inputName}
          id={inputName + "-choice-0"}
          onChange$={() => onChange(0)}
          checked
        />
        <label
          class="wv-b3 z-10 flex w-[200px] cursor-pointer select-none items-center justify-center gap-[2px] rounded-10 p-10 text-center font-bold transition-colors peer-checked/0:text-white"
          for={inputName + "-choice-0"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 25"
            width="24"
            height="25"
          >
            <circle cx="6" cy="6" r="2" fill="currentColor" />
            <circle cx="6" cy="12" r="2" fill="currentColor" />
            <circle cx="6" cy="18" r="2" fill="currentColor" />
            <circle cx="12" cy="6" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="18" r="2" fill="currentColor" />
            <circle cx="18" cy="6" r="2" fill="currentColor" />
            <circle cx="18" cy="12" r="2" fill="currentColor" />
            <circle cx="18" cy="18" r="2" fill="currentColor" />
          </svg>
          ดูภาพรวม
        </label>
        <input
          class="peer/1 sr-only"
          type="radio"
          name={inputName}
          id={inputName + "-choice-1"}
          onChange$={() => onChange(1)}
        />
        <label
          class="wv-b3 z-10 flex w-[200px] cursor-pointer select-none items-center justify-center gap-[2px] rounded-10 p-10 text-center font-bold transition-colors peer-checked/1:text-white"
          for={inputName + "-choice-1"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M4.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 4.5H8v3h13v-3zM4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 10.5H8v3h13v-3zM4.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 16.5H8v3h13v-3z"
            />
          </svg>
          {secondBtnText}
        </label>
        <div class="absolute top-0 left-0 h-full w-[200px] rounded-10 bg-black transition-transform duration-300 ease-in-out peer-checked/1:translate-x-full" />
      </div>
      <Slot />
    </div>
  );
});

export default TabSelect;
