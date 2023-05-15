import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView } from "motion";

export const Ch3GeneralConstitution = component$(() => {
  const el = useSignal<HTMLDivElement>();

  useVisibleTask$(() => {
    if (el.value)
      inView(
        el.value,
        () => {
          if (el.value) el.value.classList.add("headShake");
        },
        {
          amount: 0.99,
        }
      );
  });

  return (
    <div ref={el} class="rounded-10 bg-black p-20 text-white">
      <p class="wv-h7 mb-10 flex items-center justify-center gap-10 font-kondolar font-black">
        <svg
          fill="none"
          width="43"
          height="43"
          viewBox="0 0 43 43"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M22.392 15.305l13.71-13.711 5.16 5.16-14.008 13.711-.73.715.73.714 14.009 13.711-5.153 5.153L22.4 26.749l-.715-.73-.715.73L7.26 40.758l-5.161-5.16 13.71-13.711.708-.707-.708-.707L2.1 6.762l5.168-5.168 13.71 13.71.708.708.707-.707z"
            fill="#FFA9D1"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
        ยังไม่มีใครเคยทำ
      </p>
      <p class="text-center">
        เพราะปัญหาเรื่องที่มาและอำนาจของ ส.ว. ที่ต้องถูกแก้ไข เป็นเนื้อหาในบทเฉพาะกาล
      </p>
    </div>
  );
});
