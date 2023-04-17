import type { QRL } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

export interface RadioPillProps {
  id: string;
  name: string;
  checked?: boolean;
  onChange?: QRL<() => any>;
}

const RadioPill = component$<RadioPillProps>(({ id, name, checked, onChange }) => {
  return (
    <div class="inline-block">
      <input
        class="pill-input sr-only"
        type="radio"
        name={"radiopill-" + name}
        id={"radiopill-" + name + "-" + id}
        checked={checked}
        onChange$={() => onChange?.()}
      />
      <label
        for={"radiopill-" + name + "-" + id}
        class="pill-label flex cursor-pointer select-none items-center gap-4 rounded-full border py-4 px-10"
      >
        <div class="pill-radio m-[2px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white ring-2 ring-inset ring-black" />
        <Slot />
      </label>
    </div>
  );
});

export default RadioPill;
