import {
  $,
  component$,
  useComputed$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";

import PEOPLE from "~/data/people";

import TabSelect from "~/components/TabSelect";
import CheckPill from "../CheckPill";
import RadioPill from "../RadioPill";

import type {
  FilteredPeopleDataSchema,
  OccupationGroup,
  PeopleDataSchema,
  PeopleListSchema,
} from "~/types/people";

export interface FormOption {
  type: { position: boolean; ncpo: boolean; friend: boolean };
  relation: { yes: boolean; no: boolean };
  status: { active: boolean; out: boolean };
  job: number;
}

const JOBS = ([...Object.keys(PEOPLE.jobs)] as OccupationGroup[]).sort(
  (a, z) => PEOPLE.jobs[z] - PEOPLE.jobs[a]
);

const groupBy = <T, K extends keyof any>(
  arr: T[],
  groupFn: (element: T) => K
): Record<K, T[]> =>
  arr.reduce(
    (r, v, _i, _a, k = groupFn(v)) => ((r[k] || (r[k] = [])).push(v), r),
    {} as Record<K, T[]>
  );

const JobDivider = component$(
  ({ name, data }: { name: string; data: PeopleListSchema[] }) => {
    return (
      <div class="flex items-center gap-10">
        <span class="wv-h7 font-kondolar font-bold">{name}</span>
        <div class="flex-1 border-t" />
        <div class="text-right">
          <span class="wv-b3 block font-bold">{data.length} คน</span>
          <span class="wv-b6 block">
            {data.filter((e) => !e.IsActive).length} คนพ้นจากตำแหน่ง
          </span>
        </div>
      </div>
    );
  }
);

const Overview = component$(({ data }: { data: FilteredPeopleDataSchema }) => {
  return (
    <div class="flex-1">
      <div class="flex items-center gap-20">
        <span class="wv-b2 font-bold">สัญลักษณ์ประเภท ส.ว.</span>
        <div class="flex flex-wrap items-center justify-center gap-[8px]">
          <div class="flex gap-[8px]">
            <div class="h-20 w-20 rounded-full border bg-senate-green" />
            <span class="wv-b4 font-bold">ส.ว. โดยตำแหน่ง</span>
          </div>
          <div class="flex gap-[8px]">
            <div class="h-20 w-20 rounded-full border bg-senate-blue" />
            <span class="wv-b4 font-bold">ส.ว. เลือกโดย คสช.</span>
          </div>
          <div class="flex gap-[8px]">
            <div class="h-20 w-20 rounded-full border bg-senate-pink" />
            <span class="wv-b4 font-bold">ส.ว. เลือกกันเอง</span>
          </div>
          <div class="flex gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 23"
              width="21"
              height="21"
            >
              <rect width="21" height="21" x="1" y="1.333" fill="#fff" rx="10.5" />
              <g clipPath="url(#senate-yeeted)">
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M7.285 6.685l-.933.933 4.2 4.2-4.2 4.2.933.934 4.2-4.2 4.2 4.2.934-.933-4.2-4.2 4.2-4.2-.933-.934-4.2 4.2-4.2-4.2z"
                  clipRule="evenodd"
                />
              </g>
              <rect width="21" height="21" x="1" y="1.333" stroke="#000" rx="10.5" />
              <defs>
                <clipPath id="senate-yeeted">
                  <path
                    fill="#fff"
                    d="M0 0h10.56v10.56H0z"
                    transform="translate(6.22 6.553)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="wv-b4 font-bold">พ้นจากตำแหน่ง</span>
          </div>
          <div class="flex gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 23"
              width="21"
              height="21"
            >
              <path
                fill="#fff"
                stroke="#000"
                d="M11.5 2.005l2.665 2.852.156.166.227-.007 3.901-.132-.132 3.901-.007.227.166.155 2.852 2.666-2.852 2.665-.166.156.007.227.132 3.901-3.901-.132-.227-.007-.155.166L11.5 21.66l-2.666-2.852-.155-.166-.227.007-3.901.132.132-3.901.007-.227-.166-.155-2.852-2.666 2.852-2.666.166-.155-.007-.227-.132-3.901 3.901.132.227.007.155-.166L11.5 2.005z"
              />
            </svg>
            <span class="wv-b4 font-bold">ผู้มีส่วนเกี่ยวข้องกับ คสช.</span>
          </div>
        </div>
      </div>
      {JOBS.map(
        (job) =>
          data.listByJobs?.[job]?.length > 0 && (
            <div key={job}>
              <JobDivider name={job} data={data.listByJobs[job]} />
              <div class="my-10 flex flex-wrap gap-4">
                {data.listByJobs[job].map((e) => (
                  <span key={e.Id}>{e.Name}</span>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
});

const Details = component$(() => {
  return <div class="flex-1">LOL</div>;
});

const Ch1Explore = component$(() => {
  const tabIndex = useSignal(0);
  const data = useSignal<PeopleDataSchema>({
    imgBase: "",
    list: [],
  });

  useVisibleTask$(async () => {
    const resp = await fetch("./data/people.json");
    const json = await resp.json();

    data.value = json;
  });

  const changeTabIndex = $((index: number) => {
    tabIndex.value = index;
  });

  const formOptions = useStore<FormOption>(
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

  const filteredData = useComputed$((): FilteredPeopleDataSchema => {
    const list = [...data.value.list].filter((e) => {
      if (
        formOptions.job !== 0 &&
        formOptions.job !== JOBS.indexOf(e.OccupationGroup) + 1
      )
        return false;

      let score = 0;

      if (formOptions.type.friend && e.SenatorMethod === "เลือกกันเอง") score++;
      if (formOptions.type.ncpo && e.SenatorMethod === "เลือกโดย คสช.") score++;
      if (formOptions.type.position && e.SenatorMethod === "โดยตำแหน่ง") score++;

      if (formOptions.relation.yes && !!e.NcpoType) score++;
      if (formOptions.relation.no && !e.NcpoType) score++;

      if (formOptions.status.active && !!e.IsActive) score++;
      if (formOptions.status.out && !e.IsActive) score++;

      return score >= 3;
    });

    const listByJobs = groupBy(list, (l) => l.OccupationGroup);

    return {
      ...data.value,
      list,
      listByJobs,
    };
  });

  return (
    <div class="container mb-60">
      <TabSelect
        id="senate"
        secondBtnText="ดูรายชื่อ ก&ndash;ฮ"
        onChange={changeTabIndex}
      />
      <div class="flex flex-col items-start gap-30 md:flex-row">
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
                  {job} ({PEOPLE.jobs[job as OccupationGroup]})
                </span>
              </RadioPill>
            ))}
          </div>
        </div>
        {tabIndex.value === 0 ? <Overview data={filteredData.value} /> : <Details />}
      </div>
    </div>
  );
});

export default Ch1Explore;
