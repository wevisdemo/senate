import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Ch1Infinity from "~/components/chapter1/Ch1Infinity";
import ChapterBreak from "~/components/ChapterBreak";
import JumpToContent from "~/components/JumpToContent";
import QWvSharer from "~/components/react/QWvSharer";
import TitleBlock from "~/components/TitleBlock";

export default component$(() => {
  return (
    <>
      <header class="bg-black pb-30 text-white md:pt-100 md:pb-60">
        <h1 class="wv-h2 py-20 text-center font-kondolar font-black md:hidden">
          <span class="nobr">แลหลัง</span>
          <br />
          <span class="nobr">เหลียวหน้า</span> <span class="nobr">ส.ว.</span>
        </h1>
        <div class="container mx-auto mb-20 flex flex-col gap-20 md:mb-[48px] md:flex-row">
          <div class="flex-1">
            <img
              class="mx-auto h-full max-h-[778px] w-full max-w-[311px] object-contain object-top"
              src="./imgs/header.webp"
              alt=""
              width="311"
              height="778"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="flex-1 text-center md:text-left">
            <h1 class="wv-h2 mb-20 hidden font-kondolar font-black md:block">
              <span class="nobr">แลหลัง</span>
              <br />
              <span class="nobr">เหลียวหน้า</span>
              <span class="nobr">ส.ว.</span>
            </h1>
            <p class="wv-h6 mb-20 font-kondolar">
              ต่อให้เลือกตั้งอีกกี่ครั้ง ปัญหาประชาธิปไตยไทยก็จะยังคงอยู่
              ถ้าที่มาและอำนาจของ ส.ว. ยังไม่ถูกแก้ไข
            </p>
            <p class="wv-b3 mb-20">
              หลังการเลือกตั้งทั่วไป 2566 สมาชิกวุฒิสภา (ส.ว.) ชุดแรกของรัฐธรรมนูญ 2560
              หรือ <strong>&ldquo;ส.ว.ชุดพิเศษ&rdquo;</strong>{" "}
              ที่แต่งตั้งโดยคณะรักษาความสงบแห่งชาติ (คสช.)
              จะยังคงมีอำนาจในการเลือกนายกรัฐมนตรีคนใหม่ได้ เพราะมีวาระ 5 ปี และเดิมที
              ส.ว.ชุดนี้ก็ถูกพูดถึงในสังคมมาตลอดว่าเป็นปัญหาต่อประชาธิปไตยไทย
              <br />
              <br />
              <strong>
                ชวนอ่านและค้นหาเรื่องราวการสืบทอดอำนาจของ คสช. ผ่านกลไกที่ให้อำนาจ ส.ว.
                กำหนดทิศทางการเมืองไทย เมื่อผลเลือกตั้งของประชาชน ถูกทำให้ไร้ความหมาย
              </strong>
            </p>
            <p class="wv-b3 font-bold">
              Update ล่าสุดเมื่อ:{" "}
              {new Date().toLocaleDateString("th-TH", { dateStyle: "long" })}
            </p>
          </div>
        </div>
        <div class="container">
          <p class="wv-h7 mb-20 text-center font-kondolar font-black">ข้ามไปสำรวจ</p>
          <div class="flex flex-col gap-20 md:flex-row">
            <JumpToContent
              id="ch1"
              src="./imgs/skip-ch1.webp"
              label="ส.ว. เลือกโดย คสช. เป็นใคร มาจากไหนบ้าง?"
            />
            <JumpToContent
              id="ch2"
              src="./imgs/skip-ch2.webp"
              label="ส.ว. ตัดสินใจอะไรแทนประชาชนไปแล้วบ้าง?"
            />
            <JumpToContent
              id="ch3"
              src="./imgs/skip-ch3.webp"
              label="ปัญหา ส.ว. เราทำอะไรได้บ้าง?"
            />
          </div>
        </div>
      </header>
      {/* <svg class="absolute h-0 w-0">
        <clipPath id="starClip" clipPathUnits="objectBoundingBox">
          <path d="m0.521,0.023 l-0.021,-0.022 l-0.021,0.022 l-0.123,0.131 l-0.179,-0.006 l-0.031,-0.001 l0.001,0.031 l0.006,0.179 l-0.131,0.123 l-0.022,0.021 l0.022,0.021 l0.131,0.123 l-0.006,0.179 l-0.001,0.031 l0.031,-0.001 l0.179,-0.006 l0.123,0.131 l0.021,0.022 l0.021,-0.022 l0.123,-0.131 l0.179,0.006 l0.031,0.001 l-0.001,-0.031 l-0.006,-0.179 l0.131,-0.123 l0.022,-0.021 l-0.022,-0.021 l-0.131,-0.123 l0.006,-0.179 l0.001,-0.031 l-0.031,0.001 l-0.179,0.006 l-0.123,-0.131"></path>
        </clipPath>
      </svg> */}
      <main class="min-h-[50vh] bg-bg">
        <section>
          <ChapterBreak
            part={1}
            title={[
              "ส.ว.",
              " ",
              "เลือก",
              "โดย",
              " ",
              "คสช.",
              "-",
              "เป็น",
              "ใคร",
              " ",
              "มา",
              "จาก",
              "ไหน",
              "บ้าง",
              "?",
            ]}
          >
            <img
              class="h-[225px] w-auto opacity-0"
              src="./imgs/ch1.webp"
              alt=""
              width={253}
              height={225}
              loading="lazy"
              decoding="async"
            />
          </ChapterBreak>
          <img
            class="my-60 mx-auto h-auto w-[87.5%] max-w-[632px]"
            src="./imgs/ch1-break.webp"
            alt=""
            width={632}
            height={122}
            loading="lazy"
            decoding="async"
          />
          <TitleBlock>
            เลือกตั้ง&apos;66 ส.ว. ชุดเดิม
            <br />
            ยังมีอำนาจเลือก &ldquo;นายกฯ&rdquo; คนใหม่
          </TitleBlock>
          <p class="wv-b2 container mb-60 text-center">
            เมื่อวาระของ ส.ว. คือ 5 ปี ส.ว. ชุดปัจจุบันจะทำงานไปจนถึง 11 พฤษภาคม 2567
            ซึ่งเป็นจุดที่น่ากังวลของการเมืองไทยในอนาคต เนื่องจาก…
          </p>
          <Ch1Infinity />
          <TitleBlock>ที่มาของ ส.ว.</TitleBlock>
          <p class="wv-b2 container mb-30 text-center">
            ส.ว. ในรัฐธรรมนูญ 2560 ล้วนมีที่มาเกี่ยวข้องกับ คสช. ไม่ว่าจะมาจากการคัดเลือก
            โดยตรงหรือโดยอ้อม
          </p>
          <p class="wv-h3 container mb-30 text-center font-kondolar font-black">
            เส้นทางของ ส.ว.
          </p>
          <p class="wv-h6 container mb-60 text-center font-kondolar font-bold">
            ส.ว. ทั้งหมด 250 ที่นั่ง ประกอบไปด้วย 3 ประเภท
          </p>
        </section>
        <section>
          <ChapterBreak
            part={2}
            title={[
              "ส.ว.",
              " ",
              "ตัดสินใจ",
              "อะไร",
              "-",
              "แทน",
              "ประชาชน",
              "ไป",
              "แล้ว",
              "บ้าง",
              "?",
            ]}
          >
            <img
              class="h-[273px] w-auto opacity-0"
              src="./imgs/ch2.webp"
              alt=""
              width={261}
              height={273}
              loading="lazy"
              decoding="async"
            />
          </ChapterBreak>
          <div class="h-screen"></div>
        </section>
        <section>
          <ChapterBreak
            part={3}
            title={["ปัญหา", " ", "ส.ว.", "-", "เรา", "ทำ", "อะไร", "ได้", "บ้าง", "?"]}
          >
            <img
              class="h-[232px] w-auto opacity-0"
              src="./imgs/ch3.webp"
              alt=""
              width={255}
              height={232}
              loading="lazy"
              decoding="async"
            />
          </ChapterBreak>
          <div class="h-screen"></div>
        </section>
      </main>
      <footer class="bg-black py-120 text-white">
        <img
          class="mx-auto mb-50 h-auto w-[80%] max-w-[333px]"
          src="./imgs/footer.webp"
          alt=""
          width="333"
          height="333"
          loading="lazy"
          decoding="async"
        />
        <h2 class="wv-h4 container mb-50 text-center font-kondolar font-black">
          ส.ว. ในรัฐธรรมนูญ 2560 คือปัญหาของประชาธิปไตยไทย
        </h2>
        <p class="wv-b2 container mb-[75px] text-center font-bold">
          เลือกตั้ง&apos;66 ประชาชนเลือกนายกฯ ผ่านการเลือก ส.ส. ดังนั้นแล้ว มติของ ส.ว.
          ต้องเคารพเจตจํานงของเสียงข้างมาก ส.ว. ต้องลงคะแนน ให้กับแคนดิเดตนายกฯ
          จากพรรคการเมืองที่รวบรวมเสียงส่วนใหญ่ของ ส.ส. ได้เท่านั้น
          <br />
          <br />
          ในระบบรัฐสภา เสียงของประชาชนเท่านั้นที่ &ldquo;ตัดสิน&rdquo;
          การแก้ไขปัญหาในเรื่อง ส.ว. จึงเป็นเรื่องสำคัญ เพื่อให้ได้มาซึ่ง
          กลไกทางรัฐสภาที่ยึดโยงกับเจตนารมณ์ของประชาชนมากที่สุด
        </p>
        <QWvSharer />
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
