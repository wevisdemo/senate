import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import lottie from "lottie-web";
import { inView } from "motion";

export interface LottieProps {
  src: string;
  width: string;
  height: string;
  loop?: boolean;
  delayMs?: number;
  play?: boolean;
  class?: string;
  threshold?: number;
  hasFallback?: boolean;
}

const Lottie = component$(
  ({
    src,
    width,
    height,
    loop,
    delayMs,
    play,
    class: clazz,
    threshold,
    hasFallback,
  }: LottieProps) => {
    const lottieCtrlData: { ctrl: any } = { ctrl: null };
    const elContainer = useSignal<HTMLDivElement>();

    useVisibleTask$(
      () => {
        if (elContainer.value) {
          inView(
            elContainer.value,
            () => {
              if (elContainer.value) {
                if (hasFallback) elContainer.value.children[0].classList.add("hidden");

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

    useVisibleTask$(({ track }) => {
      track(() => play);
      if (play === undefined) return;
      if (play) {
        if (delayMs) setTimeout(() => lottieCtrlData.ctrl?.play?.(), delayMs);
        else lottieCtrlData.ctrl?.play?.();
      }
    });

    return hasFallback ? (
      <div
        ref={elContainer}
        class={"scrollbar-none " + (clazz ?? "")}
        style={{ width, height }}
      >
        <Slot />
      </div>
    ) : (
      <div
        ref={elContainer}
        class={"scrollbar-none " + (clazz ?? "")}
        style={{ width, height }}
      />
    );
  }
);

export default Lottie;
