import React from "react";
import Adyenpng from "./images/adyen.png";
import { BsTelephone } from "react-icons/bs";

const AdyenPMS = () => {
  return (
    <div class="text-center background">
      <div class="shijiImg">
        <img src={Adyenpng} alt="logo" />
      </div>

      <div class="flex flex-row gap-5 justify-center mb-12 mt-16">
        <div>
          <BsTelephone class="w-12 h-12 mt-2 text-white" />
        </div>
        <div class="phoneText">(+49)30 30 807 745</div>
      </div>
      <a
        class="underlineText emailText"
        href="mailto:possupport@adyen.com?cc=david.ojstersek@ruby-hotels.com"
      >
        support@adyen.com
      </a>
    </div>
  );
};

export default AdyenPMS;
