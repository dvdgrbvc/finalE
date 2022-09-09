import React from "react";
import Shijipng from "./images/shiji.png";
import { BsTelephone } from "react-icons/bs";

const I2 = () => {
  return (
    <div class="text-center background">
      <div class="shijiImg">
        <img src={Shijipng} alt="logo" />
      </div>

      <div class="flex flex-row gap-5 justify-center mb-12 mt-16">
        <div>
          <BsTelephone class="w-12 h-12 mt-2 text-white" />
        </div>
        <div class="phoneText">(+49) (0) 8941207181</div>
      </div>
      <a
        class="underlineText emailText"
        href="mailto:posssuport-eu@shijigroup.com?cc=david.ojstersek@ruby-hotels.com"
      >
        posssupport-eu@shijigroup.com
      </a>
    </div>
  );
};

export default I2;
