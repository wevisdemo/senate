/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import Balancer from "react-wrap-balancer";

import type { ElementType } from "react";

interface QBalancerProps {
  text: string;
  as?: ElementType;
  class?: string;
}

export const QBalancer = qwikify$<QBalancerProps>(
  ({ text, as: Component = "div", class: clazz }) => (
    <Component className={clazz}>
      <Balancer>{text}</Balancer>
    </Component>
  ),
  { eagerness: "idle" }
);
