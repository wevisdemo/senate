import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, inView } from "motion";

const Ch3ExtendCondition = component$(() => {
  const el1 = useSignal<HTMLDivElement>();
  const el2 = useSignal<HTMLDivElement>();
  const el3 = useSignal<HTMLDivElement>();
  const el4 = useSignal<HTMLDivElement>();
  const el5 = useSignal<HTMLDivElement>();

  useVisibleTask$(() => {
    if (el1.value && el2.value && el3.value && el4.value && el5.value) {
      const elTxts = [el1.value, el2.value, el3.value, el4.value, el5.value];
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
  });

  useVisibleTask$(
    () => {
      if (el1.value && el2.value && el3.value && el4.value && el5.value) {
        const elTxts = [el1.value, el2.value, el3.value, el4.value, el5.value];
        elTxts.forEach((el) => {
          el.classList.add("opacity-0");
        });
      }
    },
    { strategy: "document-idle" }
  );

  return (
    <>
      <p ref={el1} class="mb-10 border bg-white p-10 text-center lg:text-left">
        <span class="block font-bold">วาระ 1 ขั้นรับหลักการ</span>{" "}
        ต้องเห็นชอบไม่น้อยกว่าครึ่งหนึ่งของทั้งสองสภา
        และมีเงื่อนไขพิเศษให้ในจำนวนนี้ต้องได้เสียงเห็นชอบจาก ส.ว. ไม่น้อยกว่า 1 ใน 3
        ของจำนวน ส.ว. ทั้งหมดเท่าที่มีอยู่
      </p>
      <div ref={el2} class="bg-repeat-arrow mb-10 h-30 bg-[url(/imgs/darr.svg)]" />
      <p ref={el3} class="mb-10 border bg-white p-10 text-center lg:text-left">
        <span class="font-bold">วาระ 2</span> พิจารณาเรียงลำดับมาตรา ส.ส .+ ส.ว.
        เอาเสียงข้างมากของทั้งสองสภา และต้องเปิดให้ประชาชนที่เข้าชื่อแสดงความเห็นด้วย
        ในกรณีเป็นร่างที่ประชาชนเสนอ
      </p>
      <div ref={el4} class="bg-repeat-arrow mb-10 h-30 bg-[url(/imgs/darr.svg)]" />
      <p ref={el5} class="border bg-white p-10 text-center lg:text-left">
        <span class="font-bold">วาระ 3</span> ขั้นสุดท้าย
        ต้องได้รับเสียงเห็นชอบเกินครึ่งหนึ่งของทั้งสองสภา แต่มีเงื่อนไขพิเศษกำหนดให้ต้องมี
        ส.ส. จากพรรคที่ไม่มีสมาชิกเป็นรัฐมนตรี ประธานสภาผู้แทนราษฎร
        หรือรองประธานผู้แทนราษฎรเห็นชอบด้วยไม่น้อยกว่า ร้อยละ 20
        ของทุกพรรคการเมืองดังกล่าวรวมกัน และต้องได้เสียงเห็นชอบจาก ส.ว. ไม่น้อยกว่า 1 ใน 3
        ของจำนวน ส.ว. ทั้งหมดเท่าที่มีอยู่
      </p>
    </>
  );
});

export default Ch3ExtendCondition;
