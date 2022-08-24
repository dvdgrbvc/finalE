import React from "react";
import { Button, Navbar } from "../components";
import NoButton from "../components/NoButton";
import YesButton from "../components/YesButton";

const Check16 = () => {
  return (
    <div class="background text-center">
      <Navbar />
      <div class="m-16 text-white">
        <h2 class="header">Have you restarted the Printer ?</h2>
        <div class="buttonDiv">
          <YesButton name="Yes" path="/check17" />
          <NoButton name="No" path="/check21" />
        </div>
      </div>
    </div>
  );
};

export default Check16;
