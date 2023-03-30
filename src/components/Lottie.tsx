import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import lottie from "lottie-web";

export interface LottieProps {
  src: string;
  width: string;
  height: string;
  loop?: boolean;
  delayMs?: number;
  play?: boolean;
  clazz?: string;
}

const Lottie = component$(
  ({ src, width, height, loop, delayMs, play, clazz }: LottieProps) => {
    const lottieCtrlData: { ctrl: any } = { ctrl: null };
    const elContainer = useSignal<HTMLDivElement>();

    useVisibleTask$(() => {
      if (elContainer.value) {
        lottieCtrlData.ctrl = lottie.loadAnimation({
          container: elContainer.value,
          loop: loop ?? false,
          autoplay: false,
          path: src,
        });

        if (play === undefined) {
          if (delayMs) setTimeout(() => lottieCtrlData.ctrl.play(), delayMs);
          else lottieCtrlData.ctrl.play();
        }
      }
    });

    if (play !== undefined) {
      useVisibleTask$(({ track }) => {
        track(() => play);
        if (play) {
          if (delayMs) setTimeout(() => lottieCtrlData.ctrl.play(), delayMs);
          else lottieCtrlData.ctrl.play();
        }
      });
    }

    return <div ref={elContainer} class={clazz} style={{ width, height }}></div>;
  }
);

export default Lottie;
