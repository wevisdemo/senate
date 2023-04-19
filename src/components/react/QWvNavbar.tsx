/** @jsxImportSource react */
import type { RouteNavigate } from "@builder.io/qwik-city";
import { qwikify$ } from "@builder.io/qwik-react";
import WvNavButton from "@wevisdemo/ui/react/nav-button";
import WvNavbar from "@wevisdemo/ui/react/navbar";

interface QNavbarProps {
  pathname: string;
  nav: RouteNavigate;
}

export const QWvNavbar = qwikify$<QNavbarProps>(
  ({ pathname, nav }) => (
    <WvNavbar title="Senate">
      <WvNavButton active={pathname === "/senate/"} onClick={() => nav("/senate")}>
        Home
      </WvNavButton>
      <WvNavButton
        active={pathname === "/senate/about/"}
        onClick={() => nav("/senate/about")}
      >
        About
      </WvNavButton>
    </WvNavbar>
  ),
  {
    eagerness: "visible",
  }
);
