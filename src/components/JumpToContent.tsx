import { $, component$ } from "@builder.io/qwik";

interface JumpToContentProps {
  id: string;
  src: string;
  label: string;
}

const JumpToContent = component$(({ id, src, label }: JumpToContentProps) => {
  const jump = $(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView();
  });

  return (
    <button
      type="button"
      class="flex flex-1 items-center gap-20 rounded-10 border border-white p-20 text-white"
      onClick$={jump}
    >
      <img
        class="h-100 w-100 object-contain"
        src={src}
        alt=""
        width={100}
        height={100}
        loading="lazy"
        decoding="async"
      />
      <span class="text-left">
        <span class="wv-h10 mb-4 block font-kondolar font-black">{label}</span>
        <span class="wv-b5 mt-auto flex items-center gap-4 font-bold">
          สำรวจ
          <img
            src="./imgs/dcaret.svg"
            alt=""
            width="20"
            height="20"
            loading="lazy"
            decoding="async"
          />
        </span>
      </span>
    </button>
  );
});

export default JumpToContent;
