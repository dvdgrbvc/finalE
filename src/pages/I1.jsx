import React from "react";
import Shijipng from "./images/shiji.png";
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';

const I1 = () => {
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
          <div class="phoneText">(+49) 89 41207181</div>
        </div>
        <div class="flex flex-row gap-5 justify-center">
          <div>
            <img
              alt="United Kingdom"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
              class="w-16 h-16 rounded-2xl"
            />
          </div>
          <div class="phoneText">(+44) 2039 620 359</div>
        </div>
      </div>
      <a
        class="underlineText emailText"
        href="mailto:possuport-eu@shijigroup.com?cc=david.ojstersek@ruby-hotels.com"
      >
        possupport-eu@shijigroup.com
      </a>
      <h2 class="subheader">Was Shiji able to solve the Problem?</h2>
      <div class="flex flex-row gap-60 justify-center mt-8">
        <YesButton name="Yes" path="/" />
        <NoButton name="No" path="/adyenpos" />
      </div>
    </div>
  );
};

export default I1;

