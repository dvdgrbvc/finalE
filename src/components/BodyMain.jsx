import React from "react";
import OptionButton from "./OptionButton";


const BodyMain = () => {
  return (
    <div class="mt-20">
      {/* <div class="flex justify-center text-8xl text-[#9B0000] pt-16">
        Emergency Contact
      </div> */}
      <h2 class="text-center text-white text-[54px]">
        Select where the emergency Occured
      </h2>
      <div class="flex flex-row justify-between mx-56 my-10">
        <OptionButton name="Infrasys(POS)" path="/infrasys"/>
        <OptionButton name="Shiji SEP(PMS)" path="/shiji" />
        <OptionButton name="Kiosk" path="/kiosk" />
      </div>
    </div>
  );
};

export default BodyMain;
