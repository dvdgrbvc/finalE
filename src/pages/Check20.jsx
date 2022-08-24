import React from "react";
import { Button, Navbar } from "../components";
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';
import vector from '../img/Vector.png'

const Check20 = () => {
  return (
    <div class="background text-center">
      <Navbar />
      <div class="m-20 text-white mt-10 ">
        <div class="flex justify-center">
          <img src={vector} alt="" class="w-[70px]" />
        </div>
        <h2 class="blueText">Please fill up the card in the Printer !</h2>
        <h2 class="subheader">Problem Solved?</h2>
        <div class="flex flex-row gap-60 justify-center mt-8">
          <YesButton name="Yes" path="/" />
          <NoButton name="No" path="/check18" />
        </div>
      </div>
    </div>
  );
};

export default Check20;
