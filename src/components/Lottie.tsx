import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import lottie from "lottie-web";
import { inView } from "motion";

export interface LottieProps {
  src: string;
  width: string;
  height: string;
  loop?: boolean;
  delayMs?: number;
  play?: boolean;
  clazz?: string;
  threshold?: number;
}

const Lottie = component$(
  ({ src, width, height, loop, delayMs, play, clazz, threshold }: LottieProps) => {
    const lottieCtrlData: { ctrl: any } = { ctrl: null };
    const elContainer = useSignal<HTMLDivElement>();

    useVisibleTask$(
      () => {
        if (elContainer.value) {
          inView(
            elContainer.value,
            () => {
              if (elContainer.value) {
                lottieCtrlData.ctrl = lottie.loadAnimation({
                  container: elContainer.value,
                  loop: loop ?? false,
                  autoplay: false,
                  path: src,
                });

                elContainer.value.classList.add("!w-auto");
                const realThreshold = Math.min(
                  threshold ?? 0.99,
                  document.getElementById("100vh")!.getBoundingClientRect().height /
                    elContainer.value.getBoundingClientRect().height -
                    0.1
                );

                inView(
                  elContainer.value,
                  () => {
                    if (play === undefined) {
                      if (delayMs)
                        setTimeout(() => lottieCtrlData.ctrl?.play?.(), delayMs);
                      else lottieCtrlData.ctrl?.play?.();
                    }
                  },
                  {
                    amount: realThreshold,
                  }
                );
              }
            },
            {
              margin: "500px 0px 500px 0px",
            }
          );
        }
      },
      {
        strategy: "document-idle",
      }
    );

    if (play !== undefined) {
      useVisibleTask$(({ track }) => {
        track(() => play);
        if (play) {
          if (delayMs) setTimeout(() => lottieCtrlData.ctrl?.play?.(), delayMs);
          else lottieCtrlData.ctrl?.play?.();
        }
      });
    }

    return <div ref={elContainer} class={clazz} style={{ width, height }}></div>;
  }
);

export default Lottie;
