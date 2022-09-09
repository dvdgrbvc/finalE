import React from "react";
import Aobis from "./images/aobis.png";
import { BsTelephone } from "react-icons/bs";
import Shijipng from "./images/shiji.png";

const I4 = () => {
  return (
    <div class="text-center background">
      <div class="border-b-2 border-solid border-white pb-4">
        <div class="shijiImg3 shijiImg2 shijiImg">
          <img src={Aobis} alt="logo" />
        </div>

        <div class="gap-10 w-[80%] ml-[15%]">
          <div class="grid grid-cols-2 text-white">
            <div className="text-2xl mb-8">
              <div className="mb-2">Monday - Friday</div>
              <div>08:30 - 17:30</div>
            </div>
            <div class="flex flex-row gap-5 ml-[-150px]">
              <div>
                <BsTelephone class="w-8 h-8 text-white" />
              </div>
              <div class="phoneText2 phoneText">(+49) (0) 8022508000</div>
            </div>
          </div>
          <div class="grid grid-cols-2 text-white">
            <div className="text-2xl">
              <div className="mb-2">Weekends/Holidays </div>
              <div>17:30 - 23:00</div>
            </div>
            <div class="flex flex-row gap-5 ml-[-150px]">
              <div>
                <BsTelephone class="w-8 h-8 text-white" />
              </div>
              <div class="phoneText2 phoneText">(+49) (0) 80225094629</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="shijiImg2 shijiImg">
          <img src={Shijipng} alt="logo" />
        </div>
        <div class="pt-6 px-60">
          <div class="flex flex-row gap-5 justify-center pb-8">
            <div>
              <img
                alt="Germany"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
                class="w-12 rounded"
              />
            </div>
            <div class="phoneText2 phoneText">(+49) 8941207181</div>
          </div>
          <div class="flex flex-row gap-5 justify-center">
            <div>
              <img
                alt="United Kingdom"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                class="w-12 rounded"
              />
            </div>
            <div class="phoneText2 phoneText">(+44) 2038268896</div>
          </div>
        </div>
        <a
          class="emailText2 emailText"
          href="mailto:pms.support-eu@shijigroup.com?cc=david.ojstersek@ruby-hotels.com"
        >
          pms.support-eu@shijigroup.com
        </a>
      </div>
    </div>
  );
};

export default I4;
