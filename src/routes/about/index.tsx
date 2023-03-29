/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import type { DocumentHead } from "@builder.io/qwik-city";
import { qwikify$ } from "@builder.io/qwik-react";

import WvButton from "@wevisdemo/ui/react/button";
import WvButtonGroup from "@wevisdemo/ui/react/button-group";
import WvContainer from "@wevisdemo/ui/react/container";
import WvParagraphGroup from "@wevisdemo/ui/react/paragraph-group";
import WvSharer from "@wevisdemo/ui/react/sharer";

export default qwikify$(
  () => (
    <WvContainer heading="เกี่ยวกับโครงการ">
      <WvParagraphGroup heading="เป้าหมาย">
        <p>
          สมาชิกวุฒิสภา (ส.ว.) ชุดแรกของรัฐธรรมนูญ 2560 หรือ &ldquo;ส.ว.ชุดพิเศษ&rdquo;
          ถูกพูดถึงในสังคมมาโดยตลอดว่าเป็นเครื่องมือสืบทอดอำนาจของคณะรักษาความสงบแห่งชาติ
          (คสช.) และเป็นกลไกที่มีปัญหาในรัฐสภา ซึ่งส่งผลกระทบต่อประชาธิปไตยไทยเป็นอย่างมาก
          และหลังการเลือกตั้งทั่วไปในปี 2566 ส.ว.
          ชุดนี้จะยังคงมีอำนาจในการเลือกนายกรัฐมนตรีคนใหม่ได้ เพราะมีวาระ 5 ปี อีกทั้ง
          การคัดเลือก ส.ว. ชุดใหม่ในอนาคตตามกระบวนการในบททั่วไปของรัฐธรรมนูญ 2560
          นั้นก็มาจากการคัดเลือกกันเอง ที่มาของ ส.ว. ชุดใหม่จึงมีโอกาสที่จะเอื้อให้เกิดการ
          &ldquo;จัดฮั้ว&rdquo; ส่งผลให้ ส.ว. ชุดดังกล่าวจะสนับสนุนรัฐบาล คสช.
          สืบทอดอำนาจต่อไป
        </p>
        <p>
          WeVis เชิญชวนทุกคนอ่านและค้นหาเรื่องราวของ ส.ว. ชุดพิเศษ
          ที่ใช้อำนาจกำหนดทิศทางการเมืองไทย ว่าเป็นใคร มาจากไหน
          ใช้อำนาจตัดสินใจอะไรแทนประชาชนไปแล้วบ้าง
          รวมไปถึงข้อเสนอแนะและแนวทางแก้ไขที่มีต่อปัญหาของ ส.ว เพื่อตอบประเด็นสำคัญที่ว่า
          &ldquo;ส.ว. ตามรัฐธรรมนูญ 2560 เป็นเครื่องมือสืบทอดอำนาจของ คสช. หรือไม่
          และเป็นปัญหาหลักของประชาธิปไตยไทยในปัจจุบันอย่างไร&rdquo;
        </p>
      </WvParagraphGroup>
      <WvParagraphGroup heading="ที่มาของข้อมูล">
        <ol className="list-decimal">
          <li className="ml-[1rem]">
            ข้อมูลที่มาและอำนาจหน้าที่ของ ส.ว. รวมถึงแนวทางการแก้ไขบทบัญญัติในรัฐธรรมนูญ
            มาจากตัวบทเนื้อหาใน{" "}
            <a
              href="https://cdc.parliament.go.th/draftconstitution2/ewt_dl_link.php?nid=1038&filename=index"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560
            </a>
          </li>
          <li className="ml-[1rem]">
            ข้อมูลประวัติส่วนตัว และการลงมติของ ส.ว.
            ต่อร่างกฎหมายที่ถูกเสนอและพิจารณาในสภาสมัยรัฐบาลประยุทธ์ จันทร์โอชา 2
            มาจากการใช้ข้อมูลของโปรเจกต์ WeVis ที่ชื่อว่า{" "}
            <a
              href="https://theyworkforus.wevis.info/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              &ldquo;They work for us - ใครคือผู้แทนของเรา ค้นหา ตรวจสอบ โปร่งใส&rdquo;
            </a>
          </li>
          <li className="ml-[1rem]">
            ข้อมูลอื่น ๆ เช่น แนวทางการแก้ไขปัญหาเรื่องที่มาและอำนาจของ ส.ว.
            มาจากการใช้ข้อมูลของโปรเจกต์{" "}
            <a
              href="https://conlab.conlabth.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Constitution lab ห้องออกแบบรัฐธรรมนูญ
            </a>{" "}
            ของกลุ่ม CONLAB - รัฐธรรมนูญก้าวหน้า
          </li>
        </ol>
      </WvParagraphGroup>
      <WvParagraphGroup heading="นโยบายการนำข้อมูลไปใช้ต่อ">
        <p>
          WeVis มีความตั้งใจที่พัฒนาทุกโปรเจกต์ให้เป็น Open Source และเปิดข้อมูลเป็น Open
          Data ภายใต้เงื่อนไข Creative Commons Attribution-NonCommercial License
          (CC-BY-NC) คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา
          แต่ห้ามนำไปใช้เพื่อการค้า
        </p>
        <p>
          หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
          ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง หรือมีข้อเสนอแนะใด ๆ
          สามารถติดต่อได้ที่ team@punchup.world
        </p>
      </WvParagraphGroup>
      <WvParagraphGroup heading="อาสาสมัครร่วมพัฒนา">
        <WvParagraphGroup small heading="เขียนโปรแกรม">
          <p>
            <a
              href="https://rootenginear.github.io/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              สุเทพ จันทร์ชูผล
            </a>
          </p>
        </WvParagraphGroup>
        <WvParagraphGroup small heading="ออกแบบ">
          <p>พิชญา โชนะโต</p>
        </WvParagraphGroup>
        <WvParagraphGroup small heading="สืบค้นและรวบรวมข้อมูล">
          <p>สิทธิกานต์ ธีระวัฒนชัย, อาลาวีย์ วาแม</p>
        </WvParagraphGroup>
        <WvParagraphGroup small heading="บรรณาธิการ">
          <p>ธนิสรา เรืองเดช</p>
        </WvParagraphGroup>
        <WvParagraphGroup small heading="ประสานงานและจัดการอื่นๆ">
          <p>
            <a
              href="https://punchup.world/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Punch Up
            </a>
          </p>
        </WvParagraphGroup>
        <p>
          โปรเจกต์ &ldquo;แลหลัง เหลียวหน้า ส.ว.&rdquo;
          ได้รับการสนับสนุนทุนในการดำเนินงานจาก National Endowment for Democracy (NED)
          ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน
          บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
        </p>
      </WvParagraphGroup>
      <WvButtonGroup center>
        <WvButton>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_314_173)">
              <path
                d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <line
                x1="10.667"
                y1="0.5"
                x2="10.667"
                y2="13"
                stroke="currentColor"
                strokeWidth="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_314_173">
                <rect
                  width="20.8333"
                  height="20"
                  fill="white"
                  transform="translate(0.0834961 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div>ดาวน์โหลดข้อมูล</div>
        </WvButton>
        <WvButton>
          <img
            width="30"
            src="data:image/png;base64,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"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span>Feedback</span>
        </WvButton>
      </WvButtonGroup>
      <WvSharer center />
    </WvContainer>
  ),
  { eagerness: "idle" }
);

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
