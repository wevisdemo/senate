import { component$ } from "@builder.io/qwik";

import Ch1Infinity from "~/components/chapter1/Ch1Infinity";
import Ch3BasicCondition from "~/components/chapter3/Ch3BasicCondition";
import Ch3Constitution from "~/components/chapter3/Ch3Constitution";
import Ch3ExtendCondition from "~/components/chapter3/Ch3ExtendCondition";
import Ch3FixImg from "~/components/chapter3/Ch3FixImg";
import ChapterBreak from "~/components/ChapterBreak";
import JumpToContent from "~/components/JumpToContent";
import Lottie from "~/components/Lottie";
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
              loading="eager"
              decoding="async"
            />
            {/* <Lottie
              clazz="mx-auto !h-full max-h-[778px] !w-full max-w-[311px]"
              src="./imgs/lotties/intro.json"
              width="311px"
              height="778px"
            /> */}
          </div>
          <div class="flex-1 text-center md:text-left">
            <h1 class="wv-h2 mb-20 hidden font-kondolar font-black md:block">
              <span class="nobr">แลหลัง</span>
              <br />
              <span class="nobr">เหลียวหน้า</span> <span class="nobr">ส.ว.</span>
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
            <Lottie
              clazz="!w-auto opacity-0"
              src="./imgs/lotties/chapter/01.json"
              width="253px"
              height="225px"
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
          <TitleBlock class="mt-100">
            อำนาจของ ส.ว. ผ่านการโหวตสามารถกำหนดทิศทางการเมือง
          </TitleBlock>
          <img
            class="mx-auto mb-60 h-[200px] w-auto"
            src="./imgs/vote.svg"
            alt=""
            width={180}
            height={200}
            loading="lazy"
            decoding="async"
          />
          <Lottie
            src="./imgs/lotties/textslide.json"
            loop
            width="457px"
            height="125px"
            clazz="mx-auto mb-60 h-auto !w-[80%] max-w-[457px]"
          />
          <p class="wv-b2 container mb-60 text-center">
            รัฐธรรมนูญ 2560 ให้อำนาจ ส.ว.
            เหล่านี้มากถึงขนาดที่สามารถกำหนดทิศทางของการเมืองไทยได้
            <br />
            <br />
            เมื่อพิจารณาผลโหวตของ ส.ว. ต่อมติต่าง ๆ ที่มีความสำคัญในสภา จะพบว่า
            คนเหล่านี้มักใช้อำนาจของตนออกเสียงสนับสนุนรัฐบาล คสช. แปลงรูปบ่อยครั้ง
            โดยสามารถแยกกลุ่มมติที่เอื้อประโยชน์ได้ 2 กลุ่ม ได้แก่{" "}
            <strong>มติในที่ประชุมวุฒิสภา และ มติในที่ประชุมรัฐสภา</strong>
          </p>
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
          <TitleBlock class="mt-100">
            แล้วจะแก้ไขปัญหา ส.ว. ที่ส่งผลกระทบต่อการเมืองประเทศไทยได้อย่างไร?
          </TitleBlock>
          <p class="wv-b2 container mb-60 text-center">
            <strong>&ldquo;การแก้ไขเรื่องที่มาและอำนาจของ ส.ว.&rdquo;</strong>{" "}
            คือสิ่งที่ถูกพูดถึงมาตลอด โดยมีการนำเสนอหลากหลายแนวทาง
          </p>
          <p class="wv-h4 container text-center font-kondolar font-black">
            Model เกี่ยวกับการแก้ไขปัญหาเรื่องที่มา และอำนาจของ ส.ว.
          </p>
          <details>
            <summary>ยกเลิก ส.ว. เปลี่ยนเป็นสภาเดี่ยว</summary>
            LOL
          </details>
          <details>
            <summary>
              &ldquo;ลดอำนาจ ส.ว.&rdquo; สภาคู่ แต่อำนาจของ ส.ว.ต้องสัมพันธ์กับที่มา
            </summary>
            LOL
          </details>
          <details>
            <summary>
              &ldquo;เปลี่ยนที่มา ส.ว.&rdquo; สภาคู่ แต่ที่มา ส.ว. ยึดโยงกับประชาชนมากขึ้น
            </summary>
            LOL
          </details>
          <Ch3FixImg />
          <p class="wv-h4 container mb-20 text-center font-kondolar font-black">
            วิธีการตามกฎหมายต้องเสนออย่างไร
          </p>
          <p class="wv-h5 container mb-20 text-center font-kondolar font-black">
            แนวทางการแก้ไขบทบัญญัติในรัฐธรรมนูญ
          </p>
          <p class="wv-b3 container mb-20 text-center md:mb-60">
            การแก้ไขในเรื่องที่มาและอำนาจของ ส.ว. เป็นการแก้ไขตัวเนื้อหาในรัฐธรรมนูญ 2560
            เนื่องจากรัฐธรรมนูญเป็นกฎหมายสูงสุดและเป็นแม่บทที่กำหนดโครงสร้าง กลไก
            และหลักการพื้นฐานในการปกครองประเทศ
            การแก้ไขเพิ่มเติมรัฐธรรมนูญจึงต้องมีกระบวนการไว้เป็นการเฉพาะและแตกต่างออกไปจากการแก้ไขบทบัญญัติของกฎหมายทั่วไป
            โดยกระบวนการแก้ไขถูกกำหนดไว้ในหมวด 15 การแก้ไขเพิ่มเติมรัฐธรรมนูญ มาตรา 256
          </p>
          <div class="container flex flex-col gap-20 md:flex-row">
            <div class="flex-1">
              <p class="wv-h5 mb-10 text-center font-kondolar font-black">
                เงื่อนไขพื้นฐาน
              </p>
              <p class="wv-b2 mb-10 text-center font-bold">
                ผู้มีสิทธิยื่นแก้ไขเพิ่มเติม
              </p>
              <Ch3BasicCondition />
            </div>
            <div class="flex-1">
              <p class="wv-h5 mb-10 text-center font-kondolar font-black">
                เงื่อนไขการพิจารณาแก้ไขเพิ่มเติม
              </p>
              <p class="wv-b2 mb-10 text-center font-bold">ขั้นตอนการแก้ไข</p>
              <Ch3ExtendCondition />
            </div>
          </div>
          <p class="wv-h4 container mb-80 mt-60 text-center font-kondolar font-black">
            ช่องทางการเสนอแก้ไขรัฐธรรมนูญเกี่ยวกับที่มา และอำนาจของ ส.ว.
          </p>
          <div class="container flex flex-col gap-40 pb-120 md:flex-row">
            <div class="flex-1">
              <div class="wv-b6 mx-auto mb-20 h-20 w-20 rounded-full bg-black text-center font-bold leading-[20px] text-white">
                1
              </div>
              <img
                class="mx-auto mb-20 h-[112px] w-auto"
                src="./imgs/constitution.svg"
                alt=""
                width={112}
                height={112}
                loading="lazy"
                decoding="async"
              />
              <p class="wv-h6 mb-40 text-center font-kondolar font-black">
                กรณีแก้ไขบทบัญญัติ เรื่องที่มา และอำนาจ ส.ว. ในรัฐธรรมนูญ 2560 บทเฉพาะกาล
              </p>
              <p class="wv-h7 mb-10 text-center font-kondolar font-black">
                สำรวจตามผู้เสนอ
              </p>
              <p class="mb-10 flex items-center gap-10">
                <span class="wv-h7 inline-block font-kondolar font-black">
                  ภาคประชาชน
                </span>
                <small class="wv-b4 inline-block font-ibmplex font-normal">3 ร่าง</small>
              </p>
              <Ch3Constitution side="ภาคประชาชน" />
              <p class="mb-10 flex items-center gap-10">
                <span class="wv-h7 inline-block font-kondolar font-black">
                  ฝ่ายรัฐบาล
                </span>
                <small class="wv-b4 inline-block font-ibmplex font-normal">1 ร่าง</small>
              </p>
              <Ch3Constitution side="ฝ่ายรัฐบาล" />
              <p class="mb-10 flex items-center gap-10">
                <span class="wv-h7 inline-block font-kondolar font-black">ฝ่ายค้าน</span>
                <small class="wv-b4 inline-block font-ibmplex font-normal">2 ร่าง</small>
              </p>
              <Ch3Constitution side="ฝ่ายค้าน" />
              <p class="mb-10 flex items-center gap-10">
                <span class="wv-h7 inline-block font-kondolar font-black">
                  เสนอร่วมฝ่าย
                </span>
                <small class="wv-b4 inline-block font-ibmplex font-normal">2 ร่าง</small>
              </p>
              <Ch3Constitution side="เสนอร่วมฝ่าย" />
            </div>
            <div class="flex-1">
              <div class="wv-b6 mx-auto mb-20 h-20 w-20 rounded-full bg-black text-center font-bold leading-[20px] text-white">
                2
              </div>
              <img
                class="mx-auto mb-20 h-[112px] w-auto"
                src="./imgs/constitution.svg"
                alt=""
                width={112}
                height={112}
                loading="lazy"
                decoding="async"
              />
              <p class="wv-h6 mb-40 text-center font-kondolar font-black">
                กรณีแก้ไขบทบัญญัติ เรื่องที่มา และอำนาจ ส.ว. ในรัฐธรรมนูญ 2560 บททั่วไป
              </p>
              <div class="rounded-10 bg-black p-20 text-white">
                <p class="wv-h7 mb-10 flex items-center justify-center gap-10 font-kondolar font-black">
                  <svg
                    fill="none"
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    xmlns="http://www.w3.org/2000/svg"
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
                  เพราะปัญหาเรื่องที่มาและอำนาจของ ส.ว. ที่ต้องถูกแก้ไข
                  ถูกระบุไว้ในบทเฉพาะกาล
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="bg-black py-120 text-white">
        <Lottie
          src="./imgs/lotties/summary.json"
          width="333px"
          height="333px"
          clazz="mx-auto mb-50 h-auto !w-[80%] max-w-[333px]"
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
