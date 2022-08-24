import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import DropItem from "../components/DropItem";
import Solution from "../pages/Solution";
import { Navbar } from "../components";
import { Link } from "react-router-dom";

const Kiosk = () => {
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
            <div class="inputPadding important2 inputField">
              <Link to="/check8k">
                <DropItem name="Guest cannot check-in" />
              </Link>
              {/*dropdown item*/}
            </div>
            <div class="important2 inputField">
              <Link to="/check2k">
                <DropItem name="Key printer isn't printing anymore" />
              </Link>
            </div>
            <div class="important2 inputField">
              <Link to="/final">
                <DropItem name="Tablet nnot functional/destroyed" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kiosk;
