/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import WvContainer from "@wevisdemo/ui/react/container";
import WvParagraphGroup from "@wevisdemo/ui/react/paragraph-group";

import { THEYWORK_LINK } from "~/data/const";

interface QAboutTextProps {
  children?: any;
}

export const QAboutText = qwikify$<QAboutTextProps>(({ children }) => (
  <WvContainer heading="เกี่ยวกับโครงการ">
    <WvParagraphGroup heading="เป้าหมาย">
      <p>
        สมาชิกวุฒิสภา (ส.ว.) ชุดแรกของรัฐธรรมนูญ 2560 หรือ &ldquo;ส.ว. ชุดพิเศษ&rdquo;
        ถูกพูดถึงในสังคมมาโดยตลอดว่าเป็นเครื่องมือสืบทอดอำนาจของคณะรักษาความสงบแห่งชาติ
        (คสช.) และเป็นกลไกที่มีปัญหาในรัฐสภา ซึ่งส่งผลกระทบต่อประชาธิปไตยไทยเป็นอย่างมาก
        และหลังการเลือกตั้งทั่วไปในปี 2566 ส.ว.
        ชุดนี้จะยังคงมีอำนาจในการเลือกนายกรัฐมนตรีคนใหม่ได้ เพราะมีวาระ 5 ปี
        อีกทั้งการคัดเลือก ส.ว. ชุดใหม่ในอนาคตตามกระบวนการในบททั่วไปของรัฐธรรมนูญ 2560
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
            href={`https://${THEYWORK_LINK}/`}
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
        Data ภายใต้เงื่อนไข Creative Commons Attribution-NonCommercial License (CC-BY-NC)
        คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
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
      <WvParagraphGroup small heading="ประสานงานและจัดการอื่น ๆ">
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
        ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน บริหารจัดการ
        ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
      </p>
    </WvParagraphGroup>
    <div>{children}</div>
  </WvContainer>
));
