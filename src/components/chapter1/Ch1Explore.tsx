import { component$, useSignal, $, useStore } from "@builder.io/qwik";

import PEOPLE from "~/data/people";

import TabSelect from "~/components/TabSelect";
import CheckPill from "../CheckPill";
import RadioPill from "../RadioPill";

type JobName = keyof (typeof PEOPLE)["jobs"];

const JOBS = [...Object.keys(PEOPLE.jobs)].sort(
  (a, z) => PEOPLE.jobs[z as JobName] - PEOPLE.jobs[a as JobName]
);

const Ch1Explore = component$(() => {
  const tabIndex = useSignal(0);

  const changeTabIndex = $((index: number) => {
    tabIndex.value = index;
  });

  const formOptions = useStore(
    {
      type: {
        position: true,
        ncpo: true,
        friend: true,
      },
      relation: {
        yes: true,
        no: true,
      },
      status: {
        active: true,
        out: true,
      },
      job: 0,
    },
    { deep: true }
  );

  return (
    <div class="container mb-60">
      <TabSelect
        id="senate"
        secondBtnText="ดูรายชื่อ ก&ndash;ฮ"
        onChange={changeTabIndex}
      />
      <div class="flex flex-col gap-30 md:flex-row">
        <div class="max-w-[530px] flex-1 rounded-10 border bg-white p-30">
          <p class="wv-h6 mb-10 font-kondolar font-black">เลือกสำรวจตาม</p>
          <p class="wv-b2 mb-10 font-bold">ประเภท ส.ว.</p>
          <div class="mb-10 flex flex-wrap gap-[8px]">
            <CheckPill
              id="โดยตำแหน่ง"
              checked={formOptions.type.position}
              onChange={$(() => {
                formOptions.type.position = !formOptions.type.position;
              })}
            >
              <div class="h-[12px] w-[12px] rounded-full border border-black bg-senate-green" />
              <span class="wv-b4 font-bold leading-none">โดยตำแหน่ง</span>
            </CheckPill>
            <CheckPill
              id="เลือกโดยคสช"
              checked={formOptions.type.ncpo}
              onChange={$(() => {
                formOptions.type.ncpo = !formOptions.type.ncpo;
              })}
            >
              <div class="h-[12px] w-[12px] rounded-full border border-black bg-senate-blue" />
              <span class="wv-b4 font-bold leading-none">เลือกโดย คสช.</span>
            </CheckPill>
            <CheckPill
              id="เลือกกันเอง"
              checked={formOptions.type.friend}
              onChange={$(() => {
                formOptions.type.friend = !formOptions.type.friend;
              })}
            >
              <div class="h-[12px] w-[12px] rounded-full border border-black bg-senate-pink" />
              <span class="wv-b4 font-bold leading-none">เลือกกันเอง</span>
            </CheckPill>
          </div>
          <p class="wv-b2 mb-10 font-bold">ความเกี่ยวข้องกับ คสช.</p>
          <div class="mb-10 flex flex-wrap gap-[8px]">
            <CheckPill
              id="ผู้มีส่วนเกี่ยวข้องกับคสช"
              checked={formOptions.relation.yes}
              onChange={$(() => {
                formOptions.relation.yes = !formOptions.relation.yes;
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 17"
                width="17"
                height="17"
              >
                <path
                  fill="currentColor"
                  d="M14.276 4.002c.275.244.3.666.056.94l-7.112 8a.667.667 0 01-.996 0l-3.556-4a.667.667 0 01.997-.885l3.057 3.44 6.613-7.44a.667.667 0 01.941-.055z"
                />
              </svg>
              <span class="wv-b4 font-bold leading-none">
                ผู้มีส่วนเกี่ยวข้องกับ คสช. ({PEOPLE.withNcpo})
              </span>
            </CheckPill>
            <CheckPill
              id="ผู้ที่ไม่เกี่ยวข้องกับคสช"
              checked={formOptions.relation.no}
              onChange={$(() => {
                formOptions.relation.no = !formOptions.relation.no;
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 17"
                width="17"
                height="17"
              >
                <path
                  fill="currentColor"
                  d="M4.029 4.029c.26-.26.682-.26.943 0L8.5 7.557 12.03 4.03a.667.667 0 11.943.942L9.443 8.5l3.529 3.529a.667.667 0 01-.943.942L8.5 9.443 4.972 12.97a.667.667 0 01-.943-.942L7.557 8.5 4.03 4.971a.667.667 0 010-.942z"
                />
              </svg>
              <span class="wv-b4 font-bold leading-none">
                ผู้ที่ไม่เกี่ยวข้องกับ คสช. ({PEOPLE.notNcpo})
              </span>
            </CheckPill>
          </div>
          <p class="wv-b2 mb-10 font-bold">สถานะ</p>
          <div class="mb-10 flex flex-wrap gap-[8px]">
            <CheckPill
              id="ดำรงตำแหน่ง"
              checked={formOptions.status.active}
              onChange={$(() => {
                formOptions.status.active = !formOptions.status.active;
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 17"
                width="17"
                height="17"
              >
                <path
                  fill="currentColor"
                  d="M14.276 4.002c.275.244.3.666.056.94l-7.112 8a.667.667 0 01-.996 0l-3.556-4a.667.667 0 01.997-.885l3.057 3.44 6.613-7.44a.667.667 0 01.941-.055z"
                />
              </svg>
              <span class="wv-b4 font-bold leading-none">ดำรงตำแหน่ง</span>
            </CheckPill>
            <CheckPill
              id="พ้นจากตำแหน่ง"
              checked={formOptions.status.out}
              onChange={$(() => {
                formOptions.status.out = !formOptions.status.out;
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 17"
                width="17"
                height="17"
              >
                <path
                  fill="currentColor"
                  d="M4.029 4.029c.26-.26.682-.26.943 0L8.5 7.557 12.03 4.03a.667.667 0 11.943.942L9.443 8.5l3.529 3.529a.667.667 0 01-.943.942L8.5 9.443 4.972 12.97a.667.667 0 01-.943-.942L7.557 8.5 4.03 4.971a.667.667 0 010-.942z"
                />
              </svg>
              <span class="wv-b4 font-bold leading-none">พ้นจากตำแหน่ง</span>
            </CheckPill>
          </div>
          <p class="wv-b2 mb-10 font-bold">อาชีพ</p>
          <div class="flex flex-wrap gap-[8px]">
            <RadioPill
              name="อาชีพ"
              id="ทั้งหมด"
              checked={formOptions.job === 0}
              onChange={$(() => {
                formOptions.job = 0;
              })}
            >
              <span class="wv-b4 font-bold leading-none">ทั้งหมด ({PEOPLE.total})</span>
            </RadioPill>
            {JOBS.map((job, i) => (
              <RadioPill
                name="อาชีพ"
                id={job}
                key={job}
                checked={formOptions.job === i + 1}
                onChange={$(() => {
                  formOptions.job = i + 1;
                })}
              >
                <span class="wv-b4 font-bold leading-none">
                  {job} ({PEOPLE.jobs[job as JobName]})
                </span>
              </RadioPill>
            ))}
          </div>
        </div>
        <div class="flex-1">{JSON.stringify(formOptions)}</div>
      </div>
    </div>
  );
});

export default Ch1Explore;
