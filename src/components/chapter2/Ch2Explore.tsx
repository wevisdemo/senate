import { component$, $, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import VOTELOG from "~/data/votelog";

import TabSelect from "~/components/TabSelect";
import QVotelog from "../react/popovers/QVotelog";
import QChoosePm from "../react/popovers/QChoosePm";

import type { VotelogDataSchema } from "~/types/votelog";

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

const Ch2Explore = component$(() => {
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

  useVisibleTask$(async () => {
    const resp = await fetch("./data/votelog.json");
    const json = await resp.json();

    data.value = json;
  });

  const changeTabIndex = $((index: number) => {
    tabIndex.value = index;
  });

  return (
    <div class="container mb-60">
      <TabSelect id="votelog" secondBtnText="ดูรายชื่อมติ" onChange={changeTabIndex}>
        <span class="wv-b3 nobr flex items-center gap-4">
          คลิก
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
          เพื่อสำรวจแต่ละมติ
        </span>
      </TabSelect>

      <p class="wv-h4 my-30 text-center font-kondolar font-black">
        มติในที่ประชุมวุฒิสภา ({VOTELOG.senate.total})
      </p>

      <div class="mb-30 flex flex-col gap-20 md:flex-row">
        <div class="flex-1">
          <div class="mb-20 flex flex-col items-center gap-20 md:flex-row md:items-start">
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
              {data.value.senate.keepNcpo.length
                ? data.value.senate.keepNcpo.map((d) => (
                    <QVotelog
                      key={d.Id}
                      id={d.Id}
                      type="ค้ำจุน คสช."
                      pass={d.IsPassed}
                      date={d.VoteDate}
                      title={d.Title}
                      vote={d.PeopleVotes}
                    />
                  ))
                : Array(VOTELOG.senate.keepNcpo).fill(<LoadingPaper />)}
            </div>
          </div>
          <div class="mb-20 flex flex-col items-center gap-20 md:flex-row md:items-start">
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
        <div class="flex flex-1 flex-col items-center gap-20 md:flex-row md:items-start">
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

      <div class="flex flex-col gap-20 md:flex-row">
        <div class="flex-1">
          <div class="mb-20 flex flex-col items-center gap-20 md:flex-row md:items-start">
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
          <div class="flex flex-col items-center gap-20 md:flex-row md:items-start">
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
        <div class="flex flex-1 flex-col items-center gap-20 md:flex-row md:items-start">
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

export default Ch2Explore;
