import type { QRL } from "@builder.io/qwik";
import { component$, Fragment } from "@builder.io/qwik";

export interface PaginationProps {
  id: string;
  total: number;
  currentPage: number;
  perPage: number;
  onChange: QRL<(index: number) => any>;
}

const Pagination = component$<PaginationProps>(
  ({ id, total, currentPage, perPage, onChange }) => {
    const totalPage = Math.ceil(total / perPage);
    const inputName = "pagination-" + id;

    return (
      <div class="flex items-center gap-4">
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
            <path
              fill="#000"
              d="M8.16 1.41L3.58 6l4.58 4.59L6.75 12l-6-6 6-6 1.41 1.41z"
            />
          </svg>
        </button>
        {Array(totalPage)
          .fill(0)
          .map((_, i) => (
            <Fragment key={i}>
              <input
                class="paginate-input sr-only"
                type="radio"
                name={inputName}
                id={inputName + "-page-" + i}
                onChange$={() => onChange(i)}
                checked={i === currentPage}
              />
              <label
                class="wv-u5 paginate-label flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border bg-white p-4 font-semibold leading-none"
                for={inputName + "-page-" + i}
              >
                {i + 1}
              </label>
            </Fragment>
          ))}
        <button
          class="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[2px] border bg-white disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick$={() => onChange(Math.min(currentPage + 1, totalPage - 1))}
          disabled={currentPage === totalPage - 1}
        >
          <svg
            class="-right-[1px]"
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
    );
  }
);

export default Pagination;
