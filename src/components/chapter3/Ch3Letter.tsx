import { Slot, component$ } from "@builder.io/qwik";
import QLetter from "../react/QLetter";
import Lottie from "../Lottie";

export interface Ch3LetterProps {
  title: string;
  lottieName: string;
}

const Ch3Letter = component$<Ch3LetterProps>(({ title, lottieName }) => {
  return (
    <div class="w-full overflow-hidden">
      <QLetter title={title}>
        <Slot />
      </QLetter>
      <Lottie
        clazz="absolute bottom-[115px] left-1/2 -translate-x-1/2"
        src={`./imgs/lotties/model/${lottieName}.json`}
        height="160px"
        width="160px"
      />
    </div>
  );
});

export default Ch3Letter;
