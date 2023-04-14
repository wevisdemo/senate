/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Popover, Transition } from "@headlessui/react";

import type { PeopleVotesType } from "~/types/votelog";

interface QConstitutionPopoverProps {
  id: number;
  title: string;
  date: string;
  type: string;
  pass: number;
  vote?: PeopleVotesType;
  right?: boolean;
}

export default qwikify$(
  ({ pass, date, type, title, vote, id, right }: QConstitutionPopoverProps) => {
    const totalVote = (vote?.mp?.[5] ?? 0) + (vote?.senate?.[5] ?? 0);
    const totalPassVote = (vote?.mp?.[0] ?? 0) + (vote?.senate?.[0] ?? 0);
    const passRate = Math.round((totalPassVote / (totalVote || 1)) * 1e4) / 1e2;

    return (
      <Popover className="relative flex">
        <Popover.Button className="outline-0 ring-0 ring-black transition-all hover:scale-110 hover:bg-black hover:ring-2">
          {pass ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 52 69"
              width="52"
              height="69"
            >
              <path fill="#60C1AF" d="M1 1h50v66.667H1z" />
              <path
                fill="#000"
                d="M41.44 23.086c.689.612.75 1.665.139 2.353l-17.778 20a1.667 1.667 0 01-2.491 0l-8.889-10a1.667 1.667 0 012.491-2.214l7.644 8.598 16.532-18.598a1.667 1.667 0 012.353-.139z"
              />
              <path stroke="#000" d="M.5.5h51v67.667H.5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 52 69"
              width="52"
              height="69"
            >
              <path fill="#F92D46" d="M51 1H1v66.667h50V1z" />
              <path
                fill="#000"
                d="M15.822 23.821c.65-.65 1.706-.65 2.357 0L27 32.643l8.822-8.822a1.667 1.667 0 112.357 2.357L29.357 35l8.822 8.821a1.667 1.667 0 01-2.357 2.357L27 37.357l-8.821 8.821a1.667 1.667 0 11-2.357-2.357L24.643 35l-8.821-8.822a1.667 1.667 0 010-2.357z"
              />
              <path stroke="#000" d="M.5.5h51v67.667H.5z" />
            </svg>
          )}
        </Popover.Button>

        <Transition
          className="fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-all md:absolute md:top-0 md:translate-x-0 md:translate-y-0"
          enter={
            right
              ? "md:right-0 md:left-auto md:origin-top-right"
              : "md:left-0 md:origin-top-left"
          }
          enterFrom="opacity-0"
          enterTo="md:translate-y-[76.67px]"
          entered={
            "md:translate-y-[76.67px] " +
            (right ? "md:right-0 md:left-auto" : "md:left-0")
          }
          leave={
            right
              ? "md:right-0 md:left-auto md:origin-top-right"
              : "md:left-0 md:origin-top-left"
          }
          leaveTo="opacity-0"
        >
          <Popover.Panel className="w-[300px] border bg-white md:w-[465px]">
            <div className={"h-10 " + (pass ? "bg-vote-เห็น" : "bg-vote-ไม่เห็น")} />
            <div className="px-15 py-10">
              <div className="mb-10 flex items-center font-bold">
                <span className="mr-auto">{date}</span>
                <span className="flex font-bold">{type}</span>
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
              </div>
              <hr className="mb-10 border-dashed" />
              <p className="wv-h9 mb-10 font-kondolar">{title}</p>
              <div className="mb-10 flex items-center justify-between font-kondolar">
                <p className="wv-h9 mr-auto font-bold">{passRate}% เห็นด้วย</p>
                <div
                  className={
                    "-top-[2px] mr-4 h-[13px] w-[13px] rounded-full " +
                    (pass ? "bg-vote-เห็น" : "bg-vote-ไม่เห็น")
                  }
                ></div>
                <span className="wv-h10">{!pass && "ไม่"}ผ่าน</span>
              </div>
              {(vote?.mp || vote?.senate) && (
                <div className="font-bold md:hidden">ผลการลงคะแนนเสียง</div>
              )}
              {vote?.senate && vote?.mp && (
                <div className="flex items-center justify-end gap-4 text-[10px]">
                  <div className="-top-[1px] h-5 w-5 bg-vote-เห็น" />
                  <span>{vote.senate[0]}</span>
                  <div className="-top-[1px] h-5 w-5 bg-vote-ไม่เห็น" />
                  <span>{vote.senate[1]}</span>
                  <div className="-top-[1px] h-5 w-5 bg-vote-งด" />
                  <span>{vote.senate[2]}</span>
                  <div className="-top-[1px] h-5 w-5 bg-vote-ไม่ลง" />
                  <span>{vote.senate[3]}</span>
                  <div className="-top-[1px] h-5 w-5 bg-vote-ไม่เข้า" />
                  <span>{vote.senate[4]}</span>
                </div>
              )}
              {(vote?.mp || vote?.senate) && (
                <div className="-mt-[2px] flex">
                  <div className="hidden font-bold md:block">ผลการลงคะแนนเสียง</div>
                  <div className="flex-1 md:ml-auto md:flex-initial">
                    {vote?.senate && (
                      <div className="flex items-center gap-20">
                        <span className="font-bold">ส.ว.</span>
                        <div
                          className="flex w-full md:w-[177px]"
                          style={{ "--max": vote.senate[5] } as React.CSSProperties}
                        >
                          <div
                            className="chart-series bg-vote-เห็น"
                            style={{ "--val": vote.senate[0] } as React.CSSProperties}
                          />
                          <div
                            className="chart-series bg-vote-ไม่เห็น"
                            style={{ "--val": vote.senate[1] } as React.CSSProperties}
                          />
                          <div
                            className="chart-series bg-vote-งด"
                            style={{ "--val": vote.senate[2] } as React.CSSProperties}
                          />
                          <div
                            className="chart-series bg-vote-ไม่ลง"
                            style={{ "--val": vote.senate[3] } as React.CSSProperties}
                          />
                          <div
                            className="chart-series bg-vote-ไม่เข้า"
                            style={{ "--val": vote.senate[4] } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    )}
                    {vote?.mp && (
                      <div className="flex items-center gap-20">
                        <span className="font-bold">ส.ส.</span>
                        <div
                          className="flex w-full md:w-[177px]"
                          style={{ "--max": vote.mp[5] } as React.CSSProperties}
                        >
                          <div
                            className="chart-series bg-vote-เห็น"
                            style={{ "--val": vote.mp[0] } as React.CSSProperties}
                          />
                          <div
                            className="chart-series bg-vote-ไม่เห็น"
                            style={{ "--val": vote.mp[1] } as React.CSSProperties}
                          />
                          <div
                            className="chart-series bg-vote-งด"
                            style={{ "--val": vote.mp[2] } as React.CSSProperties}
                          />
                          <div
                            className="chart-series bg-vote-ไม่ลง"
                            style={{ "--val": vote.mp[3] } as React.CSSProperties}
                          />
                          <div
                            className="chart-series bg-vote-ไม่เข้า"
                            style={{ "--val": vote.mp[4] } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {(vote?.mp || vote?.senate) && (
                <div className="mb-10 flex items-center justify-end gap-4 text-[10px]">
                  <div className="-top-[1px] h-5 w-5 bg-vote-เห็น" />
                  <span>{vote?.mp ? vote.mp[0] : vote?.senate && vote.senate[0]}</span>
                  <div className="-top-[1px] h-5 w-5 bg-vote-ไม่เห็น" />
                  <span>{vote?.mp ? vote.mp[1] : vote?.senate && vote.senate[1]}</span>
                  <div className="-top-[1px] h-5 w-5 bg-vote-งด" />
                  <span>{vote?.mp ? vote.mp[2] : vote?.senate && vote.senate[2]}</span>
                  <div className="-top-[1px] h-5 w-5 bg-vote-ไม่ลง" />
                  <span>{vote?.mp ? vote.mp[3] : vote?.senate && vote.senate[3]}</span>
                  <div className="-top-[1px] h-5 w-5 bg-vote-ไม่เข้า" />
                  <span>{vote?.mp ? vote.mp[4] : vote?.senate && vote.senate[4]}</span>
                </div>
              )}
              <hr className="mb-10 border-dashed" />
              <div className="text-center">
                <a
                  className="wv-b3 inline-flex items-center gap-[4px] font-bold text-black"
                  href={"https://theyworkforus.wevis.info/votelog/" + id}
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
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  },
  {
    eagerness: "visible",
  }
);
