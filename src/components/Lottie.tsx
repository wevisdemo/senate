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
}

const Lottie = component$(
  ({ src, width, height, loop, delayMs, play, clazz }: LottieProps) => {
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

                inView(
                  elContainer.value,
                  () => {
                    if (play === undefined) {
                      if (delayMs) setTimeout(() => lottieCtrlData.ctrl.play(), delayMs);
                      else lottieCtrlData.ctrl.play();
                    }
                  },
                  {
                    amount: 0.99,
                  }
                );
              }
            },
            {
              margin: "-500px 0px 0px 0px",
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
          if (delayMs) setTimeout(() => lottieCtrlData.ctrl.play(), delayMs);
          else lottieCtrlData.ctrl.play();
        }
      });
    }

    return <div ref={elContainer} class={clazz} style={{ width, height }}></div>;
  }
);

export default Lottie;
