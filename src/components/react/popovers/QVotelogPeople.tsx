/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Popover, Transition } from "@headlessui/react";

export interface PeopleVotelog {
  name: string;
  vote: [number, number, number];
}

interface QVotelogPeoplePopoverProps {
  title: string;
  date: string;
  type: string;
  vote: PeopleVotelog[];
}

const VotelogPeopleContent = ({
  title,
  date,
  type,
  vote,
  close,
}: QVotelogPeoplePopoverProps & { close?: boolean }) => (
  <>
    <div className="h-10 bg-black" />
    <div className="px-15 py-10">
      <div className="mb-10 flex items-center font-bold">
        <span className="mr-auto">{date}</span>
        <span className="flex font-bold">{type}</span>
        {close && (
          <Popover.Button className="ml-10" type="button" aria-label="ปิด">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              width={30}
              height={30}
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M22.227 7.773a.938.938 0 010 1.328L9.1 22.226a.939.939 0 01-1.327-1.328L20.899 7.773a.936.936 0 011.328 0z"
                clipRule="evenodd"
              />
              <path
                fill="#000"
                fillRule="evenodd"
                d="M7.774 7.773a.938.938 0 000 1.328l13.125 13.125a.939.939 0 001.328-1.328L9.1 7.773a.937.937 0 00-1.327 0z"
                clipRule="evenodd"
              />
            </svg>
          </Popover.Button>
        )}
      </div>
      <hr className="mb-10 border-dashed" />
      <p className="wv-h9 mb-10 font-kondolar">{title}</p>
      <div className="font-bold">ผลการลงคะแนนเสียงบุคคลที่ถูกเสนอชื่อให้ดำรงตำแหน่ง</div>
      {vote.map((v) => (
        <div key={v.name} className="senate-custombar-grid mb-[2px] lg:mb-0">
          <div className="senate-custombar-grid-name flex items-center gap-5 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <rect width="15" height="15" x=".5" y=".5" fill="#000" rx="7.5" />
              {v.vote[0] > 125 ? (
                <path
                  fill="#fff"
                  d="M11.61 5.189a.417.417 0 01.035.588l-4.445 5a.417.417 0 01-.623 0l-2.222-2.5a.417.417 0 01.623-.554l1.91 2.15 4.134-4.65a.417.417 0 01.588-.034z"
                />
              ) : (
                <path
                  fill="#fff"
                  d="M5.206 5.205a.417.417 0 01.589 0L8 7.411l2.206-2.206a.417.417 0 01.589.59L8.589 8l2.206 2.205a.417.417 0 11-.59.59L8 8.588l-2.205 2.205a.417.417 0 11-.59-.589L7.412 8 5.206 5.795a.417.417 0 010-.59z"
                />
              )}
              <rect width="15" height="15" x=".5" y=".5" stroke="#000" rx="7.5" />
            </svg>
            {v.name}
          </div>
          <div
            className="senate-custombar-grid-bar mt-[2px] flex w-full justify-self-end lg:mt-0 lg:w-[177px]"
            style={
              {
                "--max": v.vote[0] + v.vote[1] + v.vote[2],
              } as React.CSSProperties
            }
          >
            <div
              className="chart-series bg-vote-เห็น"
              style={{ "--val": v.vote[0] } as React.CSSProperties}
            />
            <div
              className="chart-series bg-vote-ไม่เห็น"
              style={{ "--val": v.vote[1] } as React.CSSProperties}
            />
            <div
              className="chart-series bg-vote-งด"
              style={{ "--val": v.vote[2] } as React.CSSProperties}
            />
          </div>
          <div className="senate-custombar-grid-count mb-[2px] flex items-center justify-end gap-4 self-end text-[10px] lg:mb-0">
            <div className="-top-[1px] h-5 w-5 bg-vote-เห็น" />
            <span>{v.vote[0]}</span>
            <div className="-top-[1px] h-5 w-5 bg-vote-ไม่เห็น" />
            <span>{v.vote[1]}</span>
            <div className="-top-[1px] h-5 w-5 bg-vote-งด" />
            <span>{v.vote[2]}</span>
          </div>
        </div>
      ))}
      <p className="wv-b6 mt-10">
        <span className="font-bold">หมายเหตุ:</span>{" "}
        ผู้ที่ดำรงตำแหน่งต้องได้รับความเห็นชอบด้วยคะแนนเสียงกึ่งหนึ่งจาก ส.ว. คือ 125
        คะแนนขึ้นไป
      </p>
    </div>
  </>
);

export const QVotelogPeopleContent = qwikify$<QVotelogPeoplePopoverProps>(
  ({ title, date, type, vote }) => (
    <div className="border bg-white">
      <VotelogPeopleContent title={title} date={date} type={type} vote={vote} />
    </div>
  )
);

export const QVotelogPeople = qwikify$<QVotelogPeoplePopoverProps>(
  ({ title, date, type, vote }) => (
    <Popover className="relative flex">
      <Popover.Button
        className="outline-0 ring-0 ring-black transition-all hover:scale-110 hover:bg-black hover:ring-2"
        aria-label={title}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 52 69"
          width="52"
          height="69"
        >
          <path fill="#000" d="M.5.5h51v67.667H.5z" />
          <path fill="#000" d="M1 1h50v66.667H1z" />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M30.647 33.5c-.987 0-1.787-.8-1.787-1.785 0-.983.8-1.782 1.787-1.782.987 0 1.787.8 1.787 1.782 0 .985-.8 1.785-1.787 1.785zm-9.502 0c-.987 0-1.787-.8-1.787-1.785 0-.983.8-1.782 1.787-1.782.986 0 1.786.8 1.786 1.782 0 .985-.8 1.785-1.787 1.785zm20.68-1.339c-1.098-8.74-7.813-15.494-15.93-15.494-8.115 0-14.83 6.755-15.928 15.494H7.896v5.014h2.07c1.099 8.74 7.814 15.492 15.93 15.492s14.83-6.753 15.929-15.492h2.07v-5.014h-2.07z"
            clipRule="evenodd"
          />
          <path stroke="#000" d="M.5.5h51v67.667H.5z" />
        </svg>
      </Popover.Button>

      <Transition
        className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-all lg:absolute lg:top-0 lg:translate-x-0 lg:translate-y-0"
        enter="lg:left-0 lg:origin-top-left"
        enterFrom="opacity-0"
        enterTo="lg:translate-y-[76.67px]"
        entered="lg:translate-y-[76.67px] lg:left-0"
        leave="lg:left-0 lg:origin-top-left"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="w-[300px] border bg-white lg:w-[465px]">
          <VotelogPeopleContent title={title} date={date} type={type} vote={vote} close />
        </Popover.Panel>
      </Transition>
    </Popover>
  ),
  {
    eagerness: "visible",
  }
);
