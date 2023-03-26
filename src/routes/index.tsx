import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-lg font-bold">Senate</h1>
      <p>
        ชวนอ่านและค้นหาเรื่องราวการสืบทอดอำนาจของ คสช. ผ่านกลไกที่ให้อำนาจ ส.ว.
        กำหนดทิศทางการเมืองไทย เมื่อผลเลือกตั้งของประชาชนถูกทำให้ไร้ความหมาย
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Senate — WeVis",
  meta: [
    {
      name: "description",
      content:
        "ชวนอ่านและค้นหาเรื่องราวการสืบทอดอำนาจของ คสช. ผ่านกลไกที่ให้อำนาจ ส.ว. กำหนดทิศทางการเมืองไทย เมื่อผลเลือกตั้งของประชาชนถูกทำให้ไร้ความหมาย",
    },
  ],
};
