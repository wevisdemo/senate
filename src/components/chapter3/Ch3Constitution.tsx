import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, inView, stagger } from "motion";
import { QPopover } from "../react/popovers/QConstitutionPopover";

const DATA = {
  ภาคประชาชน: [
    {
      title: "ร่างแก้ไขรัฐธรรมนูญของภาคประชาชน แก้ไขในเรื่องที่มาของ ส.ว.",
      content: (
        <ul class="ml-[2rem] list-disc">
          <li class="font-bold">เสนอแก้ไขเพิ่มเติมมาตรา 269 ในบทเฉพาะกาล</li>
          <li>
            <span class="font-bold">ชื่อผู้เสนอ:</span> นายจอน อึ๊งภากรณ์
            กับประชาชนผู้มีสิทธิเลือกตั้ง
          </li>
          <li>
            <span class="font-bold">ประเภทผู้เสนอ:</span> ประชาชน
          </li>
          <li>
            <span class="font-bold">วันที่เสนอ:</span> 22 ก.ย. 2563
          </li>
          <li>
            <span class="font-bold">วันที่สิ้นสุด:</span> 18 พ.ย. 2563
          </li>
          <li>
            <span class="font-bold">รวมระยะเวลา:</span> 58 วัน
          </li>
          <li>
            <span class="font-bold">สถานะ:</span> ตกไปในการพิจารณาของรัฐสภา (วาระที่ 1)
            เนื่องจาก ส.ว. เห็นด้วยไม่ถึง 1/3 ของจำนวน ส.ว. ที่มีอยู่
          </li>
        </ul>
      ),
    },
    {
      title: "ร่างแก้ไขรัฐธรรมนูญของภาคประชาชน แก้ไขเรื่องที่มา และลดอำนาจ ส.ว.",
      content: (
        <ul class="ml-[2rem] list-disc">
          <li>
            <span class="font-bold">ชื่อผู้เสนอ:</span> นายพริษฐ์ วัชรสินธุ
            กับประชาชนผู้มีสิทธิเลือกตั้ง
          </li>
          <li>
            <span class="font-bold">ประเภทผู้เสนอ:</span> ประชาชน
          </li>
          <li>
            <span class="font-bold">วันที่เสนอ:</span> 30 มิ.ย. 2564
          </li>
          <li>
            <span class="font-bold">วันที่สิ้นสุด:</span> 17 พ.ย. 2564
          </li>
          <li>
            <span class="font-bold">รวมระยะเวลา:</span> 141 วัน
          </li>
          <li>
            <span class="font-bold">สถานะ:</span> ตกไปในการพิจารณาของรัฐสภา (วาระที่ 1)
            เนื่องจาก ส.ว. เห็นด้วยไม่ถึง 1/3 ของจำนวน ส.ว. ที่มีอยู่
          </li>
        </ul>
      ),
    },
    {
      title: "ร่างแก้ไขรัฐธรรมนูญของภาคประชาชน แก้ไขในเรื่องที่มาของ ส.ว.",
      content: (
        <ul class="ml-[2rem] list-disc">
          <li class="font-bold">เสนอแก้ไขเพิ่มเติมมาตรา 269 ในบทเฉพาะกาล</li>
          <li>
            <span class="font-bold">ชื่อผู้เสนอ:</span> นายจอน อึ๊งภากรณ์
            กับประชาชนผู้มีสิทธิเลือกตั้ง
          </li>
          <li>
            <span class="font-bold">ประเภทผู้เสนอ:</span> ประชาชน
          </li>
          <li>
            <span class="font-bold">วันที่เสนอ:</span> 22 ก.ย. 2563
          </li>
          <li>
            <span class="font-bold">วันที่สิ้นสุด:</span> 18 พ.ย. 2563
          </li>
          <li>
            <span class="font-bold">รวมระยะเวลา:</span> 58 วัน
          </li>
          <li>
            <span class="font-bold">สถานะ:</span> ตกไปในการพิจารณาของรัฐสภา (วาระที่ 1)
            เนื่องจาก ส.ว. เห็นด้วยไม่ถึง 1/3 ของจำนวน ส.ว. ที่มีอยู่
          </li>
        </ul>
      ),
    },
  ],
  ฝ่ายรัฐบาล: [
    {
      title: "ร่างแก้ไขรัฐธรรมนูญของภาคประชาชน แก้ไขในเรื่องที่มาของ ส.ว.",
      content: (
        <ul class="ml-[2rem] list-disc">
          <li class="font-bold">แก้ไขมาตรา 270</li>
          <li>
            <span class="font-bold">ชื่อผู้เสนอ:</span> ไพบูลย์ นิติตะวัน กับคณะ
          </li>
          <li>
            <span class="font-bold">ประเภทผู้เสนอ:</span> ฝ่ายรัฐบาล พรรคพลังประชารัฐ
          </li>
          <li>
            <span class="font-bold">วันที่เสนอ:</span> 7 เม.ย. 2564
          </li>
          <li>
            <span class="font-bold">วันที่สิ้นสุด:</span> 24 มิ.ย. 2564
          </li>
          <li>
            <span class="font-bold">รวมระยะเวลา:</span> 79 วัน
          </li>
          <li>
            <span class="font-bold">สถานะ:</span> ตกไปในการพิจารณาของรัฐสภา (วาระที่ 1)
            เนื่องจาก ส.ว. เห็นด้วยไม่ถึง 1/3 ของจำนวน ส.ว. ที่มีอยู่
          </li>
        </ul>
      ),
    },
  ],
  ฝ่ายค้าน: [
    {
      title: "ร่างรัฐธรรมนูญแห่งราชอาณาจักรไทย แก้ไขในเรื่องอำนาจของ ส.ว.",
      content: (
        <ul class="ml-[2rem] list-disc">
          <li class="font-bold">ยกเลิกมาตรา 270 และมาตรา 271 ของรัฐธรรมนูญ</li>
          <li>
            <span class="font-bold">ชื่อผู้เสนอ:</span> นายสมพงษ์ อมรวิวัฒน์ กับคณะ
          </li>
          <li>
            <span class="font-bold">ประเภทผู้เสนอ:</span> ฝ่ายค้าน เพื่อไทย ประชาชาติ
            พลังปวงชนไทย ก้าวไกล เสรีรวมไทย
          </li>
          <li>
            <span class="font-bold">วันที่เสนอ:</span> 10 ก.ย. 2563
          </li>
          <li>
            <span class="font-bold">วันที่สิ้นสุด:</span> 18 พ.ย. 2563
          </li>
          <li>
            <span class="font-bold">รวมระยะเวลา:</span> 70 วัน
          </li>
          <li>
            <span class="font-bold">สถานะ:</span> ตกไปในการพิจารณาของรัฐสภา (วาระที่ 1)
            เนื่องจาก ส.ว. เห็นด้วยไม่ถึง 1/3 ของจำนวน ส.ว. ที่มีอยู่
          </li>
        </ul>
      ),
    },
    {
      title: "ร่างรัฐธรรมนูญแห่งราชอาณาจักรไทย แก้ไขในเรื่องอำนาจของ ส.ว.",
      content: (
        <ul class="ml-[2rem] list-disc">
          <li class="font-bold">เสนอยกเลิกยกเลิกมาตรา 270 และมาตรา 271</li>
          <li>
            <span class="font-bold">ชื่อผู้เสนอ:</span> นายสมพงษ์ อมรวิวัฒน์ กับคณะ
          </li>
          <li>
            <span class="font-bold">ประเภทผู้เสนอ:</span> ฝ่ายค้าน เพื่อไทย ประชาชาติ
            พลังปวงชนไทย ก้าวไกล และเสรีรวมไทย
          </li>
          <li>
            <span class="font-bold">วันที่เสนอ:</span> 16 มิ.ย. 2564
          </li>
          <li>
            <span class="font-bold">วันที่สิ้นสุด:</span> 24 มิ.ย. 2564
          </li>
          <li>
            <span class="font-bold">รวมระยะเวลา:</span> 9 วัน
          </li>
          <li>
            <span class="font-bold">สถานะ:</span> ตกไปในการพิจารณาของรัฐสภา (วาระที่ 1)
            เนื่องจาก ส.ว. เห็นด้วยไม่ถึง 1/3 ของจำนวน ส.ว. ที่มีอยู่
          </li>
        </ul>
      ),
    },
  ],
  เสนอร่วมฝ่าย: [
    {
      title: "ร่างรัฐธรรมนูญแห่งราชอาณาจักรไทย แก้ไขในเรื่องอำนาจของ ส.ว.",
      content: (
        <ul class="ml-[2rem] list-disc">
          <li class="font-bold">แก้ไขเพิ่มเติมมาตรา 159 และยกเลิกมาตรา 272</li>
          <li>
            <span class="font-bold">ชื่อผู้เสนอ:</span> นายสมพงษ์ อมรวิวัฒน์ กับคณะ
          </li>
          <li>
            <span class="font-bold">ประเภทผู้เสนอ:</span> ร่วมฝ่าย เพื่อไทย ก้าวไกล
            เสรีรวมไทย ประชาชาติ เพื่อชาติ พลังปวงชนไทย และไทยศรีวิไลย์
          </li>
          <li>
            <span class="font-bold">วันที่เสนอ:</span> 16 มิ.ย. 2564
          </li>
          <li>
            <span class="font-bold">วันที่สิ้นสุด:</span> 24 มิ.ย. 2564
          </li>
          <li>
            <span class="font-bold">รวมระยะเวลา:</span> 9 วัน
          </li>
          <li>
            <span class="font-bold">สถานะ:</span> ตกไปในการพิจารณาของรัฐสภา (วาระที่ 1)
            เนื่องจาก ส.ว. เห็นด้วยไม่ถึง 1/3 ของจำนวน ส.ว. ที่มีอยู่
          </li>
        </ul>
      ),
    },
    {
      title: "ร่างรัฐธรรมนูญแห่งราชอาณาจักรไทย แก้ไขในเรื่องอำนาจของ ส.ว.",
      content: (
        <ul class="ml-[2rem] list-disc">
          <li class="font-bold">แก้ไขเพิ่มเติมมาตรา 159 และยกเลิกมาตรา 272</li>
          <li>
            <span class="font-bold">ชื่อผู้เสนอ:</span> นายจุรินทร์ ลักษณวิศิษฏ์ กับคณะ
          </li>
          <li>
            <span class="font-bold">ประเภทผู้เสนอ:</span> ร่วมฝ่าย ประชาธิปัตย์
            ชาติไทยพัฒนา ภูมิใจไทย และก้าวไกล
          </li>
          <li>
            <span class="font-bold">วันที่เสนอ:</span> 16 มิ.ย. 2564
          </li>
          <li>
            <span class="font-bold">วันที่สิ้นสุด:</span> 24 มิ.ย. 2564
          </li>
          <li>
            <span class="font-bold">รวมระยะเวลา:</span> 9 วัน
          </li>
          <li>
            <span class="font-bold">สถานะ:</span> ตกไปในการพิจารณาของรัฐสภา (วาระที่ 1)
            เนื่องจาก ส.ว. เห็นด้วยไม่ถึง 1/3 ของจำนวน ส.ว. ที่มีอยู่
          </li>
        </ul>
      ),
    },
  ],
};

interface Ch3ConstitutionProps {
  side: "ภาคประชาชน" | "ฝ่ายรัฐบาล" | "ฝ่ายค้าน" | "เสนอร่วมฝ่าย";
}

export const Ch3Constitution = component$<Ch3ConstitutionProps>(({ side }) => {
  const elQPop = useSignal<HTMLDivElement>();

  useVisibleTask$(
    () => {
      if (elQPop.value) {
        [...elQPop.value.children].forEach((el) => el.classList.add("opacity-0"));

        inView(
          elQPop.value,
          () => {
            if (elQPop.value)
              animate(
                [...elQPop.value.children],
                {
                  opacity: [0, 1],
                  transform: ["translateX(-50%)", ""],
                },
                {
                  duration: 0.5,
                  delay: stagger(0.1),
                }
              );
          },
          {
            amount: 0.99,
          }
        );
      }
    },
    { strategy: "document-idle" }
  );

  return (
    <div ref={elQPop} class="mb-10 flex w-full gap-10">
      {DATA[side].map((d) => (
        <QPopover title={d.title} key={d.title}>
          {d.content}
        </QPopover>
      ))}
    </div>
  );
});
