import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import { animate, inView } from "motion";
import Lottie from "../Lottie";

const Ch2Compare = component$(() => {
  const el40 = useSignal<HTMLDivElement>();
  const el60 = useSignal<HTMLDivElement>();

  useVisibleTask$(
    () => {
      if (el40.value && el60.value) {
        el40.value.classList.add("opacity-0");
        el60.value.classList.add("opacity-0");

        inView(
          el40.value,
          () => {
            if (el40.value)
              animate(
                el40.value,
                {
                  transform: ["translateY(20%)", ""],
                  opacity: [0, 1],
                },
                { duration: 0.5 }
              );
          },
          { amount: 0.5 }
        );
        inView(
          el60.value,
          () => {
            if (el60.value)
              animate(
                el60.value,
                {
                  transform: ["translateY(20%)", ""],
                  opacity: [0, 1],
                },
                { duration: 0.5 }
              );
          },
          { amount: 0.5 }
        );
      }
    },
    { strategy: "document-idle" }
  );

  return (
    <div class="con flex flex-col gap-20 lg:flex-row lg:items-start">
      <div class="flex-1">
        <p class="wv-h6 mb-30 text-center font-kondolar font-black lg:text-left">
          เปรียบเทียบความแตกต่างการเลือกนายกรัฐมนตรีใน รธน. 40 และ 60
        </p>
        <Lottie src="./imgs/lotties/pm-select.json" height="250px" width="250px" />
      </div>
      <div ref={el40} class="flex-1 rounded-10 border bg-white p-20">
        <p class="wv-h6 mb-10 rounded-10 bg-black p-10 text-center font-kondolar font-black text-white">
          รัฐธรรมนูญ&apos;40
        </p>
        <p class="wv-h7 mb-10 text-center font-kondolar font-black">
          การเลือกนายกรัฐมนตรี
        </p>
        <div class="mb-10 flex flex-col items-center">
          <img
            src="./imgs/mp3.webp"
            alt=""
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
          <span class="font-kondalar wv-h7 font-bold">ส.ส.</span>
        </div>
        <p class="wv-b3 text-center lg:text-left">
          <span class="font-bold">อ้างอิงจากรัฐธรรมนูญ 2540</span> ใช้เสียงครึ่งหนึ่งของ
          ส.ส. คือ <span class="font-bold">251 เสียง จาก 500 เสียง</span>
        </p>
      </div>
      <div ref={el60} class="flex-1 rounded-10 border bg-white p-20">
        <p class="wv-h6 mb-10 rounded-10 bg-black p-10 text-center font-kondolar font-black text-white">
          รัฐธรรมนูญ&apos;60
        </p>
        <p class="wv-h7 mb-10 text-center font-kondolar font-black">
          การเลือกนายกรัฐมนตรี
        </p>
        <div class="mb-10 flex items-center justify-center gap-20">
          <div class="flex flex-col items-center">
            <img
              src="./imgs/mp3.webp"
              alt=""
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
            />
            <span class="font-kondalar wv-h7 font-bold">ส.ส.</span>
          </div>
          <svg
            width="47"
            height="46"
            viewBox="0 0 47 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.2505 15.2505V0.0839844H16.0838L16.0838 15.2505H0.916992V30.4172H16.0838L16.0838 45.584H31.2505V30.4172H46.417V15.2505H31.2505Z"
              fill="black"
            />
          </svg>
          <div class="flex flex-col items-center">
            <img
              src="./imgs/senate3.webp"
              alt=""
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
            />
            <span class="font-kondalar wv-h7 font-bold">ส.ว.</span>
          </div>
        </div>
        <p class="wv-b3 text-center lg:text-left">
          ในระยะ 5 ปีแรก ให้ ส.ส. ทั้ง 500 คน กับ ส.ว. 250 คน
          ร่วมกันลงมติเลือกนายกรัฐมนตรีโดยใช้เสียง
          <span class="font-bold">กึ่งหนึ่งของ 2 สภา คือ 376 เสียง</span>
        </p>
      </div>
    </div>
  );
});

export default Ch2Compare;
