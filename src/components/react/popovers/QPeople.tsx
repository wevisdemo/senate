/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Popover, Transition } from "@headlessui/react";

import type { PeopleListSchema } from "~/types/people";

interface QPeoplePopoverProps {
  data: PeopleListSchema;
  imgBase: string;
}

export default qwikify$(
  ({ data, imgBase }: QPeoplePopoverProps) => {
    return (
      <Popover className="relative flex">
        <Popover.Button
          className={`outline-0 ring-0 transition-transform hover:z-10 hover:scale-150 ${
            data.SenatorMethod === "เลือกกันเอง"
              ? "text-senate-pink"
              : data.SenatorMethod === "เลือกโดย คสช."
              ? "text-senate-blue"
              : "text-senate-green"
          }`}
          aria-label={data.Name}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 22"
            width="22"
            height="22"
          >
            {data.NcpoType ? (
              <g>
                <path
                  fill="currentColor"
                  opacity={data.IsActive ? 1 : 0.5}
                  d="M11 1.456l2.74 2.93 4.009-.135-.136 4.01L20.544 11l-2.93 2.74.135 4.009-4.01-.136L11 20.544l-2.74-2.93-4.009.135.136-4.01L1.457 11l2.93-2.74-.136-4.009 4.01.136L11 1.456z"
                />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M11 0l3.157 3.378 4.621-.156-.156 4.62L22 11l-3.378 3.157.156 4.621-4.62-.156L11 22l-3.157-3.378-4.621.156.156-4.62L0 11l3.378-3.157-.156-4.621 4.62.156L11 0zM8.26 4.387L4.252 4.25l.136 4.01L1.456 11l2.93 2.74-.135 4.009 4.01-.136L11 20.544l2.74-2.93 4.009.135-.136-4.01L20.544 11l-2.93-2.74.135-4.009-4.01.136L11 1.456l-2.74 2.93z"
                  clipRule="evenodd"
                />
              </g>
            ) : (
              <g>
                <path
                  fill="currentColor"
                  opacity={data.IsActive ? 1 : 0.5}
                  d="M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10z"
                />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M11 20a9 9 0 100-18 9 9 0 000 18zm0 1c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z"
                  clipRule="evenodd"
                />
              </g>
            )}
            {!data.IsActive && (
              <path
                fill="#000"
                d="M15.667 7.182l-.849-.849L11 10.151 7.182 6.333l-.849.849L10.151 11l-3.818 3.818.849.849L11 11.848l3.818 3.819.849-.849L11.848 11l3.819-3.818z"
              />
            )}
          </svg>
        </Popover.Button>

        <Transition
          className="fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transition-all md:absolute md:top-0 md:translate-x-0 md:translate-y-0"
          enter="md:right-0 md:left-auto md:origin-top-right"
          enterFrom="opacity-0"
          enterTo="md:translate-y-[26px]"
          entered="md:translate-y-[26px] md:right-0 md:left-auto"
          leave="md:right-0 md:left-auto md:origin-top-right"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="w-[300px] overflow-hidden rounded-10 border bg-white md:w-[320px]">
            <div
              className={`h-15 ${
                data.SenatorMethod === "เลือกกันเอง"
                  ? "bg-senate-pink"
                  : data.SenatorMethod === "เลือกโดย คสช."
                  ? "bg-senate-blue"
                  : "bg-senate-green"
              }`}
            />
            <div className="wv-b5 border-t border-dashed p-15 font-bold">
              <div className="mb-10 flex items-start gap-10">
                {data.NcpoType ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 64 64"
                    width="64"
                    height="64"
                  >
                    <image
                      width="64"
                      height="64"
                      href={imgBase + data.Images}
                      clipPath="url(#imageStar)"
                    />
                    <path
                      className={
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
                  <img
                    className={`rounded-full border-[4px] ${
                      data.SenatorMethod === "เลือกกันเอง"
                        ? "border-senate-pink bg-senate-pink"
                        : data.SenatorMethod === "เลือกโดย คสช."
                        ? "border-senate-blue bg-senate-blue"
                        : "border-senate-green bg-senate-green"
                    }`}
                    src={imgBase + data.Images}
                    alt=""
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span className="wv-h8 font-kondolar">{data.Name}</span>
                <Popover.Button className="ml-auto" type="button" aria-label="ปิด">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 30"
                    width="30"
                    height="30"
                  >
                    <path
                      fill="#000"
                      fillRule="evenodd"
                      d="M22.227 7.774a.938.938 0 010 1.327L9.1 22.226A.938.938 0 117.774 20.9L20.899 7.774a.936.936 0 011.328 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#000"
                      fillRule="evenodd"
                      d="M7.774 7.774a.938.938 0 000 1.327l13.125 13.125a.938.938 0 101.328-1.327L9.1 7.774a.937.937 0 00-1.327 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Popover.Button>
              </div>
              <div className="mb-5 flex flex-wrap items-center gap-4">
                <div
                  className={`m-4 h-[8px] w-[8px] rounded-full ${
                    data.SenatorMethod === "เลือกกันเอง"
                      ? "bg-senate-pink"
                      : data.SenatorMethod === "เลือกโดย คสช."
                      ? "bg-senate-blue"
                      : "bg-senate-green"
                  }`}
                />
                <span className="mr-[6px] inline-block">ส.ว. {data.SenatorMethod}</span>
                {data.IsActive ? (
                  <div className="flex items-center gap-4 rounded-5 bg-[#E9FFF4] pl-4 pr-5">
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
                  <div className="flex items-center gap-4 rounded-5 bg-[#e2e2e2] pl-4 pr-5">
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
              <div className="flex items-center gap-4">
                <svg
                  className="-top-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width={16}
                  height={16}
                >
                  {data.NcpoType ? (
                    <path
                      fill="#000"
                      d="M13.776 3.502c.275.244.3.666.056.94l-7.112 8a.666.666 0 01-.996 0l-3.556-4a.667.667 0 01.997-.885l3.057 3.44 6.613-7.44a.667.667 0 01.941-.055z"
                    />
                  ) : (
                    <path
                      fill="#000"
                      d="M3.529 3.529c.26-.26.682-.26.943 0L8 7.057 11.53 3.53a.667.667 0 11.943.942L8.943 8l3.529 3.528a.667.667 0 01-.943.943L8 8.943 4.472 12.47a.667.667 0 11-.943-.943L7.057 8 3.53 4.47a.667.667 0 010-.942z"
                    />
                  )}
                </svg>
                <span className="mb-5 block">
                  {data.NcpoType ? "เป็นองคพยพ คสช. มาก่อน" : "ไม่เป็นองคพยพ คสช. มาก่อน"}
                </span>
              </div>
              {data.NcpoType && (
                <span className="mb-5 block">
                  ประเภท คสช. : {data.NcpoType.replace(/,/g, ", ")}
                </span>
              )}
              <hr className="my-10 border-dashed" />
              <div className="text-center">
                <a
                  className="wv-b3 inline-flex items-center gap-[4px] font-bold text-black"
                  href={
                    "https://theyworkforus.wevis.info/people/" +
                    data.Name.replace(/\s+/g, "-")
                  }
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
