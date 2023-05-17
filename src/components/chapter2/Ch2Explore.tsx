import type { Signal } from "@builder.io/qwik";
import {
  $,
  component$,
  createContextId,
  useComputed$,
  useContext,
  useContextProvider,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

import { TabSelect } from "~/components/TabSelect";
import { Pagination } from "../Pagination";
import { QChoosePm, QChoosePmContent } from "../react/popovers/QChoosePm";
import { QVotelog, QVotelogContent } from "../react/popovers/QVotelog";
import { QVotelogPeople, QVotelogPeopleContent } from "../react/popovers/QVotelogPeople";

import VOTELOG from "~/data/votelog";

import type { VotelogDataSchema, VotelogItemType } from "~/types/votelog";
import type { PeopleVotelog } from "../react/popovers/QVotelogPeople";

export const DataContext = createContextId<Signal<VotelogDataSchema>>(
  "ch2explore.data-context"
);

const ENTRY_PER_PAGE = 5;
const VOTELOG_PEOPLE_DATA: Record<string, PeopleVotelog[]> = {
  "270": [
    { name: "อุดม สิทธิวิรัชธรรม", vote: [216, 3, 0] },
    { name: "วิรุฬห์ แสงเทียน", vote: [216, 3, 0] },
    { name: "จิรนิติ หะวานนท์", vote: [217, 2, 0] },
    { name: "ชั่งทอง โอภาสศิริวิทย์", vote: [52, 139, 28] },
    { name: "นภดล เทพพิทักษ์", vote: [203, 12, 4] },
  ],
  "276": [{ name: "บรรจงศักดิ์ วงศ์ปราชญ์", vote: [206, 12, 11] }],
  "294": [{ name: "อุดม รัฐอมฤต", vote: [200, 2, 6] }],
};

const LoadingPaper = component$(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 52 69"
    width="52"
    height="69"
  >
    <path fill="#CCC" d="M1 1h50v66.667H1z" />
    <circle cx="14" cy="34" r="4" fill="#fff" />
    <circle cx="26" cy="34" r="4" fill="#fff" />
    <circle cx="38" cy="34" r="4" fill="#fff" />
    <path stroke="#000" d="M.5.5h51v67.667H.5z" />
  </svg>
));

const Overview = component$<{ show: boolean }>(({ show }) => {
  const data = useContext(DataContext);

  return (
    <div class={show ? "" : "hidden"}>
      <p class="wv-h4 mb-30 text-center font-kondolar font-black">
        มติในที่ประชุมวุฒิสภา ({VOTELOG.senate.total})
      </p>

      <div class="mb-30 flex flex-col gap-20 lg:flex-row">
        <div class="flex-1">
          <div class="mb-20 flex flex-col items-center gap-20 lg:flex-row lg:items-start">
            <div class="w-full max-w-[160px] text-center">
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
            <div class="flex flex-wrap gap-10">
              {data.value.senate.keepNcpo.length ? (
                <>
                  {data.value.senate.keepNcpo.map((d) =>
                    [270, 276, 294].includes(d.Id) ? (
                      <QVotelogPeople
                        key={d.Id}
                        type="ค้ำจุน คสช."
                        date={d.VoteDate}
                        title={d.Title}
                        vote={VOTELOG_PEOPLE_DATA[d.Id]}
                      />
                    ) : (
                      <QVotelog
                        key={d.Id}
                        id={d.Id}
                        type="ค้ำจุน คสช."
                        pass={d.IsPassed}
                        date={d.VoteDate}
                        title={d.Title}
                        vote={d.PeopleVotes}
                      />
                    )
                  )}
                </>
              ) : (
                Array(VOTELOG.senate.keepNcpo).fill(<LoadingPaper />)
              )}
            </div>
          </div>
          <div class="mb-20 flex flex-col items-center gap-20 lg:flex-row lg:items-start">
            <div class="w-full max-w-[160px] text-center">
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
            <div class="flex flex-wrap gap-10">
              {data.value.senate.consVote.length
                ? data.value.senate.consVote.map((d) => (
                    <QVotelog
                      key={d.Id}
                      id={d.Id}
                      type="ประชามติ"
                      pass={d.IsPassed}
                      date={d.VoteDate}
                      title={d.Title}
                      vote={d.PeopleVotes}
                    />
                  ))
                : Array(VOTELOG.senate.consVote).fill(<LoadingPaper />)}
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col items-center gap-20 lg:flex-row lg:items-start">
          <div class="w-full max-w-[160px] text-center">
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
          <div class="flex flex-wrap gap-10">
            {data.value.senate.nationStrat.length
              ? data.value.senate.nationStrat.map((d) => (
                  <QVotelog
                    key={d.Id}
                    id={d.Id}
                    title={d.Title}
                    date={d.VoteDate}
                    type="ยุทธศาสตร์ชาติ"
                    pass={d.IsPassed}
                    vote={d.PeopleVotes}
                    right
                  />
                ))
              : Array(VOTELOG.senate.nationStrat).fill(<LoadingPaper />)}
          </div>
        </div>
      </div>

      <p class="wv-h4 mb-30 text-center font-kondolar font-black">
        มติในที่ประชุมร่วมของรัฐสภา ({VOTELOG.parliament.total})
      </p>

      <div class="flex flex-col gap-20 lg:flex-row">
        <div class="flex-1">
          <div class="mb-20 flex flex-col items-center gap-20 lg:flex-row lg:items-start">
            <div class="w-full max-w-[160px] text-center">
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
            <QChoosePm />
          </div>
          <div class="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
            <div class="w-full max-w-[160px] text-center">
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
            <div class="mb-auto flex flex-1 flex-wrap gap-10">
              {data.value.parliament.consVote.length
                ? data.value.parliament.consVote.map((d) => (
                    <QVotelog
                      key={d.Id}
                      id={d.Id}
                      type="ประชามติ"
                      pass={d.IsPassed}
                      date={d.VoteDate}
                      title={d.Title}
                      vote={d.PeopleVotes}
                    />
                  ))
                : Array(VOTELOG.parliament.consVote).fill(<LoadingPaper />)}
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col items-center gap-20 lg:flex-row lg:items-start">
          <div class="w-full max-w-[160px] text-center">
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
          <div class="mb-auto flex flex-1 flex-wrap gap-10">
            {data.value.parliament.consDraft.length
              ? data.value.parliament.consDraft.map((d) => (
                  <QVotelog
                    key={d.Id}
                    id={d.Id}
                    type="แก้รัฐธรรมนูญ"
                    pass={d.IsPassed}
                    date={d.VoteDate}
                    title={d.Title}
                    vote={d.PeopleVotes}
                    right
                  />
                ))
              : Array(VOTELOG.parliament.consDraft).fill(<LoadingPaper />)}
          </div>
        </div>
      </div>
    </div>
  );
});

const Details = component$<{ show: boolean }>(({ show }) => {
  const data = useContext(DataContext);

  const currentCatg = useSignal(0);
  const currentPageIndex = useSignal(0);

  const catgCount = useComputed$(
    () =>
      [
        VOTELOG.senate.keepNcpo,
        VOTELOG.senate.nationStrat,
        VOTELOG.senate.consVote,
        VOTELOG.parliament.selectPm,
        VOTELOG.parliament.consDraft,
        VOTELOG.parliament.consVote,
      ][currentCatg.value]
  );

  const dataCatg = useComputed$(
    () =>
      [
        data.value?.senate?.keepNcpo ?? [],
        data.value?.senate?.nationStrat ?? [],
        data.value?.senate?.consVote ?? [],
        [],
        data.value?.parliament?.consDraft ?? [],
        data.value?.parliament?.consVote ?? [],
      ][currentCatg.value]
  );

  const catgName = useComputed$(
    () =>
      (
        [
          "ค้ำจุน คสช.",
          "ยุทธศาสตร์ชาติ",
          "ประชามติ",
          "เลือกนายกรัฐมนตรี",
          "แก้รัฐธรรมนูญ",
          "ประชามติ",
        ] as const
      )[currentCatg.value]
  );

  useTask$(({ track }) => {
    track(() => currentCatg.value);

    currentPageIndex.value = 0;
  });

  return (
    <div class={`flex flex-col gap-30 lg:flex-row ${show ? "" : "hidden"}`}>
      <div class="flex-1">
        <p class="wv-h8 mb-10 text-center font-kondolar font-black">
          มติในที่ประชุมวุฒิสภา ({VOTELOG.senate.total})
        </p>

        <input
          class="peer/1 sr-only"
          type="radio"
          name="ch2exp"
          id="ch2exp-senate-keepncpo"
          checked
          onChange$={() => {
            currentCatg.value = 0;
          }}
        />
        <label
          for="ch2exp-senate-keepncpo"
          class="mb-5 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/1:bg-black peer-checked/1:text-white"
        >
          <img
            src="./imgs/keep-ncpo.webp"
            alt=""
            width={60}
            height={60}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p class="wv-h10 mb-5 font-kondolar font-black">
              ตั้งบุคคลในโครงสร้างค้ำจุน คสช.
            </p>
            <p class="wv-b5">{VOTELOG.senate.keepNcpo} มติ</p>
          </div>
        </label>
        <input
          class="peer/2 sr-only"
          type="radio"
          name="ch2exp"
          id="ch2exp-senate-nationalstrat"
          onChange$={() => {
            currentCatg.value = 1;
          }}
        />
        <label
          for="ch2exp-senate-nationalstrat"
          class="mb-5 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/2:bg-black peer-checked/2:text-white"
        >
          <img
            src="./imgs/nation-strat.webp"
            alt=""
            width={60}
            height={60}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p class="wv-h10 mb-5 font-kondolar font-black">ยุทธศาสตร์ชาติ</p>
            <p class="wv-b5">{VOTELOG.senate.nationStrat} มติ</p>
          </div>
        </label>
        <input
          class="peer/3 sr-only"
          type="radio"
          name="ch2exp"
          id="ch2exp-senate-consvote"
          onChange$={() => {
            currentCatg.value = 2;
          }}
        />
        <label
          for="ch2exp-senate-consvote"
          class="mb-10 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/3:bg-black peer-checked/3:text-white"
        >
          <img
            src="./imgs/cons-vote.webp"
            alt=""
            width={60}
            height={60}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p class="wv-h10 mb-5 font-kondolar font-black">ประชามติแก้รัฐธรรมนูญ</p>
            <p class="wv-b5">{VOTELOG.senate.consVote} มติ</p>
          </div>
        </label>

        <p class="wv-h8 mb-10 text-center font-kondolar font-black">
          มติในที่ประชุมร่วมของรัฐสภา ({VOTELOG.parliament.total})
        </p>

        <input
          class="peer/4 sr-only"
          type="radio"
          name="ch2exp"
          id="ch2exp-parliament-selectpm"
          onChange$={() => {
            currentCatg.value = 3;
          }}
        />
        <label
          for="ch2exp-parliament-selectpm"
          class="mb-5 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/4:bg-black peer-checked/4:text-white"
        >
          <img
            src="./imgs/select-pm.webp"
            alt=""
            width={60}
            height={60}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p class="wv-h10 mb-5 font-kondolar font-black">เลือกนายกรัฐมนตรี</p>
            <p class="wv-b5">{VOTELOG.parliament.selectPm} มติ</p>
          </div>
        </label>
        <input
          class="peer/5 sr-only"
          type="radio"
          name="ch2exp"
          id="ch2exp-parliament-consdraft"
          onChange$={() => {
            currentCatg.value = 4;
          }}
        />
        <label
          for="ch2exp-parliament-consdraft"
          class="mb-5 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/5:bg-black peer-checked/5:text-white"
        >
          <img
            src="./imgs/cons-draft.webp"
            alt=""
            width={60}
            height={60}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p class="wv-h10 mb-5 font-kondolar font-black">ร่างแก้รัฐธรรมนูญ</p>
            <p class="wv-b5">{VOTELOG.parliament.consDraft} มติ</p>
          </div>
        </label>
        <input
          class="peer/6 sr-only"
          type="radio"
          name="ch2exp"
          id="ch2exp-parliament-consvote"
          onChange$={() => {
            currentCatg.value = 5;
          }}
        />
        <label
          for="ch2exp-parliament-consvote"
          class="flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/6:bg-black peer-checked/6:text-white"
        >
          <img
            src="./imgs/cons-vote.webp"
            alt=""
            width={60}
            height={60}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p class="wv-h10 mb-5 font-kondolar font-black">ประชามติแก้รัฐธรรมนูญ</p>
            <p class="wv-b5">{VOTELOG.parliament.consVote} มติ</p>
          </div>
        </label>
      </div>
      <div class="flex flex-1 flex-col gap-10">
        <div class="mb-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div class="wv-b4 font-bold">&ndash; {catgCount.value} มติ &ndash;</div>
          {catgCount.value > ENTRY_PER_PAGE && (
            <Pagination
              perPage={ENTRY_PER_PAGE}
              currentPage={currentPageIndex.value}
              total={catgCount.value}
              onChange={$((i: number) => {
                currentPageIndex.value = i;
              })}
            />
          )}
        </div>
        {catgName.value === "เลือกนายกรัฐมนตรี" ? (
          <QChoosePmContent />
        ) : (
          dataCatg.value
            .slice(
              currentPageIndex.value * ENTRY_PER_PAGE,
              currentPageIndex.value * ENTRY_PER_PAGE + ENTRY_PER_PAGE
            )
            .map((e: VotelogItemType) =>
              [270, 276, 294].includes(e.Id) ? (
                <QVotelogPeopleContent
                  key={e.Id}
                  type={catgName.value}
                  date={e.VoteDate}
                  title={e.Title}
                  vote={VOTELOG_PEOPLE_DATA[e.Id]}
                />
              ) : (
                <QVotelogContent
                  key={e.Id}
                  id={e.Id}
                  type={catgName.value}
                  date={e.VoteDate}
                  title={e.Title}
                  vote={e.PeopleVotes}
                  pass={e.IsPassed}
                />
              )
            )
        )}
      </div>
    </div>
  );
});

export const Ch2Explore = component$(() => {
  const tabIndex = useSignal(0);

  const data = useSignal<VotelogDataSchema>({
    senate: {
      keepNcpo: [],
      nationStrat: [],
      consVote: [],
    },
    parliament: {
      consDraft: [],
      consVote: [],
    },
  });

  useContextProvider(DataContext, data);

  useVisibleTask$(async () => {
    const resp = await fetch("./data/votelog.json");
    const json = await resp.json();

    data.value = json;
  });

  return (
    <div class="con mb-60">
      <a
        id="before-ch2explore"
        href="#after-ch2explore"
        class="sr-only focus:not-sr-only"
      >
        ส่วนต้นของเครื่องมือสำรวจผลการลงมติของ ส.ว. แตะเพื่อข้ามไปยังเนื้อหาส่วนถัดไป
      </a>
      <TabSelect
        id="votelog"
        secondBtnText="ดูรายชื่อมติ"
        onChange={$((index: number) => {
          tabIndex.value = index;
        })}
      />
      <div class="wv-b2 -mt-20 mb-10 flex flex-col items-center justify-center gap-10 font-bold lg:flex-row">
        <div class="nobr flex items-center justify-center gap-5">
          <span>คลิก</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 38 23"
            width="38"
            height="23"
          >
            <path fill="#60C1AF" stroke="#000" d="M.5.834h16v21H.5z" />
            <path
              fill="#000"
              d="M13.132 7.96a.5.5 0 01.042.706l-5.334 6a.5.5 0 01-.747 0l-2.667-3A.5.5 0 015.174 11l2.293 2.58 4.96-5.58a.5.5 0 01.705-.041z"
            />
            <path fill="#F92D46" stroke="#000" d="M21.5.834h16v21h-16z" />
            <path
              fill="#000"
              d="M26.446 8.18a.5.5 0 01.707 0l2.647 2.647 2.646-2.647a.5.5 0 11.708.707l-2.647 2.647 2.646 2.646a.5.5 0 11-.707.707L29.8 12.241l-2.646 2.646a.5.5 0 11-.708-.707l2.647-2.646-2.647-2.647a.5.5 0 010-.707z"
            />
          </svg>
          <span>เพื่อสำรวจแต่ละมติ</span>
        </div>
        <div class="flex items-center justify-center gap-10">
          <span>ประเภทมติ</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 43"
            width="32"
            height="43"
          >
            <path fill="#60C1AF" d="M1 1.334h30v40H1z" />
            <path
              fill="#000"
              d="M25.265 14.586a1 1 0 01.082 1.412l-10.666 12a1 1 0 01-1.495 0l-5.333-6a1 1 0 111.495-1.33l4.585 5.16 9.92-11.16a1 1 0 011.412-.082z"
            />
            <path stroke="#000" d="M.5.834h31v41H.5z" />
          </svg>
          <span>ผ่าน</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 43"
            width="32"
            height="43"
          >
            <path fill="#F92D46" d="M1 1.334h30v40H1z" />
            <path
              fill="#000"
              d="M9.893 15.027a1 1 0 011.414 0L16.6 20.32l5.293-5.293a1 1 0 011.414 1.414l-5.293 5.293 5.293 5.293a1 1 0 01-1.414 1.414L16.6 23.148l-5.293 5.293a1 1 0 01-1.414-1.414l5.293-5.293-5.293-5.293a1 1 0 010-1.414z"
            />
            <path stroke="#000" d="M.5.834h31v41H.5z" />
          </svg>
          <span>ไม่ผ่าน</span>
        </div>
      </div>
      <div class="mb-20 flex flex-col items-center justify-center gap-10 md:mb-30 lg:flex-row">
        <span class="wv-b2 nobr font-bold">ประเภทการลงคะแนนเสียง</span>
        <div class="flex flex-wrap items-center justify-center gap-10">
          <span class="wv-b4 flex items-center gap-4">
            <span class="h-[14px] w-[14px] bg-vote-เห็น" />
            เห็นด้วย
          </span>
          <span class="wv-b4 flex items-center gap-4">
            <span class="h-[14px] w-[14px] bg-vote-ไม่เห็น" />
            ไม่เห็นด้วย
          </span>
          <span class="wv-b4 flex items-center gap-4">
            <span class="h-[14px] w-[14px] bg-vote-งด" />
            งดออกเสียง
          </span>
          <span class="wv-b4 flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              width="14"
              height="14"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M1.272 0L0 1.272 5.727 7 0 12.727 1.272 14 7 8.272 12.727 14 14 12.727 8.272 7 14 1.272 12.727.001 7 5.727 1.272 0z"
                clipRule="evenodd"
              />
            </svg>
            ไม่เข้าประชุม
          </span>
          <span class="wv-b4 flex items-center gap-4">
            <span class="h-[14px] w-[14px] border bg-vote-ไม่ลง" />
            ไม่ลงคะแนน
          </span>
        </div>
      </div>
      <Overview show={!tabIndex.value} />
      <Details show={!!tabIndex.value} />
      <a
        id="after-ch2explore"
        href="#before-ch2explore"
        class="sr-only focus:not-sr-only"
      >
        ส่วนท้ายของเครื่องมือสำรวจผลการลงมติของ ส.ว. แตะเพื่อย้อนกลับไปยังเนื้อหาก่อนหน้า
      </a>
    </div>
  );
});
