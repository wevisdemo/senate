import type { QRL } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

export interface CheckPillProps {
  id: string;
  checked?: boolean;
  onChange?: QRL<() => any>;
}

const CheckPill = component$<CheckPillProps>(({ id, checked, onChange }) => {
  return (
    <div class="inline-block">
      <input
        class="pill-input sr-only"
        type="checkbox"
        id={"checkpill-" + id}
        checked={checked}
        onChange$={onChange}
      />
      <label
        for={"checkpill-" + id}
        class="pill-label flex cursor-pointer select-none items-center gap-4 rounded-full border py-4 px-10"
      >
        <div class="pill-checkbox m-[3px] flex h-[18px] w-[18px] items-center justify-center rounded-[3px] bg-white ring-2 ring-inset ring-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 11"
            width="14"
            height="11"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M5 10.5l-5-5 1.4-1.4L5 7.7 12.6.1 14 1.5l-9 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <Slot />
      </label>
    </div>
  );
});

export default CheckPill;
