import { component$ } from "@builder.io/qwik";

import PEOPLE from "~/data/people";
import VOTELOG from "~/data/votelog";

import ChapterBreak from "~/components/ChapterBreak";
import JumpToContent from "~/components/JumpToContent";
import Lottie from "~/components/Lottie";
import TitleBlock from "~/components/TitleBlock";
import QWvSharer from "~/components/react/QWvSharer";

import Ch1Chart from "~/components/chapter1/Ch1Chart";
import Ch1Divider from "~/components/chapter1/Ch1Divider";
import Ch1Infinity from "~/components/chapter1/Ch1Infinity";
import Ch1Video from "~/components/chapter1/Ch1Video";

import Ch2Compare from "~/components/chapter2/Ch2Compare";
import Ch2Explore from "~/components/chapter2/Ch2Explore";

import Ch3BasicCondition from "~/components/chapter3/Ch3BasicCondition";
import Ch3Constitution from "~/components/chapter3/Ch3Constitution";
import Ch3ExtendCondition from "~/components/chapter3/Ch3ExtendCondition";
import Ch3FixImg from "~/components/chapter3/Ch3FixImg";
import Ch3GeneralConstitution from "~/components/chapter3/Ch3GeneralConstitution";
import Ch3Letter from "~/components/chapter3/Ch3Letter";

export default component$(() => {
  return (
    <>
      {Header}
      {/* <svg class="absolute h-0 w-0">
        <clipPath id="starClip" clipPathUnits="objectBoundingBox">
          <path d="m0.521,0.023 l-0.021,-0.022 l-0.021,0.022 l-0.123,0.131 l-0.179,-0.006 l-0.031,-0.001 l0.001,0.031 l0.006,0.179 l-0.131,0.123 l-0.022,0.021 l0.022,0.021 l0.131,0.123 l-0.006,0.179 l-0.001,0.031 l0.031,-0.001 l0.179,-0.006 l0.123,0.131 l0.021,0.022 l0.021,-0.022 l0.123,-0.131 l0.179,0.006 l0.031,0.001 l-0.001,-0.031 l-0.006,-0.179 l0.131,-0.123 l0.022,-0.021 l-0.022,-0.021 l-0.131,-0.123 l0.006,-0.179 l0.001,-0.031 l-0.031,0.001 l-0.179,0.006 l-0.123,-0.131"></path>
        </clipPath>
      </svg> */}
      <main class="min-h-[50vh] bg-bg">
        {Chapter1}
        {Chapter2}
        {Chapter3}
      </main>
      {Footer}
      <div class="relative h-0 w-0">
        <div class="fixed h-screen" id="100vh"></div>
      </div>
    </>
  );
});

// ██╗  ██╗███████╗ █████╗ ██████╗ ███████╗██████╗
// ██║  ██║██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗
// ███████║█████╗  ███████║██║  ██║█████╗  ██████╔╝
// ██╔══██║██╔══╝  ██╔══██║██║  ██║██╔══╝  ██╔══██╗
// ██║  ██║███████╗██║  ██║██████╔╝███████╗██║  ██║
// ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝

const Header = (
  <header class="bg-black pb-30 text-white md:pt-100 md:pb-60">
    <h1 class="wv-h2 container py-20 text-center font-kondolar font-black md:hidden">
      <span class="nobr">แลหลัง</span>
      <br />
      <span class="nobr">เหลียวหน้า</span> <span class="nobr">ส.ว.</span>
    </h1>
    <div class="container mx-auto mb-20 flex flex-col gap-20 md:mb-[48px] md:flex-row">
      <div class="flex-1 overflow-hidden">
        <Lottie
          class="mx-auto max-h-[778px] max-w-[311px]"
          src="./imgs/lotties/intro.json"
          width="311px"
          height="778px"
          threshold={0.1}
          hasFallback
        >
          <img
            class="mx-auto h-full max-h-[778px] w-full max-w-[311px] object-contain object-top"
            src="./imgs/header.webp"
            alt=""
            width="311"
            height="778"
            loading="eager"
            decoding="async"
          />
        </Lottie>
      </div>
      <div class="flex-1 text-center md:text-left">
        <h1 class="wv-h2 mb-20 hidden font-kondolar font-black md:block">
          <span class="nobr">แลหลัง</span>
          <br />
          <span class="nobr">เหลียวหน้า</span> <span class="nobr">ส.ว.</span>
        </h1>
        <p class="wv-h6 mb-20 font-kondolar">
          ต่อให้เลือกตั้งอีกกี่ครั้ง ปัญหาประชาธิปไตยไทยก็จะยังคงอยู่ ถ้าที่มาและอำนาจของ
          ส.ว. ยังไม่ถูกแก้ไข
        </p>
        <p class="wv-b3 mb-20">
          หลังการเลือกตั้งทั่วไป 2566 สมาชิกวุฒิสภา (ส.ว.) ชุดแรกของรัฐธรรมนูญ 2560 หรือ{" "}
          <strong>&ldquo;ส.ว. ชุดพิเศษ&rdquo;</strong>{" "}
          ที่แต่งตั้งโดยคณะรักษาความสงบแห่งชาติ (คสช.)
          จะยังคงมีอำนาจในการเลือกนายกรัฐมนตรีคนใหม่ได้ เพราะมีวาระ 5 ปี และเดิมที ส.ว.{" "}
          ชุดนี้ก็ถูกพูดถึงในสังคมมาตลอดว่าเป็นปัญหาต่อประชาธิปไตยไทย
          <br />
          <br />
          <strong>
            ชวนอ่านและค้นหาเรื่องราวการสืบทอดอำนาจของ คสช. ผ่านกลไกที่ให้อำนาจ ส.ว.
            กำหนดทิศทางการเมืองไทย เมื่อผลเลือกตั้งของประชาชนถูกทำให้ไร้ความหมาย
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
);

//  ██████╗██╗  ██╗     ██╗
// ██╔════╝██║  ██║    ███║
// ██║     ███████║    ╚██║
// ██║     ██╔══██║     ██║
// ╚██████╗██║  ██║     ██║
//  ╚═════╝╚═╝  ╚═╝     ╚═╝

const Chapter1 = (
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
      <Lottie src="./imgs/lotties/chapter/01.json" width="320px" height="320px" />
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
    <p class="wv-h6 container mb-50 text-center font-kondolar font-bold">
      ส.ว. ทั้งหมด 250 ที่นั่ง ประกอบไปด้วย 3 ประเภท
    </p>
    <Ch1Divider text="คัดเลือกโดยตรง" />
    <div class="ch1-senate-path-scrollbar scroll-green mt-20 mb-10 overflow-x-auto px-20 md:px-100">
      <img
        class="mx-auto h-[147px] w-[1048px] max-w-none object-contain"
        src="./imgs/senate-path/01.webp"
        alt=""
        width={1048}
        height={147}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="ch1-senate-path-scrollbar scroll-blue mt-10 mb-20 overflow-x-auto px-20 md:px-100">
      <img
        class="mx-auto h-[211px] w-[1048px] max-w-none object-contain"
        src="./imgs/senate-path/02.webp"
        alt=""
        width={1048}
        height={211}
        loading="lazy"
        decoding="async"
      />
    </div>
    <Ch1Divider text="คัดเลือกโดยอ้อม" />
    <div class="ch1-senate-path-scrollbar scroll-pink mt-20 mb-[130px] overflow-x-auto px-20 md:px-100">
      <img
        class="mx-auto h-[248px] w-[1048px] max-w-none object-contain"
        src="./imgs/senate-path/03.webp"
        alt=""
        width={1048}
        height={248}
        loading="lazy"
        decoding="async"
      />
    </div>
    <TitleBlock class="!mb-30">อาชีพและความเกี่ยวข้องกับ คสช.</TitleBlock>
    <p class="wv-b2 container mb-30 text-center">
      ซึ่ง ส.ว. เหล่านี้ มาจากหลากหลายสาขาอาชีพและหลายคนเกี่ยวข้องกับ คสช. ก่อนจะมาเป็น
      ส.ว.
    </p>
    <Lottie src="./imgs/lotties/googly-eye.json" width="242px" height="104px" />
    <p class="wv-h4 container mt-30 mb-40 text-center font-kondolar font-black">
      สำรวจ ส.ว. ตามประเภทอาชีพ และความเกี่ยวข้องกับ คสช.
    </p>
    <TitleBlock class="!mb-20">ความเกี่ยวพันระหว่าง ส.ว. และ คสช.</TitleBlock>
    <div class="container mb-30 flex flex-col gap-20 md:mt-[130px] md:flex-row">
      <div class="flex flex-1 items-center justify-center">
        <img
          src="./imgs/nepo.webp"
          alt=""
          width={304}
          height={150}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="flex flex-1 items-center justify-center">
        <Ch1Video />
      </div>
    </div>
    <div class="container mb-30 flex flex-col items-center justify-center gap-20 md:flex-row">
      <div class="flex-1 p-20">
        <p class="flex flex-col gap-10 text-center font-kondolar md:text-left">
          <span class="wv-h4 block font-black">ตามรัฐธรรมนูญ &apos;60</span>
          <span class="wv-h2 block font-black">80% ของ ส.ว.</span>
          <span class="wv-h8 block">
            หรือ <span class="font-bold">200</span>/250 คน
          </span>
          <span class="wv-h7 block">
            ถูกคัดเลือกโดย ค.ส.ช. โดยตรง และอีก 20% ถูกคัดเลือกโดยอ้อม แต่ในทางปฏิบัติแล้ว{" "}
            <span class="font-bold">ส.ว. ทุกตำแหน่งผ่านการคัดเลือกโดย คสช.</span>
          </span>
        </p>
      </div>
      <div class="flex flex-1 items-center justify-center overflow-x-hidden">
        <Lottie src="./imgs/lotties/bubblechart.json" width="350px" height="344px" />
      </div>
    </div>
    <div class="container mb-30 flex flex-col items-center justify-center gap-20 md:flex-row">
      <div class="flex-1 p-20">
        <Lottie
          src="./imgs/lotties/senate.json"
          width="200px"
          height="200px"
          class="mb-10"
          loop
        />
        <p class="flex flex-col gap-10 text-center font-kondolar md:text-left">
          <span class="wv-h2 block font-black">
            {Math.round((PEOPLE.withNcpo / PEOPLE.total) * 1e4) / 1e2}%
          </span>
          <span class="wv-h8 block">
            หรือ <span class="font-bold">{PEOPLE.withNcpo}</span>/{PEOPLE.total} คน
          </span>
          <span class="wv-h7 block">
            ของ ส.ว. ทั้งหมดเคยเป็นผู้มีส่วนเกี่ยวข้องกับ คสช. มาก่อน
          </span>
        </p>
      </div>
      <div class="flex-1">
        <div class="wv-h5 mb-20 w-full bg-white px-40 py-20 text-center font-kondolar font-black">
          ผู้มีส่วนเกี่ยวข้องกับ คสช. ประกอบไปด้วย
        </div>
        <div class="mb-20 md:px-40">
          <Ch1Chart
            who="สายนิติบัญญัติ"
            desc="สนช., สปช., สปท., กรธ."
            data={PEOPLE.ncpoType.สายนิติบัญญัติ}
          />
          <Ch1Chart
            who="สายบริหาร"
            desc="ครม. ยุคประยุทธ์ 1"
            data={PEOPLE.ncpoType.สายบริหาร}
          />
          <Ch1Chart who="สมาชิก คสช." data={PEOPLE.ncpoType["สมาชิก คสช."]} />
          <Ch1Chart
            who="สายนิติบัญญัติ, สมาชิก คสช."
            data={PEOPLE.ncpoType["สมาชิก คสช.,สายนิติบัญญัติ"]}
          />
          <Ch1Chart
            who="สายนิติบัญญัติ, สายนิติบริหาร"
            data={PEOPLE.ncpoType["สายบริหาร,สายนิติบัญญัติ"]}
          />
          <Ch1Chart
            who="สายบริหาร, สมาชิก คสช."
            data={PEOPLE.ncpoType["สมาชิก คสช.,สายบริหาร"]}
          />
        </div>
        <ul class="flex flex-wrap justify-center gap-x-20 gap-y-10">
          <li class="flex items-center gap-10">
            <span class="h-20 w-20 rounded-full border bg-senate-green" />
            <span class="wv-b4 font-bold">ส.ว. โดยตำแหน่ง</span>
          </li>
          <li class="flex items-center gap-10">
            <span class="h-20 w-20 rounded-full border bg-senate-blue" />
            <span class="wv-b4 font-bold">ส.ว. เลือกโดยคสช.</span>
          </li>
          <li class="flex items-center gap-10">
            <span class="h-20 w-20 rounded-full border bg-senate-pink" />
            <span class="wv-b4 font-bold">ส.ว. เลือกกันเอง</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mb-100 flex flex-col items-center justify-center gap-20 md:mb-[260px] md:flex-row">
      <div class="flex flex-1 items-center justify-center">
        <img
          src="./imgs/popular-job.webp"
          alt=""
          width={295}
          height={322}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="flex flex-1 items-center justify-center">
        <p class="flex flex-col gap-10 rounded-10 bg-senate-pink p-30 text-center font-kondolar md:text-left">
          <span class="wv-h2 font-black">
            {Math.round((PEOPLE.jobs.ทหาร / PEOPLE.total) * 1e4) / 1e2}%
          </span>
          <span class="wv-h8">
            หรือ <span class="font-bold">{PEOPLE.jobs.ทหาร}</span>/{PEOPLE.total} คน
          </span>
          <span class="wv-h6">ของ ส.ว. อยู่ในกลุ่มอาชีพทหาร</span>
        </p>
      </div>
    </div>
  </section>
);

//  ██████╗██╗  ██╗    ██████╗
// ██╔════╝██║  ██║    ╚════██╗
// ██║     ███████║     █████╔╝
// ██║     ██╔══██║    ██╔═══╝
// ╚██████╗██║  ██║    ███████╗
//  ╚═════╝╚═╝  ╚═╝    ╚══════╝

const Chapter2 = (
  <section class="pb-100">
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
      <Lottie src="./imgs/lotties/chapter/02.json" width="320px" height="320px" />
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
      class="mx-auto mb-60 h-auto !w-[80%] max-w-[457px]"
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
    <div class="container mb-60 flex flex-col gap-10 text-center md:flex-row">
      <div class="flex-1">
        <p class="wv-h5 mb-[12px] font-kondolar font-black">มติในที่ประชุมวุฒิสภา</p>
        <div class="wv-b2 mb-[12px] flex items-center justify-center gap-20 font-bold">
          <div>
            <img
              class="mx-auto block"
              src="./imgs/senate2.webp"
              alt=""
              width={39}
              height={39}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 block text-center font-kondolar font-bold">ส.ว.</span>
          </div>
          <span>250 เสียง</span>
        </div>
        <p class="wv-b4 mb-30">
          <span class="font-bold">มติที่ประชุมวุฒิสภา:</span> เป็นการพิจารณาลงมติ
          ในเรื่องที่เป็นอำนาจของ ส.ว. มีทั้งกรณีที่พิจารณาต่อจาก ส.ส.
          และที่เริ่มพิจารณาโดย ส.ว. ตั้งแต่ต้นจนจบ
        </p>
        <div class="flex flex-wrap justify-center gap-10">
          <div class="flex-1">
            <img
              class="mx-auto mb-10 block"
              src="./imgs/keep-ncpo.webp"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 mb-10 block text-center font-kondolar font-black">
              ตั้งบุคคลในโครงสร้างค้ำจุน คสช.
            </span>
            <span class="b5">{VOTELOG.senate.keepNcpo} มติ</span>
          </div>
          <div class="flex-1">
            <img
              class="mx-auto mb-10 block"
              src="./imgs/nation-strat.webp"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 mb-10 block text-center font-kondolar font-black">
              ยุทธศาสตร์ชาติ
            </span>
            <span class="b5">{VOTELOG.senate.nationStrat} มติ</span>
          </div>
          <div class="flex-1">
            <img
              class="mx-auto mb-10 block"
              src="./imgs/cons-vote.webp"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 mb-10 block text-center font-kondolar font-black">
              ประชามติแก้รัฐธรรมนูญ
            </span>
            <span class="b5">{VOTELOG.senate.consVote} มติ</span>
          </div>
        </div>
      </div>
      <div class="mb-60 flex-1">
        <p class="wv-h5 mb-[12px] font-kondolar font-black">
          มติในที่ประชุมร่วมของรัฐสภา
        </p>
        <div class="wv-b2 mb-[12px] flex items-center justify-center gap-20 font-bold">
          <span>250 เสียง</span>
          <div>
            <img
              class="mx-auto block"
              src="./imgs/senate2.webp"
              alt=""
              width={39}
              height={39}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 block text-center font-kondolar font-bold">ส.ว.</span>
          </div>
          <svg
            class="-mx-15"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 19"
            width="18"
            height="19"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M12 6.334v-6H6v6H0v6h6v6h6v-6h6v-6h-6z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <img
              class="block"
              src="./imgs/mp2.webp"
              alt=""
              width={39}
              height={39}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 block text-center font-kondolar font-bold">ส.ส.</span>
          </div>
          <span>250 เสียง</span>
        </div>
        <p class="wv-b4 mb-30">
          <span class="font-bold">มติที่ประชุมร่วมของรัฐสภา:</span> เป็นการพิจารณาลงมติ
          ในเรื่องที่เป็นอำนาจของ ส.ส. และ ส.ว.ร่วมกันตั้งแต่ต้นจนจบ
        </p>
        <div class="flex flex-wrap justify-center gap-10">
          <div class="flex-1">
            <img
              class="mx-auto mb-10 block"
              src="./imgs/select-pm.webp"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 mb-10 block text-center font-kondolar font-black">
              เลือกนายกรัฐมนตรี
            </span>
            <span class="b5">{VOTELOG.parliament.selectPm} มติ</span>
          </div>
          <div class="flex-1">
            <img
              class="mx-auto mb-10 block"
              src="./imgs/cons-draft.webp"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 mb-10 block text-center font-kondolar font-black">
              ร่างแก้รัฐธรรมนูญ
            </span>
            <span class="b5">{VOTELOG.parliament.consDraft} มติ</span>
          </div>
          <div class="flex-1">
            <img
              class="mx-auto mb-10 block"
              src="./imgs/cons-vote.webp"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
            />
            <span class="wv-h9 mb-10 block text-center font-kondolar font-black">
              ประชามติแก้รัฐธรรมนูญ
            </span>
            <span class="b5">{VOTELOG.parliament.consVote} มติ</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-60 flex flex-col items-center justify-center gap-20 md:flex-row md:items-start md:gap-60">
      <span class="wv-h5 font-kondolar font-black">ประเภทการลงคะแนนเสียง</span>
      <img
        class="md:hidden"
        src="./imgs/votetype-mobile.webp"
        alt=""
        width={264}
        height={385}
        loading="lazy"
        decoding="async"
      />
      <img
        class="hidden md:block"
        src="./imgs/votetype-desktop.webp"
        alt=""
        width={395}
        height={284}
        loading="lazy"
        decoding="async"
      />
    </div>
    <TitleBlock class="!mb-30">ผลการลงมติของ ส.ว. ในวุฒิสภาและรัฐสภา</TitleBlock>
    <Ch2Explore />
    <Ch2Compare />
  </section>
);

//  ██████╗██╗  ██╗    ██████╗
// ██╔════╝██║  ██║    ╚════██╗
// ██║     ███████║     █████╔╝
// ██║     ██╔══██║     ╚═══██╗
// ╚██████╗██║  ██║    ██████╔╝
//  ╚═════╝╚═╝  ╚═╝    ╚═════╝

const Chapter3 = (
  <section>
    <ChapterBreak
      part={3}
      title={["ปัญหา", " ", "ส.ว.", "-", "เรา", "ทำ", "อะไร", "ได้", "บ้าง", "?"]}
    >
      <Lottie src="./imgs/lotties/chapter/03.json" width="320px" height="320px" />
    </ChapterBreak>
    <TitleBlock class="mt-100">
      แล้วจะแก้ไขปัญหา ส.ว. ที่ส่งผลกระทบต่อการเมืองประเทศไทยได้อย่างไร?
    </TitleBlock>
    <p class="wv-b2 container mb-60 text-center">
      <strong>&ldquo;การแก้ไขเรื่องที่มาและอำนาจของ ส.ว.&rdquo;</strong>{" "}
      คือสิ่งที่ถูกพูดถึงมาตลอด โดยมีการนำเสนอหลากหลายแนวทาง
    </p>
    <p class="wv-h4 container mb-60 text-center font-kondolar font-black">
      Model เกี่ยวกับการแก้ไขปัญหาเรื่องที่มา และอำนาจของ ส.ว.
    </p>
    <div class="flex flex-col">
      <Ch3Letter title="ยกเลิก ส.ว.เปลี่ยนเป็นสภาเดี่ยว" lottieName="01">
        <div class="border-b border-dashed pt-10 pb-20">
          <p class="wv-h8 mb-10 w-full text-center font-kondolar font-black">สรุป</p>
          <p class="wv-b4">
            <span class="font-bold">ระบบสภาเดี่ยว</span>{" "}
            คือระบบรัฐสภาที่มีเพียงสภาผู้แทนราษฎร (ส.ส.)
            ที่มาจากการเลือกตั้งโดยตรงของประชาชนทำหน้าที่ตรากฎหมายของประเทศและตรวจสอบถ่วงดุลรัฐบาล
            โดยไม่มีสภาบนหรือ สมาชิกวุฒิสภา (ส.ว.) ซึ่งจะแตกต่างจากระบบสภาคู่ ที่ต้องมี
            ส.ว. ร่วมทำหน้าที่ในสภาด้วย
          </p>
        </div>
        <div class="pt-20 pb-20">
          <p class="wv-h8 mb-20 w-full text-center font-kondolar font-black">
            ตัวอย่างประเทศ
          </p>
          <ul>
            <li class="mb-10 flex items-start gap-10">
              <img
                src="./imgs/flags/tw.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <p>
                <strong class="wv-h9 font-kondolar font-bold">ไต้หวัน</strong>
                <br />
                <span class="wv-b4">ใช้ระบบสภาเดี่ยวอย่างเป็นทางการใน ค.ศ. 2005</span>
              </p>
            </li>
            <li class="mb-10 flex items-start gap-10">
              <img
                src="./imgs/flags/nz.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <p>
                <strong class="wv-h9 font-kondolar font-bold">นิวซีแลนด์</strong>
                <br />
                <span class="wv-b4">&apos;1950</span>
              </p>
            </li>
            <li class="mb-10 flex items-start gap-10">
              <img
                src="./imgs/flags/kr.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <p>
                <strong class="wv-h9 font-kondolar font-bold">เกาหลีใต้</strong>
                <br />
                <span class="wv-b4">เคยมี ส.ว. ระหว่าง ค.ศ. 1960-1961</span>
              </p>
            </li>
            <li class="mb-10 flex items-start gap-10">
              <img
                src="./imgs/flags/dk.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <p>
                <strong class="wv-h9 font-kondolar font-bold">เดนมาร์ก</strong>
                <br />
                <span class="wv-b4">ยกเลิก ส.ว. ในปี ค.ศ. 1953</span>
              </p>
            </li>
            <li class="flex items-start gap-10">
              <img
                src="./imgs/flags/se.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <p>
                <strong class="wv-h9 font-kondolar font-bold">สวีเดน</strong>
                <br />
                <span class="wv-b4">
                  ควบรวม ส.ส. และ ส.ว. เป็นสภาเดี่ยวในปี ค.ศ. 1970
                </span>
              </p>
            </li>
          </ul>
        </div>
      </Ch3Letter>
      <Ch3Letter
        title="&ldquo;ลดอำนาจ ส.ว.&rdquo; สภาคู่ แต่อำนาจของ ส.ว.ต้องสัมพันธ์กับที่มา"
        lottieName="02"
      >
        <div class="border-b border-dashed pt-10 pb-20">
          <p class="wv-h8 mb-10 w-full text-center font-kondolar font-black">สรุป</p>
          <ul class="wv-b4 list-disc">
            <li class="ml-[2ch]">
              <span class="font-bold">
                Model ที่มุ่งลดอำนาจของ ส.ว. ให้สัมพันธ์กับที่มา
              </span>{" "}
              หาก ส.ว. มากจากการแต่งตั้ง ส.ว.
              จะมีอำนาจหน้าที่เพียงแค่จัดทำข้อเสนอแนะด้านกฎหมายและนโยบายให้ ส.ส.
              ยับยั้งร่างกฎหมาย ซึ่งถือว่า ส.ว. จะมีอำนาจอย่างจำกัด
              เพราะไม่ได้มาจากการเลือกตั้งโดยประชาชน
            </li>
            <li class="ml-[2ch]">
              ส.ว. จาก model นี้สามารถมีหลายประเภท เช่น ส.ว. ตัวแทนกลุ่มวิชาชีพ และ ส.ว.
              ตัวแทนกลุ่มทางสังคมต่าง ๆ เป็นต้น
            </li>
          </ul>
        </div>
        <div class="pt-20 pb-20">
          <p class="wv-h8 mb-20 w-full text-center font-kondolar font-black">
            ตัวอย่างประเทศ
          </p>
          <ul>
            <li class="mb-10 flex items-start gap-10">
              <img
                src="./imgs/flags/gb.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <div>
                <p>
                  <strong class="wv-h9 font-kondolar font-bold">สหราชอาณาจักร</strong>
                  <br />
                  <span class="font-bold">
                    มี ส.ว. มาจากการแต่งตั้งโดยคำแนะนำของรัฐบาล
                  </span>
                </p>
                <ul class="list-disc">
                  <li class="ml-[2ch]">
                    มีอำนาจในการตรวจสอบและเสนอกฎหมายของรัฐบาลและสภาล่าง
                  </li>
                  <li class="ml-[2ch]">มีอำนาจในการพิจารณาร่างกฎหมาย</li>
                  <li class="ml-[2ch]">
                    ไม่มีอำนาจยับยั้งกฎหมายได้เพียงแต่ชะลอออกไปได้มากถึง 2 ปี
                  </li>
                  <li class="ml-[2ch]">
                    ไม่มีอำนาจแก้ไขร่างกฎหมายที่เกี่ยวข้องกับการเงิน
                    ทำได้แค่ให้ความเห็นชอบยืนตาม ส.ส. เท่านั้น
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-10 flex items-start gap-10">
              <img
                src="./imgs/flags/de.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <div>
                <p>
                  <strong class="wv-h9 font-kondolar font-bold">เยอรมนี</strong>
                  <br />
                  <span class="font-bold">มี ส.ว. มาจากการแต่งตั้งโดยรัฐบาลของมลรัฐ</span>
                </p>
                <ul class="list-disc">
                  <li class="ml-[2ch]">
                    มีอำนาจในการปกปองผลประโยชนของมลรัฐต่าง ๆ ใหพ้นจากรัฐบาลสหพันธ์และส.ส.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Ch3Letter>
      <Ch3Letter
        title="&ldquo;เปลี่ยนที่มา ส.ว.&rdquo; สภาคู่ แต่ที่มา ส.ว. ยึดโยงกับประชาชนมากขึ้น"
        lottieName="03"
      >
        <div class="border-b border-dashed pt-10 pb-20">
          <p class="wv-h8 mb-10 w-full text-center font-kondolar font-black">สรุป</p>
          <p class="wv-b4">
            <strong>
              Model ที่คำนึงถึงความสมดุลของที่มาของ ส.ว. ว่าต้องมีความยึดโยงกับประชาชน
            </strong>{" "}
            คือ ส.ว. ต้อง มาจากการเลือกตั้งโดยประชาชน
            และไม่จำเป็นต้องคำนึงถึงอำนาจหน้าที่ของ ส.ว. ว่ามีมากหรือน้อย
            เพราะมีความชอบธรรมในการใช้อำนาจหน้าที่ดังกล่าวแทนประชาชนจากการเลือกตั้งแล้ว
          </p>
        </div>
        <div class="pt-20 pb-20">
          <p class="wv-h8 mb-20 w-full text-center font-kondolar font-black">
            ตัวอย่างประเทศ
          </p>
          <ul>
            <li class="mb-10 flex items-start gap-10">
              <img
                src="./imgs/flags/us.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <div>
                <p>
                  <strong class="wv-h9 font-kondolar font-bold">สหรัฐอเมริกา</strong>
                  <br />
                  <span class="font-bold">
                    มี ส.ว. มาจากการเลือกตั้งเป็นตัวแทนมลรัฐ
                    (ส.ว.มีอำนาจมากในระดับเดียวกับ ส.ส.)
                  </span>
                </p>
                <ul class="list-disc">
                  <li class="ml-[2ch]">
                    มีอำนาจในการตรวจสอบและออกกฎหมายได้เช่นเดียวกับ ส.ส.
                  </li>
                  <li class="ml-[2ch]">
                    มีอำนาจในการให้สัตยาบันในสนธิสัญญาที่ลงนามโดยประธานาธิบดี
                  </li>
                  <li class="ml-[2ch]">
                    มีอำนาจที่จะพิจารณาและดำเนินการตามกฎหมายในการรับรองหรือแต่งตั้งเจ้าหน้าที่รัฐ
                    รวมถึงการควบคุมหน่วยงานต่าง ๆ ของรัฐ
                  </li>
                  <li class="ml-[2ch]">
                    มีอำนาจรับรองสมาชิกคณะรัฐมนตรีในรัฐบาลกลางของกระทรวงต่าง ๆ
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-10 flex items-start gap-10">
              <img
                src="./imgs/flags/jp.svg"
                alt=""
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
              <div>
                <p>
                  <strong class="wv-h9 font-kondolar font-bold">ญี่ปุ่น</strong>
                  <br />
                  <span class="font-bold">
                    มี ส.ว. จากการเลือกตั้งเป็นตัวแทนของจังหวัด (ส.ว. มีอำนาจมาก แต่ ส.ส.
                    มีอำนาจเหนือกว่าหากความเห็นไม่ตรงกัน)
                  </span>
                </p>
                <ul class="list-disc">
                  <li class="ml-[2ch]">
                    มีอำนาจทักท้วงหน่วงเหนี่ยวฝ่ายบริหารและสภาผู้แทนราษฎร
                    พิจารณากลั่นกรองกฎหมายและตรวจสอบถ่วงดุลฝ่ายบริหารให้เป็นไปอย่างมีประสิทธิภาพ
                  </li>
                  <li class="ml-[2ch]">
                    มีสิทธิในการร่วมพิจารณาร่างกฏหมาย แต่ไม่มีสิทธิอนุมัติออกกฏหมาย
                  </li>
                  <li class="ml-[2ch]">
                    มีสิทธิในการแก้ไขร่างกฏหมายที่ผ่านความเห็นชอบของ ส.ส.
                    แล้วส่งกลับคืนเพื่อพิจารณาใหม่ หากได้รับความเห็นชอบจากเสียง 2 ใน 3 ของ
                    ส.ส. ร่างกฏหมายนั้นจะถูกตราเป็นกฏหมาย
                  </li>
                  <li class="ml-[2ch]">
                    มีสิทธิในการร่วมพิจารณางบประมาณ แต่ไม่มีสิทธิในการอนุมัติงบประมาณ
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Ch3Letter>
    </div>
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
        <p class="wv-h5 mb-10 text-center font-kondolar font-black">เงื่อนไขพื้นฐาน</p>
        <p class="wv-b2 mb-10 text-center font-bold">ผู้มีสิทธิยื่นแก้ไขเพิ่มเติม</p>
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
        <p class="wv-h7 mb-10 text-center font-kondolar font-black">สำรวจตามผู้เสนอ</p>
        <p class="mb-10 flex items-center gap-10">
          <span class="wv-h7 inline-block font-kondolar font-black">ภาคประชาชน</span>
          <small class="wv-b4 inline-block font-ibmplex font-normal">3 ร่าง</small>
        </p>
        <Ch3Constitution side="ภาคประชาชน" />
        <p class="mb-10 flex items-center gap-10">
          <span class="wv-h7 inline-block font-kondolar font-black">ฝ่ายรัฐบาล</span>
          <small class="wv-b4 inline-block font-ibmplex font-normal">1 ร่าง</small>
        </p>
        <Ch3Constitution side="ฝ่ายรัฐบาล" />
        <p class="mb-10 flex items-center gap-10">
          <span class="wv-h7 inline-block font-kondolar font-black">ฝ่ายค้าน</span>
          <small class="wv-b4 inline-block font-ibmplex font-normal">2 ร่าง</small>
        </p>
        <Ch3Constitution side="ฝ่ายค้าน" />
        <p class="mb-10 flex items-center gap-10">
          <span class="wv-h7 inline-block font-kondolar font-black">เสนอร่วมฝ่าย</span>
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
        <Ch3GeneralConstitution />
      </div>
    </div>
  </section>
);

// ███████╗ ██████╗  ██████╗ ████████╗███████╗██████╗
// ██╔════╝██╔═══██╗██╔═══██╗╚══██╔══╝██╔════╝██╔══██╗
// █████╗  ██║   ██║██║   ██║   ██║   █████╗  ██████╔╝
// ██╔══╝  ██║   ██║██║   ██║   ██║   ██╔══╝  ██╔══██╗
// ██║     ╚██████╔╝╚██████╔╝   ██║   ███████╗██║  ██║
// ╚═╝      ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝

const Footer = (
  <footer class="bg-black py-120 text-white">
    <Lottie
      src="./imgs/lotties/summary.json"
      width="333px"
      height="333px"
      class="mx-auto mb-50 h-auto !w-[80%] max-w-[333px]"
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
      ในระบบรัฐสภา เสียงของประชาชนเท่านั้นที่ &ldquo;ตัดสิน&rdquo; การแก้ไขปัญหาในเรื่อง
      ส.ว. จึงเป็นเรื่องสำคัญ เพื่อให้ได้มาซึ่ง
      กลไกทางรัฐสภาที่ยึดโยงกับเจตนารมณ์ของประชาชนมากที่สุด
    </p>
    <QWvSharer />
  </footer>
);
