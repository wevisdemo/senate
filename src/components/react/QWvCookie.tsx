/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import WvCookieConsent from "@wevisdemo/ui/react/cookie-consent";

export const QWvCookie = qwikify$(
  () => {
    const onCookieAccept = (option: Record<string, boolean>) => {
      if (option["Performance"]) {
        // TODO: Enable Clarity
      }
    };

    return (
      <WvCookieConsent
        policyUrl="https://wevis.info/cookies_1-3/"
        cookieOptions={["Performance"]}
        onAccept={onCookieAccept}
      />
    );
  },
  { eagerness: "idle" }
);
