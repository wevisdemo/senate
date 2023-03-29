import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, inView, scroll } from "motion";

const Ch1Infinity = component$(() => {
  const elContainer = useSignal<HTMLDivElement>();

  useVisibleTask$(() => {
    if (elContainer.value) {
      const [elBg, ...elContent] = elContainer.value.children;
      scroll(
        animate(elBg, {
          clipPath: [
            "polygon(0 0, 100% 0, 100% 0, 0 0)",
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ],
        }),
        { target: elContainer.value, offset: ["start 0.6", "end 0.9"] }
      );
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
          },
          { amount: 0.99 }
        );
      });
    }
  });

  return (
    <div ref={elContainer} class="mb-60 flex flex-col items-center gap-10 py-40">
      <img
        class="absolute top-0 h-full w-auto object-cover"
        src="./imgs/ch1-infinity.svg"
        alt=""
        width="1099"
        height="2366"
        loading="lazy"
        decoding="async"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
      />
      <div class="mx-auto flex aspect-square w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-full bg-black p-30 text-center text-white opacity-0">
        <img
          class="mb-10"
          src="./imgs/process0.webp"
          alt=""
          width={112}
          height={112}
          loading="lazy"
          decoding="async"
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
      <div class="mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center opacity-0">
        <img
          class="mb-10"
          src="./imgs/process1.webp"
          alt=""
          width={112}
          height={112}
          loading="lazy"
          decoding="async"
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
      <div class="mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center opacity-0">
        <img
          class="mb-10"
          src="./imgs/process2.webp"
          alt=""
          width={112}
          height={112}
          loading="lazy"
          decoding="async"
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
      <div class="mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center opacity-0">
        <img
          class="mb-10"
          src="./imgs/process3.webp"
          alt=""
          width={112}
          height={112}
          loading="lazy"
          decoding="async"
        />
        <p class="wv-h8 font-kondolar font-bold">
          ที่มาของ ส.ว. ในรัฐธรรมนูญ 2560 บททั่วไปที่จะมีการคัด
          เลือกหลังโหวตนายกฯครั้งหน้ามีโอกาสที่จะเอื้อให้เกิดการ “จัดฮั้ว”
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
      <div class="mx-auto flex aspect-square w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-full bg-black p-30 text-center text-white opacity-0">
        <img
          class="mb-10"
          src="./imgs/process4.webp"
          alt=""
          width={180}
          height={180}
          loading="lazy"
          decoding="async"
        />
        <p class="wv-h8 mb-10 font-kondolar font-bold">ระบบ ส.ว.ดำเนินต่อไป</p>
      </div>
    </div>
  );
});

export default Ch1Infinity;
