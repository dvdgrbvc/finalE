import React from "react";
import Shijipng from "./images/shiji.png";

const I1s = () => {
  return (
    <div class="text-center background">
      <div class="shijiImg">
        <img src={Shijipng} alt="logo" />
      </div>
      <div class="mt-10 mx-60">
        <div class="flex flex-row gap-5 justify-center mb-8">
          <div>
            <img
              alt="Germany"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
              class="w-16 h-16 rounded-2xl"
            />
          </div>
          <div class="phoneText">(+49) 8941207181</div>
        </div>
        <div class="flex flex-row gap-5 justify-center">
          <div>
            <img
              alt="United Kingdom"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
              class="w-16 h-16 rounded-2xl"
            />
          </div>
          <div class="phoneText">(+44) 2038268896</div>
        </div>
      </div>
      <a
        class="underlineText emailText"
        href="mailto:pms.support-eu@shijigroup.com"
      >
        pms.support-eu@shijigroup.com
      </a>
    </div>
  );
};

export default I1s;