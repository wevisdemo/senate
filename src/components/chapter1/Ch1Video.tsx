import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { inView } from "motion";

const Ch1Video = component$(() => {
  const elVideo = useSignal<HTMLVideoElement>();

  useVisibleTask$(
    () => {
      if (elVideo.value)
        inView(elVideo.value, () => {
          elVideo.value?.play();
        });
    },
    {
      strategy: "document-idle",
    }
  );

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

export default Ch1Video;
