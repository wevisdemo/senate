/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Popover, Transition } from "@headlessui/react";

export default qwikify$(
  () => (
    <Popover className="relative flex">
      <Popover.Button
        className="outline-0 ring-0 ring-black transition-all hover:scale-110 hover:bg-black hover:ring-2"
        aria-label="การลงมติเลือกนายกรัฐมนตรีไทย พ.ศ. 2562"
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
        className="fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-all lg:absolute lg:top-0 lg:left-0 lg:origin-top-left lg:translate-x-0 lg:translate-y-0"
        enterFrom="opacity-0"
        enterTo="lg:translate-y-[76.67px]"
        entered="lg:translate-y-[76.67px]"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="w-[300px] border bg-white lg:w-[465px]">
          <div className="h-10 bg-black" />
          <div className="px-15 py-10">
            <div className="mb-10 flex items-center font-bold">
              <span className="mr-auto">24.6.2021</span>
              <span className="flex font-bold">เลือกนายกรัฐมนตรี</span>
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
            <p className="wv-h9 mb-10 font-kondolar">
              การลงมติเลือกนายกรัฐมนตรีไทย พ.ศ. 2562
            </p>
            <p className="wv-h9 mb-10 mr-auto font-kondolar font-bold">
              66.93% เลือกประยุทธ์ จันทร์โอชา
            </p>
            <div className="wv-b5 mb-10 grid grid-cols-choosepm gap-4 lg:gap-x-[8px]">
              <div className="wv-b4 mb-4 -mr-[2px] font-bold lg:mr-0">
                ผลการลงคะแนนเสียง
              </div>
              <div className="wv-b4 font-bold">ส.ว.</div>
              <div className="wv-b4 font-bold">ส.ส.</div>
              <div className="-mr-[2px] flex items-center gap-[8px] font-bold lg:mr-0">
                <img
                  src="./imgs/prayuth.webp"
                  alt=""
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <span className="nobr">ประยุทธ์</span>{" "}
                  <span className="nobr">จันทร์โอชา</span>
                </span>
              </div>
              <div className="flex gap-4">
                <div className="h-20 w-50 bg-black lg:w-60" />
                <span>249</span>
              </div>
              <div className="flex gap-4">
                <div className="h-20 w-50 bg-black lg:w-60" />
                <span>251</span>
              </div>
              <div className="-mr-[2px] flex items-center gap-[8px] font-bold lg:mr-0">
                <img
                  src="./imgs/thanathorn.webp"
                  alt=""
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <span className="nobr">ธนาธร</span>{" "}
                  <span className="nobr">จึงรุ่งเรืองกิจ</span>
                </span>
              </div>
              <div>0</div>
              <div className="flex gap-4">
                <div className="h-20 w-[48.61px] bg-black lg:w-[58.32px]" />
                <span>244</span>
              </div>
              <div className="-mr-[2px] flex items-center gap-[8px] font-bold lg:mr-0">
                <div className="h-[12px] w-[12px] bg-vote-งด" />
                <span>งดออกเสียง</span>
              </div>
              <div className="flex gap-4">
                <div className="h-20 w-[0.2px] bg-vote-งด lg:w-[0.24px]" />
                <span>1</span>
              </div>
              <div className="flex gap-4">
                <div className="h-20 w-[0.4px] bg-vote-งด lg:w-[0.47px]" />
                <span>2</span>
              </div>
            </div>
            <hr className="mb-10 border-dashed" />
            <div className="text-center">
              <a
                className="wv-b3 inline-flex items-center gap-[4px] font-bold text-black"
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
        </Popover.Panel>
      </Transition>
    </Popover>
  ),
  {
    eagerness: "visible",
  }
);
