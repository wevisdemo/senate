import {
  $,
  component$,
  createContextId,
  useComputed$,
  useContext,
  useContextProvider,
  useOnWindow,
  useSignal,
  useStore,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

import { TabSelect } from "~/components/TabSelect";
import { CheckPill } from "../CheckPill";
import { Pagination } from "../Pagination";
import { RadioPill } from "../RadioPill";
import { QPeople } from "../react/popovers/QPeople";
// import { Ch1PeoplePopover } from "./Ch1PeoplePopover";

import { THEYWORK_LINK } from "~/data/const";
import PEOPLE from "~/data/people";

import type { Signal } from "@builder.io/qwik";
import type {
  FilteredPeopleDataSchema,
  OccupationGroup,
  PeopleDataSchema,
  PeopleListSchema,
} from "~/types/people";

export const DataContext = createContextId<Readonly<Signal<FilteredPeopleDataSchema>>>(
  "ch1explore.data-context"
);

const JOBS = ([...Object.keys(PEOPLE.jobs)] as OccupationGroup[]).sort(
  (a, z) => PEOPLE.jobs[z][0] - PEOPLE.jobs[a][0]
);
const ENTRY_PER_PAGE = 10;

const groupBy = <T, K extends keyof any>(
  arr: T[],
  groupFn: (element: T) => K
): Record<K, T[]> =>
  arr.reduce(
    (r, v, _i, _a, k = groupFn(v)) => ((r[k] || (r[k] = [])).push(v), r),
    {} as Record<K, T[]>
  );

const JobDivider = component$<{ name: OccupationGroup }>(({ name }) => (
  <>
    <div class="flex items-center gap-10">
      <span class="wv-h7 font-kondolar font-bold">{name.replace("ๆ", " ๆ")}</span>
      <div class="flex-1 border-t" />
      <div class="wv-b3 block text-right font-bold">{PEOPLE.jobs[name][0]} คน</div>
    </div>
    {PEOPLE.jobs[name][1] > 0 && (
      <span class="wv-b6 -mb-4 -mt-4 block text-right leading-none">
        {PEOPLE.jobs[name][1]} คนพ้นจากตำแหน่ง
      </span>
    )}
  </>
));

const Overview = component$<{ show: boolean }>(({ show }) => {
  const data = useContext(DataContext);

  return (
    <div class={`flex-1 ${show ? "" : "hidden"}`}>
      <div class="flex items-center gap-20">
        <span class="wv-b2 font-bold">
          สัญลักษณ์<span class="nobr">ประเภท ส.ว.</span>
        </span>
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
          (data.value.imgBase === "" ||
            Object.keys(data.value.listByJobs).includes(job)) && (
            <div key={job}>
              <JobDivider name={job} />
              <div class="my-10 flex flex-wrap gap-4">
                {(data.value.imgBase === ""
                  ? Array(PEOPLE.jobs[job][0]).fill``
                  : data.value.listByJobs[job]
                ).map((e) => (
                  <div key={e.Id} class="h-[22px] w-[22px]">
                    <QPeople data={e} imgBase={data.value.imgBase} />
                    {/* <Ch1PeoplePopover data={e} imgBase={data.value.imgBase} /> */}
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
});

const PeopleCard = component$<{ data: PeopleListSchema; imgBase: string; show: boolean }>(
  ({ data, imgBase, show }) => (
    <a
      class="flex items-center gap-20 rounded-10 border border-black bg-white px-20 py-10 font-bold text-black no-underline hover:no-underline"
      href={`https://${THEYWORK_LINK}/people/` + data.Name.replace(/\s+/g, "-")}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <div class="min-h-[64px] min-w-[64px] flex-[0_0_64px]">
        {data.NcpoType ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            width="64"
            height="64"
          >
            {show && (
              <image
                width="64"
                height="64"
                href={data.Images ? imgBase + data.Images : "./imgs/no-image.webp"}
                clip-path="url(#imageStar)"
              />
            )}
            <path
              class={
                data.SenatorMethod === "เลือกกันเอง"
                  ? "fill-senate-pink"
                  : data.SenatorMethod === "เลือกโดย คสช."
                  ? "fill-senate-blue"
                  : "fill-senate-green"
              }
              fillRule="evenodd"
              d="M32 0l9.184 9.827 13.443-.454-.454 13.443L64 32l-9.827 9.184.454 13.443-13.443-.454L32 64l-9.184-9.827-13.443.454.454-13.443L0 32l9.827-9.184-.454-13.443 13.443.454L32 0zm0 5.988l-7.466 7.988-10.927-.37.369 10.928L5.988 32l7.988 7.466-.37 10.928 10.928-.37L32 58.012l7.466-7.988 10.928.37-.37-10.928L58.012 32l-7.988-7.466.37-10.927-10.928.369L32 5.988z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          show && (
            <img
              class={`rounded-full border-[4px] ${
                data.SenatorMethod === "เลือกกันเอง"
                  ? "border-senate-pink bg-senate-pink"
                  : data.SenatorMethod === "เลือกโดย คสช."
                  ? "border-senate-blue bg-senate-blue"
                  : "border-senate-green bg-senate-green"
              }`}
              src={data.Images ? imgBase + data.Images : "./imgs/no-image.webp"}
              alt=""
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
            />
          )
        )}
      </div>
      <div>
        <span class="wv-h9 mb-5 block font-kondolar">{data.Name}</span>
        <div class="flex flex-wrap items-center gap-4">
          <div
            class={`m-4 h-[8px] w-[8px] rounded-full ${
              data.SenatorMethod === "เลือกกันเอง"
                ? "bg-senate-pink"
                : data.SenatorMethod === "เลือกโดย คสช."
                ? "bg-senate-blue"
                : "bg-senate-green"
            }`}
          />
          <span class="mr-[6px] inline-block">ส.ว. {data.SenatorMethod}</span>
          {data.IsActive ? (
            <div class="flex items-center gap-4 rounded-5 bg-[#E9FFF4] pl-4 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                width={16}
                height={16}
              >
                <path
                  fill="#000"
                  d="M13.776 3.502c.275.244.3.666.056.94l-7.112 8a.666.666 0 01-.996 0l-3.556-4a.667.667 0 01.997-.885l3.057 3.44 6.613-7.44a.667.667 0 01.941-.055z"
                />
              </svg>
              <span>อยู่ในตำแหน่ง</span>
            </div>
          ) : (
            <div class="flex items-center gap-4 rounded-5 bg-[#e2e2e2] pl-4 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                width={16}
                height={16}
              >
                <path
                  fill="#000"
                  d="M3.529 3.529c.26-.26.682-.26.943 0L8 7.057 11.53 3.53a.667.667 0 11.943.942L8.943 8l3.529 3.528a.667.667 0 01-.943.943L8 8.943 4.472 12.47a.667.667 0 11-.943-.943L7.057 8 3.53 4.47a.667.667 0 010-.942z"
                />
              </svg>
              <span>พ้นจากตำแหน่ง</span>
            </div>
          )}
        </div>
      </div>
    </a>
  )
);

const Details = component$<{ show: boolean }>(({ show }) => {
  const data = useContext(DataContext);

  const currentPageIndex = useSignal(0);

  useTask$(({ track }) => {
    track(() => data.value.list);

    currentPageIndex.value = 0;
  });

  return (
    <div class={`w-full flex-1 ${show ? "" : "hidden"}`}>
      <div class="mb-15 flex flex-col flex-wrap items-center justify-between gap-10 lg:flex-row">
        <div class="wv-b4 nobr font-bold">
          &ndash; {data.value.list.length} คน &ndash;
        </div>
        {data.value.list.length > ENTRY_PER_PAGE && (
          <Pagination
            perPage={ENTRY_PER_PAGE}
            currentPage={currentPageIndex.value}
            total={data.value.list.length}
            onChange={$((i: number) => {
              currentPageIndex.value = i;
            })}
          />
        )}
      </div>
      <div class="flex flex-col gap-5">
        {data.value.list
          .slice(
            currentPageIndex.value * ENTRY_PER_PAGE,
            currentPageIndex.value * ENTRY_PER_PAGE + ENTRY_PER_PAGE
          )
          .map((e) => (
            <PeopleCard key={e.Id} data={e} imgBase={data.value.imgBase} show={show} />
          ))}
      </div>
    </div>
  );
});

export const Ch1Explore = component$(() => {
  const tabIndex = useSignal(0);
  const elDetails = useSignal<HTMLDetailsElement>();

  const data = useSignal<PeopleDataSchema>({
    imgBase: "",
    list: [],
  });

  const forceOpenDetails = $(() => {
    if (elDetails.value) {
      elDetails.value.open = window.matchMedia("(min-width: 1024px)").matches;
    }
  });

  useOnWindow("resize", forceOpenDetails);

  useVisibleTask$(async () => {
    forceOpenDetails();

    const resp = await fetch("./data/people.json");
    const json = await resp.json();

    data.value = json;
  });

  const formOptions = useStore({
    typePosition: true,
    typeNcpo: true,
    typeFriend: true,
    relationYes: true,
    relationNo: true,
    statusActive: true,
    statusOut: true,
    job: 0,
  });

  useContextProvider(
    DataContext,
    useComputed$((): FilteredPeopleDataSchema => {
      const list = [...data.value.list].filter((e) => {
        if (
          formOptions.job !== 0 &&
          formOptions.job !== JOBS.indexOf(e.OccupationGroup) + 1
        )
          return false;

        let score = 0;

        if (formOptions.typeFriend && e.SenatorMethod === "เลือกกันเอง") score++;
        if (formOptions.typeNcpo && e.SenatorMethod === "เลือกโดย คสช.") score++;
        if (formOptions.typePosition && e.SenatorMethod === "โดยตำแหน่ง") score++;

        if (formOptions.relationYes && !!e.NcpoType) score++;
        if (formOptions.relationNo && !e.NcpoType) score++;

        if (formOptions.statusActive && !!e.IsActive) score++;
        if (formOptions.statusOut && !e.IsActive) score++;

        return score >= 3;
      });

      const listByJobs = groupBy(list, (l) => l.OccupationGroup);

      return {
        ...data.value,
        list,
        listByJobs,
      };
    })
  );

  return (
    <div class="con mb-60">
      <a
        id="before-ch1explore"
        href="#after-ch1explore"
        class="sr-only focus:not-sr-only"
      >
        ส่วนต้นของเครื่องมือสำรวจ ส.ว. แตะเพื่อข้ามไปยังเนื้อหาส่วนถัดไป
      </a>
      <TabSelect
        id="senate"
        secondBtnText="ดูรายชื่อ ก&ndash;ฮ"
        onChange={$((index: number) => {
          tabIndex.value = index;
        })}
      />
      <svg class="absolute h-0 w-0">
        <defs>
          <clipPath id="imageStar">
            <path
              fillRule="evenodd"
              d="M40.398 11.974l-8.325-8.908-8.326 8.908-12.185-.412.412 12.185-8.908 8.326 8.908 8.325-.412 12.185 12.185-.412 8.326 8.908 8.325-8.908 12.185.412-.412-12.185 8.908-8.325-8.908-8.326.412-12.185-12.185.412z"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
      <div class="flex flex-col items-start gap-30 lg:flex-row">
        <details
          ref={elDetails}
          class="w-full flex-1 rounded-[20px] border bg-white p-10 lg:max-w-[530px] lg:rounded-10 lg:p-30"
        >
          <summary class="details-marker-none wv-b4 cursor-pointer list-none rounded-10 bg-black py-10 font-bold text-white lg:hidden">
            <span class="flex items-center justify-center gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                width="25"
                height="25"
              >
                <path
                  fill="#fff"
                  d="M9.5 5.377a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3.001 3.001 0 015.66 0h7.17a1 1 0 110 2h-7.17a3.001 3.001 0 01-5.66 0H5.5a1 1 0 110-2h1.17zm8.83 6a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3.001 3.001 0 015.66 0h1.17a1 1 0 110 2h-1.17a3.001 3.001 0 01-5.66 0H5.5a1 1 0 010-2h7.17zm-3.17 6a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3.001 3.001 0 015.66 0h7.17a1 1 0 110 2h-7.17a3.001 3.001 0 01-5.66 0H5.5a1 1 0 010-2h1.17z"
                />
              </svg>
              <span>คัดกรอง ส.ว.</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                width="25"
                height="25"
              >
                <path fill="#fff" d="M17.5 10.377l-5 6-5-6h10z" />
              </svg>
            </span>
          </summary>
          <div class="mt-20 lg:mt-0">
            <p class="wv-h6 mb-10 font-kondolar font-black">เลือกสำรวจตาม</p>
            <p class="wv-b2 mb-10 font-bold">ประเภท ส.ว.</p>
            <div class="mb-10 flex flex-wrap gap-[8px]">
              <CheckPill
                id="โดยตำแหน่ง"
                checked={formOptions.typePosition}
                onChange={$(() => {
                  formOptions.typePosition = !formOptions.typePosition;
                })}
              >
                <div class="h-[12px] w-[12px] rounded-full border border-black bg-senate-green" />
                <span class="wv-b4 font-bold leading-none">โดยตำแหน่ง</span>
              </CheckPill>
              <CheckPill
                id="เลือกโดยคสช"
                checked={formOptions.typeNcpo}
                onChange={$(() => {
                  formOptions.typeNcpo = !formOptions.typeNcpo;
                })}
              >
                <div class="h-[12px] w-[12px] rounded-full border border-black bg-senate-blue" />
                <span class="wv-b4 font-bold leading-none">เลือกโดย คสช.</span>
              </CheckPill>
              <CheckPill
                id="เลือกกันเอง"
                checked={formOptions.typeFriend}
                onChange={$(() => {
                  formOptions.typeFriend = !formOptions.typeFriend;
                })}
              >
                <div class="h-[12px] w-[12px] rounded-full border border-black bg-senate-pink" />
                <span class="wv-b4 font-bold leading-none">เลือกกันเอง</span>
              </CheckPill>
            </div>
            <p class="wv-b2 mb-10 font-bold">ความเกี่ยวข้องกับ คสช.</p>
            <div class="mb-[8px] flex flex-wrap gap-[8px]">
              <CheckPill
                id="ผู้มีส่วนเกี่ยวข้องกับคสช"
                checked={formOptions.relationYes}
                onChange={$(() => {
                  formOptions.relationYes = !formOptions.relationYes;
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
                checked={formOptions.relationNo}
                onChange={$(() => {
                  formOptions.relationNo = !formOptions.relationNo;
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
            <p class="wv-b7 mb-10">
              <span class="font-bold">
                ผู้มีส่วนเกี่ยวข้องกับ คสช. คือ ผู้ที่เคยมีตำแหน่งอยู่ในยุค คสช. ได้แก่
              </span>{" "}
              สภานิติบัญญัติแห่งชาติ (สนช.), สภาปฏิรูปแห่งชาติ (สปช.),
              สภาขับเคลื่อนการปฏิรูปประเทศ (สปท.) และ คณะกรรมการร่างรัฐธรรมนูญ (กรธ.)
            </p>
            <p class="wv-b2 mb-10 font-bold">สถานะ</p>
            <div class="mb-10 flex flex-wrap gap-[8px]">
              <CheckPill
                id="ดำรงตำแหน่ง"
                checked={formOptions.statusActive}
                onChange={$(() => {
                  formOptions.statusActive = !formOptions.statusActive;
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
                checked={formOptions.statusOut}
                onChange={$(() => {
                  formOptions.statusOut = !formOptions.statusOut;
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
                    {job.replace("ๆ", " ๆ")} ({PEOPLE.jobs[job as OccupationGroup][0]})
                  </span>
                </RadioPill>
              ))}
            </div>
          </div>
        </details>
        <Overview show={!tabIndex.value} />
        <Details show={!!tabIndex.value} />
      </div>
      <a
        id="after-ch1explore"
        href="#before-ch1explore"
        class="sr-only focus:not-sr-only"
      >
        ส่วนท้ายของเครื่องมือสำรวจ ส.ว. แตะเพื่อย้อนกลับไปยังเนื้อหาก่อนหน้า
      </a>
    </div>
  );
});
