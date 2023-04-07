/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Disclosure } from "@headlessui/react";

interface QLetterProps {
  children?: any;
  title: string;
}

export default qwikify$(
  ({ children, title }: QLetterProps) => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 640 618"
          width={640}
          height={618}
          className="pointer-events-none absolute bottom-0 left-1/2 translate-y-[calc(100%-340px)] -translate-x-1/2"
        >
          <path
            fill="#FFA9D1"
            d="M.5 182.5h639V610a7.5 7.5 0 01-7.5 7.5H8A7.5 7.5 0 01.5 610V182.5z"
          />
          <path
            stroke="#000"
            d="M.5 182.5h639V610a7.5 7.5 0 01-7.5 7.5H8A7.5 7.5 0 01.5 610V182.5z"
          />
          <path
            fill="#FFA9D1"
            stroke="#000"
            d="M321.524.911c-1.001-.548-2.047-.548-3.048 0L4.567 172.893c-1.518.832-2.624 2.5-3.3 4.628-.672 2.12-.895 4.631-.698 7.042.198 2.414.814 4.684 1.782 6.334.968 1.65 2.236 2.603 3.74 2.603h627.818c1.504 0 2.772-.953 3.74-2.603.968-1.65 1.584-3.92 1.782-6.334.197-2.411-.026-4.922-.699-7.042-.675-2.128-1.781-3.796-3.299-4.628L321.524.911z"
          />
        </svg>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="peer absolute inset-0 z-10 mx-auto max-w-[600px]">
                <span className="sr-only">Toggle Card: {title}</span>
              </Disclosure.Button>
              <div
                className={`letter-transition mx-auto mb-[310px] w-[calc(100%-20px)] max-w-[600px] rounded-10 border bg-white px-20 pt-30 pb-100 ${
                  open ? "mt-20" : "mt-[140px] peer-hover:-translate-y-10"
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
            </>
          )}
        </Disclosure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 640 428"
          width={640}
          height={428}
          className="pointer-events-none absolute bottom-0 left-1/2 translate-y-[calc(100%-150px)] -translate-x-1/2"
        >
          <path
            fill="#FFA9D1"
            stroke="#000"
            d="M.5 422V.5h1.956c.492.43 1.049.79 1.671 1.062l313.91 136.521a4.829 4.829 0 003.926 0L635.873 1.562A6.422 6.422 0 00637.544.5h1.956V422a5.5 5.5 0 01-5.5 5.5H6A5.5 5.5 0 01.5 422z"
          />
          <path stroke="#000" strokeDasharray="2 2" d="M0 383.5h640" />
        </svg>
      </>
    );
  },
  {
    eagerness: "visible",
  }
);
