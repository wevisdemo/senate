import { component$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { QWvNavbar } from "./react/QWvNavbar";

export const Navbar = component$(() => {
  const loc = useLocation();
  const nav = useNavigate();

  return <QWvNavbar pathname={loc.url.pathname} nav={nav} />;
});
