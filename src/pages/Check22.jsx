import React from "react";
import { Button, Navbar } from "../components";
import vector from '../img/Vector.png'
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';

const Check22 = () => {
  return (
    <div class="background text-center">
      <Navbar />
      <div class="m-20 text-white mt-10 ">
        <div class="flex justify-center">
          <img src={vector} alt="" class="w-[70px]" />
        </div>
        <h2 class="blueText">Please Check the Power Cable!</h2>
        <h2 class="subheader">Is the Printer on?</h2>
        <div class="flex flex-row gap-60 justify-center mt-8">
          <YesButton name="Yes" path="/check16" />
          <NoButton name="No" path="/i3" />
        </div>
      </div>
    </div>
  );
};

export default Check22;
