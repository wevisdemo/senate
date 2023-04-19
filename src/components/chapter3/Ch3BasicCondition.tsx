import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, inView } from "motion";

export const Ch3BasicCondition = component$(() => {
  const elTxt1 = useSignal<HTMLDivElement>();
  const elTxt2 = useSignal<HTMLDivElement>();
  const elTxt3 = useSignal<HTMLDivElement>();
  const elTxt4 = useSignal<HTMLDivElement>();

  useVisibleTask$(
    () => {
      if (elTxt1.value && elTxt2.value && elTxt3.value && elTxt4.value) {
        const elTxts = [elTxt1.value, elTxt2.value, elTxt3.value, elTxt4.value];

        elTxts.forEach((el) => {
          el.classList.add("opacity-0");
        });

        elTxts.forEach((el) => {
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
    },
    { strategy: "document-idle" }
  );

  return (
    <>
      <div
        ref={elTxt1}
        class="wv-b5 mb-15 flex items-center gap-10 bg-black px-20 py-10 font-bold text-white"
      >
        <img
          src="./imgs/cabinet.webp"
          alt=""
          width={60}
          height={60}
          loading="lazy"
          decoding="async"
        />
        <span>คณะรัฐมนตรี</span>
      </div>
      <div
        ref={elTxt2}
        class="wv-b5 mb-15 flex items-center gap-10 bg-black px-20 py-10 text-white"
      >
        <img
          src="./imgs/mp.webp"
          alt=""
          width={60}
          height={60}
          loading="lazy"
          decoding="async"
        />
        <span>
          <span class="font-bold">ส.ส.</span> ไม่น้อยกว่า 1 ใน 5 ของจำนวน ส.ส. ที่มีอยู่
        </span>
      </div>
      <div
        ref={elTxt3}
        class="wv-b5 mb-15 flex items-center gap-10 bg-black px-20 py-10 text-white"
      >
        <div class="flex flex-[0_0_60px] flex-col gap-10">
          <img
            src="./imgs/mp.webp"
            alt=""
            width={60}
            height={60}
            loading="lazy"
            decoding="async"
          />
          <img
            src="./imgs/senate.webp"
            alt=""
            width={60}
            height={60}
            loading="lazy"
            decoding="async"
          />
        </div>
        <span>
          <span class="font-bold">ส.ส. + ส.ว.</span> ไม่น้อยกว่า 1 ใน 5
          ของจำนวนสมาชิกเท่าที่มีอยู่ทั้งสองสภา
        </span>
      </div>
      <div
        ref={elTxt4}
        class="wv-b5 flex items-center gap-10 bg-black px-20 py-10 text-white"
      >
        <img
          src="./imgs/people.webp"
          alt=""
          width={60}
          height={60}
          loading="lazy"
          decoding="async"
        />
        <span>
          <span class="font-bold">ประชาชน</span> ผู้มีสิทธิเลือกตั้งไม่น้อยกว่า 50,000 คน
        </span>
      </div>
    </>
  );
});
