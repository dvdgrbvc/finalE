import React from "react";
import Aobis from "./images/aobis.png";
import { BsTelephone } from "react-icons/bs";

const I3 = () => {
  return (
    <div class="text-center background">
      <div class="shijiImg">
        <img src={Aobis} alt="logo" />
      </div>

      <div class="mt-20 gap-10">
        <div class="grid grid-cols-2 text-white">
          <div className="text-4xl mb-16">
            <div className="mb-2">Monday - Friday</div>
            <div>08:30 - 17:30</div>
          </div>
          <div class="flex flex-row gap-5 ml-[-150px]">
            <div>
              <BsTelephone class="w-12 h-12 mt-2 text-white" />
            </div>
            <div class="phoneText">(+49) (0) 8022508000</div>
          </div>
        </div>
        <div class="grid grid-cols-2 text-white">
          <div className="text-4xl">
            <div className="mb-2">Weekends/Holidays </div>
            <div>17:30 - 23:00</div>
          </div>
          <div class="flex flex-row gap-5 ml-[-150px]">
            <div>
              <BsTelephone class="w-12 h-12 mt-2 text-white" />
            </div>
            <div class="phoneText">(+49) (0) 80225094629</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default I3;
