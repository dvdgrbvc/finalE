import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import DropItem from "../components/DropItem";
import Solution from "../pages/Solution";
import { Navbar } from "../components";
import { Link } from "react-router-dom";

const Infrasys = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <div class="background">
      <div>
        <Navbar />
      </div>
      <h2 class="header">Choose the Problem</h2>
      <div class="relative mx-[21rem] my-5 font-['Inter']">
        {/*dropdown */}
        <div
          class="flex flex-row justify-center gap-40 px-4 py-4 text-black bg-[#D9D9D9] rounded-lg mx-44 w-7/12 mb-1 cursor-pointer"
          onClick={(e) => setisActive(!isActive)}
        >
          {/*dropdown btn*/}
          <h2>Choose option from the following</h2>
          <AiFillCaretDown class="pt-1 w-7 h-7" />
        </div>
        {isActive && (
          <div className="absolute">
            {/*dropdown content */}
            <div class="inputPadding inputField">
              <Link to="/i1">
                <DropItem name="Can't pay with Adyen Terminal" />
              </Link>
              {/*dropdown item*/}
            </div>
            <div class="inputField">
              <Link to="/i2">
                <DropItem name="Daily Closure" />
              </Link>
            </div>
            <div class="inputPadding inputField">
              <Link to="/check1">
                <DropItem name="Guest Check Can't be payed (TSE)" />
              </Link>
            </div>
            <div class="inputField">
              <Link to="/check2">
                <DropItem name="Bon-Printer Not Printing" />
              </Link>
            </div>
            <div class="inputField">
              <Link to="/check6">
                <DropItem name="Tablet not reacting" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Infrasys;
