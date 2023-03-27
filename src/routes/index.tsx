import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import QWvSharer from "~/components/react/QWvSharer";

export default component$(() => {
  return (
    <>
      <header class="bg-black pt-[100px] pb-[100px] text-white">
        <div class="mx-auto flex w-[60%] gap-[100px]">
          <img
            class="hidden md:block md:w-[40%]"
            src="/header.png"
            alt=""
            width="752"
            height="1848"
            loading="lazy"
            decoding="async"
          />
          <div class="text-center md:text-left">
            <h1 class="wv-h2 !mb-[20px] font-kondolar font-black">
              แลหลัง
              <br />
              เหลียวหน้า ส.ว.
            </h1>
            <p class="wv-h6 !mb-[20px]">
              ต่อให้เลือกตั้งอีกกี่ครั้ง ปัญหาประชาธิปไตยไทยก็จะยังคงอยู่
              ถ้าที่มาและอำนาจของ ส.ว. ยังไม่ถูกแก้ไข
            </p>
            <p class="wv-b3 !mb-[20px]">
              หลังการเลือกตั้งทั่วไป 2566 สมาชิกวุฒิสภา (ส.ว.) ชุดแรกของรัฐธรรมนูญ 2560
              หรือ &ldquo;ส.ว.ชุดพิเศษ&rdquo; ที่แต่งตั้งโดยคณะรักษาความสงบแห่งชาติ (คสช.)
              จะยังคงมีอำนาจในการเลือกนายกรัฐมนตรีคนใหม่ได้ เพราะมีวาระ 5 ปี และเดิมที
              ส.ว.ชุดนี้ก็ถูกพูดถึงในสังคมมาตลอดว่าเป็นปัญหาต่อประชาธิปไตยไทย
              <br />
              <br />
              <strong>
                ชวนอ่านและค้นหาเรื่องราวการสืบทอดอำนาจของ คสช. ผ่านกลไกที่ให้อำนาจ ส.ว.
                กำหนดทิศทางการเมืองไทย เมื่อผลเลือกตั้งของประชาชน ถูกทำให้ไร้ความหมาย
              </strong>
            </p>
            <p class="wv-b3 !mb-[20px] font-bold">Update ล่าสุดเมื่อ: xx xxx xxxx</p>
            <p class="wv-b3 !mb-[20px] text-center font-bold">ข้ามไปสำรวจ</p>
            <div class="mb-[64px] flex min-h-[160px] gap-[20px]">
              <a
                class="group flex flex-1 flex-col gap-[4px] rounded-[10px] border border-white py-[16px] px-[20px] text-white hover:no-underline"
                href="#a"
              >
                <span class="wv-h9 block">ที่มาของ ส.ว.</span>
                <span class="mt-auto flex items-center gap-[15px] font-bold transition-transform group-hover:translate-x-[10px] group-hover:underline">
                  สำรวจ
                  <img
                    src="/rarr.svg"
                    alt=""
                    width="22"
                    height="16"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              </a>
              <a
                class="group flex flex-1 flex-col gap-[4px] rounded-[10px] border border-white py-[16px] px-[20px] text-white hover:no-underline"
                href="#b"
              >
                <span class="wv-h9 block">อำนาจของ ส.ว.</span>
                <span class="mt-auto flex items-center gap-[15px] font-bold transition-transform group-hover:translate-x-[10px] group-hover:underline">
                  สำรวจ
                  <img
                    src="/rarr.svg"
                    alt=""
                    width="22"
                    height="16"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              </a>
              <a
                class="group flex flex-1 flex-col gap-[4px] rounded-[10px] border border-white py-[16px] px-[20px] text-white hover:no-underline"
                href="#c"
              >
                <span class="wv-h9 block">ปัญหาและแนวทางแก้ไข</span>
                <span class="mt-auto flex items-center gap-[15px] font-bold transition-transform group-hover:translate-x-[10px] group-hover:underline">
                  สำรวจ
                  <img
                    src="/rarr.svg"
                    alt=""
                    width="22"
                    height="16"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              </a>
            </div>
            <p class="wv-u1 text-center font-semibold">
              ลองสำรวจปัญหาต่าง ๆ ของ ส.ว. กันที่นี่
              <img
                class="mx-auto mt-[8px] block"
                src="/darr.svg"
                alt=""
                width="16"
                height="31"
                loading="lazy"
                decoding="async"
              />
            </p>
          </div>
        </div>
      </header>
      <main class="min-h-[50vh] bg-bg">
        <h1 class="text-lg font-bold">Senate</h1>
        <p>
          ชวนอ่านและค้นหาเรื่องราวการสืบทอดอำนาจของ คสช. ผ่านกลไกที่ให้อำนาจ ส.ว.
          กำหนดทิศทางการเมืองไทย เมื่อผลเลือกตั้งของประชาชนถูกทำให้ไร้ความหมาย
        </p>
      </main>
      <footer class="bg-black pt-[60px] pb-[135px] text-white">
        <h2 class="wv-h4 !mx-auto !mb-[50px] w-text text-center font-kondolar font-black">
          ส.ว. ในรัฐธรรมนูญ 2560 คือปัญหาของประชาธิปไตยไทย
        </h2>
        <p class="wv-b1 !mx-auto !mb-[60px] w-text text-center font-bold">
          &ldquo;เพราะบทเฉพาะกาลคืออาวุธของ คสช. และมาตรา 269, 270, 271, 272
          ที่กล่าวถึงที่มาและอำนาจของ ส.ว. คือมาตราที่ขัดกับหลักประชาธิปไตย&rdquo;
          <br />
          <br />
          ในระบบรัฐสภา เสียงของประชาชนเท่านั้นที่ &ldquo;ตัดสิน&rdquo; เลือกตั้ง'66
          ประชาชนเลือก<span class="nobr">นายกฯ</span> ส.ส. ดังนั้นแล้ว มติของ ส.ว.
          ต้องเคารพเจตจํานงของเสียงข้างมาก ส.ว. ต้องลงคะแนนให้กับแคนดิเดตนายกฯ
          จากพรรคการเมืองที่รวบรวมเสียงส่วนใหญ่ของ ส.ส. ได้เท่านั้น
        </p>
        <div class="mx-auto flex w-[60%] flex-col gap-[64px] md:flex-row">
          <img
            class="aspect-square w-full object-contain md:w-1/2"
            src="/footer.png"
            alt=""
            width="752"
            height="752"
            loading="lazy"
            decoding="async"
          />
          <div class="text-center md:text-left">
            <p class="wv-b2 !mb-[25px]">
              การแก้ไขปัญหาเกี่ยวกับ ส.ว. ถือว่าเป็น เรื่องสำคัญ
              เพื่อให้กลไกทางรัฐสภาเชื่อมโยงกับประชาชนให้ได้มากที่สุด และเพื่อ
              ให้บรรดาสมาชิกรัฐสภาทำงานเพื่อประชาชนเป็นที่ตั้ง
              <br />
              <br />
              <strong>ไม่ใช่ทำงานเพื่อประโยชน์ของใครอื่น นอกจากประชาชน</strong>
            </p>
            <QWvSharer />
          </div>
        </div>
      </footer>
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
