import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const Ch1Video = component$(() => {
  const elVideo = useSignal<HTMLVideoElement>();

  useVisibleTask$(() => {
    elVideo.value?.play();
  });

  return (
    <video
      class="aspect-[530/321] h-full max-h-[321px] w-full max-w-[530px] rounded-[20px] border-[10px] border-white object-cover"
      ref={elVideo}
      src="./videos/ncpo.mp4"
      playsInline
      muted
      loop
      preload="none"
      poster="./videos/ncpo.webp"
    />
  );
});
