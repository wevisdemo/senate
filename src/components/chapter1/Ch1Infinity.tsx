import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, inView, scroll } from "motion";
import Lottie from "~/components/Lottie";

// FIXME: Show me if js not enabled

const Ch1Infinity = component$(() => {
  const elContainer = useSignal<HTMLDivElement>();
  const currentLottieInview = useSignal<number[]>([]);

  useVisibleTask$(() => {
    if (elContainer.value) {
      const [elBg, ...elContent] = elContainer.value.children;
      if (window.getComputedStyle(elBg).display !== "none") {
        scroll(
          animate(elBg, {
            clipPath: [
              "polygon(0 0, 100% 0, 100% 0, 0 0)",
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ],
          }),
          { target: elContainer.value, offset: ["start 0.6", "end 0.9"] }
        );
      }
      [...elContent].forEach((el) => {
        inView(
          el,
          () => {
            animate(
              el,
              {
                opacity: [0, 1],
                transform: ["translateY(20px)", "translateY(0)"],
              },
              {
                duration: 0.5,
              }
            );
            const lottieData = (el as HTMLDivElement).dataset.lottie;
            if (lottieData) {
              currentLottieInview.value = [...currentLottieInview.value, +lottieData];
            }
          },
          { amount: 0.99 }
        );
      });
    }
  });

  return (
    <div ref={elContainer} class="mb-60 flex flex-col items-center gap-10 py-40">
      <svg
        class="absolute top-0 hidden h-full w-auto object-cover md:block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 149 320"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          willChange: "clip-path",
        }}
      >
        <path
          fill="#FFA9D1"
          d="M126.587 297.783c29.057-29.275 29.057-76.731.34-106.006l-84.509-85.144c-17.366-17.496-17.366-46.443.34-63.94 8.35-8.412 19.7-13.118 31.73-13.118 12.03 0 23.381 4.706 31.732 13.46 17.366 17.497 17.366 46.444-.34 63.94L83.504 129.52l20.706 20.861 22.716-22.886c28.73-28.946 29.056-76.388.339-105.662-29.07-28.946-76.495-29.275-105.554 0C7.685 35.965 0 54.473 0 74.664c0 20.191 7.685 39.044 21.71 53.174l84.509 85.144c17.366 17.497 17.366 46.444-.339 63.94-17.705 17.496-46.097 17.497-63.462-.342-17.366-17.496-17.366-46.443.339-63.939l22.376-22.545-20.706-20.862-22.376 22.545C8.025 205.91 0 225.089 0 244.953c0 19.85 7.685 38.7 21.71 52.831C35.737 311.915 54.447 319.658 74.148 320c19.701-.342 38.414-8.086 52.439-22.217z"
        />
      </svg>
      <div
        data-lottie="1"
        class="mx-auto flex aspect-square w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-full bg-black p-30 text-center text-white opacity-0"
      >
        <Lottie
          src="./imgs/lotties/process/01.json"
          width="112px"
          height="112px"
          delayMs={250}
          play={currentLottieInview.value.includes(1)}
        />
        <p class="wv-h8 font-kondolar font-bold">
          ส.ว. ชุดปัจจุบันที่แต่งตั้งตามกระบวน การในบทเฉพาะกาลของรัฐธรรมนูญ
        </p>
        <p class="wv-h9 mb-10">มาตรา 269</p>
      </div>
      <img
        class="opacity-0"
        src="./imgs/darr.svg"
        alt=""
        width={49}
        height={56}
        loading="lazy"
        decoding="async"
      />
      <div class="flex items-center gap-4 rounded-full bg-black py-4 px-20 text-white opacity-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 17 17"
          width="17"
          height="17"
        >
          <path d="M14.276 4.002c.275.245.3.666.056.941l-7.112 8a.667.667 0 01-.996 0l-3.556-4a.667.667 0 01.997-.886l3.057 3.44 6.613-7.44a.667.667 0 01.941-.055z" />
        </svg>
        <span class="wv-b4 font-bold">อยู่ในวาระ</span>
      </div>
      <img
        class="opacity-0"
        src="./imgs/darr.svg"
        alt=""
        width={49}
        height={56}
        loading="lazy"
        decoding="async"
      />
      <div
        data-lottie="2"
        class="mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center opacity-0"
      >
        <Lottie
          src="./imgs/lotties/process/02.json"
          width="112px"
          height="112px"
          delayMs={250}
          play={currentLottieInview.value.includes(2)}
        />
        <p class="wv-h8 font-kondolar font-bold">
          สามารถโหวตเลือก นายกรัฐมนตรีในสมัยหน้า ได้อีก 1 ครั้ง
        </p>
        <p class="wv-h9">มาตรา 272</p>
      </div>
      <img
        class="opacity-0"
        src="./imgs/darr.svg"
        alt=""
        width={49}
        height={56}
        loading="lazy"
        decoding="async"
      />
      <div class="flex items-center gap-4 rounded-full bg-black py-4 px-20 text-white opacity-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 17 17"
          width="17"
          height="17"
        >
          <path d="M4.028 4.029c.26-.26.683-.26.943 0L8.5 7.557l3.528-3.528a.667.667 0 11.943.943L9.442 8.5l3.53 3.529a.667.667 0 01-.944.943L8.5 9.443 4.97 12.972a.667.667 0 01-.943-.943L7.557 8.5 4.028 4.972a.667.667 0 010-.943z" />
        </svg>
        <span class="wv-b4 font-bold">อยู่ในวาระ</span>
      </div>
      <img
        class="opacity-0"
        src="./imgs/darr.svg"
        alt=""
        width={49}
        height={56}
        loading="lazy"
        decoding="async"
      />
      <div
        data-lottie="3"
        class="mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center opacity-0"
      >
        <Lottie
          src="./imgs/lotties/process/03.json"
          width="112px"
          height="112px"
          delayMs={250}
          play={currentLottieInview.value.includes(3)}
        />
        <p class="wv-h8 font-kondolar font-bold">
          คัดเลือก ส.ว. ชุดใหม่ที่ ตามกระบวนการในบททั่วไปของรัฐธรรมนูญ
        </p>
        <p class="wv-h9">มาตรา 107</p>
      </div>
      <img
        class="opacity-0"
        src="./imgs/darr.svg"
        alt=""
        width={49}
        height={56}
        loading="lazy"
        decoding="async"
      />
      <div
        data-lottie="4"
        class="mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center opacity-0"
      >
        <Lottie
          src="./imgs/lotties/process/04.json"
          width="112px"
          height="112px"
          delayMs={250}
          play={currentLottieInview.value.includes(4)}
        />
        <p class="wv-h8 font-kondolar font-bold">
          ที่มาของ ส.ว. ในรัฐธรรมนูญ 2560 บททั่วไปที่จะมีการคัด
          เลือกหลังโหวตนายกฯครั้งหน้ามีโอกาสที่จะเอื้อให้เกิดการ &ldquo;จัดฮั้ว&rdquo;
          ซึ่งส่งผลให้ได้กลุ่มคนที่จะเข้ามาสนับสนุนรัฐบาล คสช. แปลงรูปต่อไป
        </p>
      </div>
      <img
        class="opacity-0"
        src="./imgs/darr.svg"
        alt=""
        width={49}
        height={56}
        loading="lazy"
        decoding="async"
      />
      <div
        data-lottie="5"
        class="mx-auto flex aspect-square w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-full bg-black p-30 text-center text-white opacity-0"
      >
        <Lottie
          src="./imgs/lotties/process/05.json"
          width="180px"
          height="180px"
          delayMs={250}
          play={currentLottieInview.value.includes(5)}
        />
        <p class="wv-h8 mb-10 font-kondolar font-bold">ระบบ ส.ว.ดำเนินต่อไป</p>
      </div>
    </div>
  );
});

export default Ch1Infinity;
