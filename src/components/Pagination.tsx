import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

export interface PaginationProps {
  total: number;
  currentPage: number;
  perPage: number;
  onChange: QRL<(index: number) => any>;
}

export const Pagination = component$<PaginationProps>(
  ({ total, currentPage, perPage, onChange }) => (
    <div class="mx-auto flex items-center gap-4 lg:mr-0">
      <button
        class="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border bg-white disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        onClick$={() => onChange(Math.max(currentPage - 1, 0))}
        disabled={currentPage === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 9 12"
          width="9"
          height="12"
        >
          <path fill="#000" d="M8.16 1.41L3.58 6l4.58 4.59L6.75 12l-6-6 6-6 1.41 1.41z" />
        </svg>
      </button>
      {Math.ceil(total / perPage) > 6 ? (
        <>
          <button
            class={`wv-u5 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border border-black p-4 font-semibold leading-none ${
              0 === currentPage ? "bg-black text-white" : "bg-white"
            }`}
            type="button"
            onClick$={() => onChange(0)}
          >
            <span class="translate-y-[1px]">1</span>
          </button>

          <button
            class={`wv-u5 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border border-black p-4 font-semibold leading-none disabled:bg-wv ${
              1 === currentPage ? "bg-black text-white" : "bg-white"
            } ${currentPage > 3 ? "hidden" : ""}`}
            type="button"
            onClick$={() => onChange(1)}
          >
            <span class="translate-y-[1px]">2</span>
          </button>
          <span
            class={`w-[24px] translate-y-[1px] text-center ${
              currentPage > 3 ? "" : "hidden"
            }`}
          >
            ...
          </span>

          {Array(3)
            .fill(Math.max(Math.min(currentPage - 1, Math.ceil(total / perPage) - 5), 2))
            .map((e, i) => (
              <button
                key={i + e}
                class={`wv-u5 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border border-black p-4 font-semibold leading-none ${
                  i + e === currentPage ? "bg-black text-white" : "bg-white"
                }`}
                type="button"
                onClick$={() => onChange(i + e)}
              >
                <span class="translate-y-[1px]">{i + 1 + e}</span>
              </button>
            ))}

          <button
            class={`wv-u5 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border border-black p-4 font-semibold leading-none ${
              Math.ceil(total / perPage) - 2 === currentPage
                ? "bg-black text-white"
                : "bg-white"
            } ${currentPage < Math.ceil(total / perPage) - 4 ? "hidden" : ""}`}
            type="button"
            onClick$={() => onChange(Math.ceil(total / perPage) - 2)}
          >
            <span class="translate-y-[1px]">{Math.ceil(total / perPage) - 1}</span>
          </button>
          <span
            class={`w-[24px] translate-y-[1px] text-center ${
              currentPage < Math.ceil(total / perPage) - 4 ? "" : "hidden"
            }`}
          >
            ...
          </span>

          <button
            class={`wv-u5 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border border-black p-4 font-semibold leading-none ${
              Math.ceil(total / perPage) - 1 === currentPage
                ? "bg-black text-white"
                : "bg-white"
            }`}
            type="button"
            onClick$={() => onChange(Math.ceil(total / perPage) - 1)}
          >
            <span class="translate-y-[1px]">{Math.ceil(total / perPage)}</span>
          </button>
        </>
      ) : (
        Array(Math.ceil(total / perPage))
          .fill(0)
          .map((_, i) => (
            <button
              key={i}
              class={`wv-u5 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border border-black p-4 font-semibold leading-none ${
                i === currentPage ? "bg-black text-white" : "bg-white"
              }`}
              type="button"
              onClick$={() => onChange(i)}
            >
              <span class="translate-y-[1px]">{i + 1}</span>
            </button>
          ))
      )}
      <button
        class="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border bg-white disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        onClick$={() =>
          onChange(Math.min(currentPage + 1, Math.ceil(total / perPage) - 1))
        }
        disabled={currentPage === Math.ceil(total / perPage) - 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 9 12"
          width="9"
          height="12"
        >
          <path fill="#000" d="M.84 1.41L5.42 6 .84 10.59 2.25 12l6-6-6-6L.84 1.41z" />
        </svg>
      </button>
    </div>
  )
);
