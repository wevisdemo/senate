/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Disclosure } from "@headlessui/react";

interface QLetterProps {
  children?: any;
  title: string;
}

export const QLetter = qwikify$<QLetterProps>(
  ({ children, title }) => (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button className="peer absolute inset-0 z-10 mx-auto w-full max-w-[600px]">
            <span className="sr-only">Toggle Card: {title}</span>
          </Disclosure.Button>
          <div
            className={`letter-transition mx-auto mb-[276px] w-[calc(100%-20px)] max-w-[600px] rounded-10 border bg-white px-20 pb-100 pt-30 ${
              open ? "mt-20" : "mt-[150px] peer-hover:-translate-y-10 md:mt-[130px]"
            }`}
          >
            <p className="wv-h7 w-full border-b border-dashed pb-10 text-center font-kondolar font-black">
              {title}
            </p>
            <div
              className={`letter-grid-row wv-b4 mt-10 grid w-full overflow-hidden text-center font-bold transition-all duration-500 ${
                open ? "grid-rows-0fr opacity-0" : "grid-rows-1fr"
              }`}
              aria-hidden
            >
              <div className="flex min-h-0 items-center justify-center gap-10">
                <span>อ่านเพิ่มเติม</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="#000" d="M7 14l5-6 5 6H7z" />
                </svg>
              </div>
            </div>
            <Disclosure.Panel
              static
              className={`letter-grid-row grid overflow-hidden transition-all duration-500 ${
                open ? "grid-rows-1fr" : "grid-rows-0fr opacity-0"
              }`}
            >
              <div className="min-h-0">
                {children}
                <div className="wv-b4 flex w-full items-center justify-center gap-10 font-bold">
                  <span>ปิด</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 25 24"
                    width="25"
                    height="24"
                  >
                    <path fill="#000" d="M17.5 10l-5 6-5-6h10z" />
                  </svg>
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        </div>
      )}
    </Disclosure>
  ),
  {
    eagerness: "visible",
  }
);
