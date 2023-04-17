import type { Signal } from "@builder.io/qwik";
import {
  $,
  component$,
  useComputed$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

import VOTELOG from "~/data/votelog";

import TabSelect from "~/components/TabSelect";
import Pagination from "../Pagination";
import QChoosePm from "../react/popovers/QChoosePm";
import QVotelog from "../react/popovers/QVotelog";

import type { VotelogDataSchema, VotelogItemType } from "~/types/votelog";

const ENTRY_PER_PAGE = 5;

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

const Overview = component$(({ data }: { data: Signal<VotelogDataSchema> }) => (
  <>
    <p class="wv-h4 mb-30 text-center font-kondolar font-black">
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
  </>
));

const VotelogBox = component$(
  ({ data, type }: { data: VotelogItemType; type: string }) => {
    const totalVote =
      (data.PeopleVotes?.mp?.[5] ?? 0) + (data.PeopleVotes?.senate?.[5] ?? 0);
    const totalPassVote =
      (data.PeopleVotes?.mp?.[0] ?? 0) + (data.PeopleVotes?.senate?.[0] ?? 0);
    const passRate = Math.round((totalPassVote / (totalVote || 1)) * 1e4) / 1e2;

    return (
      <div class="border bg-white">
        <div class={"h-10 " + (data.IsPassed ? "bg-vote-เห็น" : "bg-vote-ไม่เห็น")} />
        <div class="px-15 py-10">
          <div class="mb-10 flex items-center font-bold">
            <span class="mr-auto">{data.VoteDate}</span>
            <span class="flex font-bold">{type}</span>
          </div>
          <hr class="mb-10 border-dashed" />
          <p class="wv-h9 mb-10 font-kondolar">{data.Title}</p>
          <div class="mb-10 flex items-center justify-between font-kondolar">
            <p class="wv-h9 mr-auto font-bold">{passRate}% เห็นด้วย</p>
            <div
              class={
                "-top-[2px] mr-4 h-[13px] w-[13px] rounded-full " +
                (data.IsPassed ? "bg-vote-เห็น" : "bg-vote-ไม่เห็น")
              }
            />
            <span class="wv-h10">{!data.IsPassed && "ไม่"}ผ่าน</span>
          </div>
          {(data.PeopleVotes?.mp || data.PeopleVotes?.senate) && (
            <div class="font-bold md:hidden">ผลการลงคะแนนเสียง</div>
          )}
          {data.PeopleVotes?.senate && data.PeopleVotes?.mp && (
            <div class="flex items-center justify-end gap-4 text-[10px]">
              <div class="-top-[1px] h-5 w-5 bg-vote-เห็น" />
              <span>{data.PeopleVotes.senate[0]}</span>
              <div class="-top-[1px] h-5 w-5 bg-vote-ไม่เห็น" />
              <span>{data.PeopleVotes.senate[1]}</span>
              <div class="-top-[1px] h-5 w-5 bg-vote-งด" />
              <span>{data.PeopleVotes.senate[2]}</span>
              <div class="-top-[1px] h-5 w-5 bg-vote-ไม่ลง" />
              <span>{data.PeopleVotes.senate[3]}</span>
              <div class="-top-[1px] h-5 w-5 bg-vote-ไม่เข้า" />
              <span>{data.PeopleVotes.senate[4]}</span>
            </div>
          )}
          {(data.PeopleVotes?.mp || data.PeopleVotes?.senate) && (
            <div class="-mt-[2px] flex">
              <div class="hidden font-bold md:block">ผลการลงคะแนนเสียง</div>
              <div class="flex-1 md:ml-auto md:flex-initial">
                {data.PeopleVotes?.senate && (
                  <div class="flex items-center gap-20">
                    <span class="font-bold">ส.ว.</span>
                    <div
                      class="flex w-full md:w-[177px]"
                      style={{ "--max": data.PeopleVotes.senate[5] }}
                    >
                      <div
                        class="chart-series bg-vote-เห็น"
                        style={{ "--val": data.PeopleVotes.senate[0] }}
                      />
                      <div
                        class="chart-series bg-vote-ไม่เห็น"
                        style={{ "--val": data.PeopleVotes.senate[1] }}
                      />
                      <div
                        class="chart-series bg-vote-งด"
                        style={{ "--val": data.PeopleVotes.senate[2] }}
                      />
                      <div
                        class="chart-series bg-vote-ไม่ลง"
                        style={{ "--val": data.PeopleVotes.senate[3] }}
                      />
                      <div
                        class="chart-series bg-vote-ไม่เข้า"
                        style={{ "--val": data.PeopleVotes.senate[4] }}
                      />
                    </div>
                  </div>
                )}
                {data.PeopleVotes?.mp && (
                  <div class="flex items-center gap-20">
                    <span class="font-bold">ส.ส.</span>
                    <div
                      class="flex w-full md:w-[177px]"
                      style={{ "--max": data.PeopleVotes.mp[5] }}
                    >
                      <div
                        class="chart-series bg-vote-เห็น"
                        style={{ "--val": data.PeopleVotes.mp[0] }}
                      />
                      <div
                        class="chart-series bg-vote-ไม่เห็น"
                        style={{ "--val": data.PeopleVotes.mp[1] }}
                      />
                      <div
                        class="chart-series bg-vote-งด"
                        style={{ "--val": data.PeopleVotes.mp[2] }}
                      />
                      <div
                        class="chart-series bg-vote-ไม่ลง"
                        style={{ "--val": data.PeopleVotes.mp[3] }}
                      />
                      <div
                        class="chart-series bg-vote-ไม่เข้า"
                        style={{ "--val": data.PeopleVotes.mp[4] }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {(data.PeopleVotes?.mp || data.PeopleVotes?.senate) && (
            <div class="mb-10 flex items-center justify-end gap-4 text-[10px]">
              <div class="-top-[1px] h-5 w-5 bg-vote-เห็น" />
              <span>
                {data.PeopleVotes?.mp
                  ? data.PeopleVotes.mp[0]
                  : data.PeopleVotes?.senate && data.PeopleVotes.senate[0]}
              </span>
              <div class="-top-[1px] h-5 w-5 bg-vote-ไม่เห็น" />
              <span>
                {data.PeopleVotes?.mp
                  ? data.PeopleVotes.mp[1]
                  : data.PeopleVotes?.senate && data.PeopleVotes.senate[1]}
              </span>
              <div class="-top-[1px] h-5 w-5 bg-vote-งด" />
              <span>
                {data.PeopleVotes?.mp
                  ? data.PeopleVotes.mp[2]
                  : data.PeopleVotes?.senate && data.PeopleVotes.senate[2]}
              </span>
              <div class="-top-[1px] h-5 w-5 bg-vote-ไม่ลง" />
              <span>
                {data.PeopleVotes?.mp
                  ? data.PeopleVotes.mp[3]
                  : data.PeopleVotes?.senate && data.PeopleVotes.senate[3]}
              </span>
              <div class="-top-[1px] h-5 w-5 bg-vote-ไม่เข้า" />
              <span>
                {data.PeopleVotes?.mp
                  ? data.PeopleVotes.mp[4]
                  : data.PeopleVotes?.senate && data.PeopleVotes.senate[4]}
              </span>
            </div>
          )}
          <hr class="mb-10 border-dashed" />
          <div class="text-center">
            <a
              class="wv-b3 inline-flex items-center gap-[4px] font-bold text-black"
              href={"https://theyworkforus.wevis.info/votelog/" + data.Id}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <span>ดูรายละเอียด</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 21"
                width="20"
                height="21"
              >
                <path fill="#000" d="M8.334 6.333l5 4.167-5 4.167V6.333z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
);

const ChooseMpVotelogBox = component$(() => (
  <div class="border bg-white">
    <div class="h-10 bg-black" />
    <div class="px-15 py-10">
      <div class="mb-10 flex items-center font-bold">
        <span class="mr-auto">24.6.2021</span>
        <span class="flex font-bold">เลือกนายกรัฐมนตรี</span>
      </div>
      <hr class="mb-10 border-dashed" />
      <p class="wv-h9 mb-10 font-kondolar">การลงมติเลือกนายกรัฐมนตรีไทย พ.ศ. 2562</p>
      <p class="wv-h9 mb-10 mr-auto font-kondolar font-bold">
        66.93% เลือกประยุทธ์ จันทร์โอชา
      </p>
      <div class="wv-b5 mb-10 grid grid-cols-choosepm gap-x-[8px] gap-y-4">
        <div class="wv-b4 mb-4 font-bold">ผลการลงคะแนนเสียง</div>
        <div class="wv-b4 font-bold">ส.ว.</div>
        <div class="wv-b4 font-bold">ส.ส.</div>
        <div class="flex items-center gap-[8px] font-bold">
          <img
            src="./imgs/prayuth.webp"
            alt=""
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
          <span>ประยุทธ์ จันทร์โอชา</span>
        </div>
        <div class="flex gap-4">
          <div class="h-20 w-60 bg-พลังประชารัฐ" />
          <span>249</span>
        </div>
        <div class="flex gap-4">
          <div class="h-20 w-60 bg-พลังประชารัฐ" />
          <span>251</span>
        </div>
        <div class="flex items-center gap-[8px] font-bold">
          <img
            src="./imgs/thanathorn.webp"
            alt=""
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
          <span>ธนาธร จึงรุ่งเรืองกิจ</span>
        </div>
        <div>0</div>
        <div class="flex gap-4">
          <div class="h-20 w-[58.32px] bg-ก้าวไกล" />
          <span>244</span>
        </div>
        <div class="flex items-center gap-[8px] font-bold">
          <div class="h-[12px] w-[12px] bg-vote-งด" />
          <span>งดออกเสียง</span>
        </div>
        <div class="flex gap-4">
          <div class="h-20 w-[0.24px] bg-vote-งด" />
          <span>1</span>
        </div>
        <div class="flex gap-4">
          <div class="h-20 w-[0.47px] bg-vote-งด" />
          <span>2</span>
        </div>
      </div>
      <hr class="mb-10 border-dashed" />
      <div class="text-center">
        <a
          class="wv-b3 inline-flex items-center gap-[4px] font-bold text-black"
          href="https://theyworkforus.wevis.info/votelog/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span>ดูรายละเอียด</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 21"
            width="20"
            height="21"
          >
            <path fill="#000" d="M8.334 6.333l5 4.167-5 4.167V6.333z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
));

const Details = component$(({ data }: { data: Signal<VotelogDataSchema> }) => {
  const currentCatg = useSignal(0);
  const currentPageIndex = useSignal(0);

  const setPageIndex = $((i: number) => {
    currentPageIndex.value = i;
  });

  const catgCount = useComputed$(() => {
    return [
      VOTELOG.senate.keepNcpo,
      VOTELOG.senate.nationStrat,
      VOTELOG.senate.consVote,
      VOTELOG.parliament.selectPm,
      VOTELOG.parliament.consDraft,
      VOTELOG.parliament.consVote,
    ][currentCatg.value];
  });

  const dataCatg = useComputed$(() => {
    return [
      data.value?.senate?.keepNcpo ?? [],
      data.value?.senate?.nationStrat ?? [],
      data.value?.senate?.consVote ?? [],
      [],
      data.value?.parliament?.consDraft ?? [],
      data.value?.parliament?.consVote ?? [],
    ][currentCatg.value];
  });

  const catgName = useComputed$(() => {
    return (
      [
        "ค้ำจุน คสช.",
        "ยุทธศาสตร์ชาติ",
        "ประชามติ",
        "เลือกนายกรัฐมนตรี",
        "แก้รัฐธรรมนูญ",
        "ประชามติ",
      ] as const
    )[currentCatg.value];
  });

  useTask$(({ track }) => {
    track(() => currentCatg.value);

    currentPageIndex.value = 0;
  });

  return (
    <div class="flex flex-col gap-30 md:flex-row">
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
        <div class="mb-10 flex flex-col items-center justify-between gap-10 md:flex-row">
          <div class="wv-b4 font-bold">&ndash; {catgCount.value} มติ &ndash;</div>
          {catgCount.value > ENTRY_PER_PAGE && (
            <Pagination
              id="ch2"
              perPage={ENTRY_PER_PAGE}
              currentPage={currentPageIndex.value}
              total={catgCount.value}
              onChange={setPageIndex}
            />
          )}
        </div>
        {catgName.value === "เลือกนายกรัฐมนตรี" ? (
          <ChooseMpVotelogBox />
        ) : (
          dataCatg.value
            .slice(
              currentPageIndex.value * ENTRY_PER_PAGE,
              currentPageIndex.value * ENTRY_PER_PAGE + ENTRY_PER_PAGE
            )
            .map((e: VotelogItemType) => (
              <VotelogBox key={e.Id} data={e} type={catgName.value} />
            ))
        )}
      </div>
    </div>
  );
});

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
      {tabIndex.value === 0 ? <Overview data={data} /> : <Details data={data} />}
    </div>
  );
});

export default Ch2Explore;
