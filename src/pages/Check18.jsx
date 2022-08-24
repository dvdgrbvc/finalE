import React from 'react';
import { Button, Navbar } from '../components';
import NoButton from "../components/NoButton";
import YesButton from "../components/YesButton";

const Check18 = () => {
  return (
    <div class="background text-center">
    <Navbar />
    <div class="m-16 text-white">
      <h2 class="header">Card Jam in the Printer ?</h2>
      <div class="buttonDiv">
        <YesButton name="Yes" path="/check19" />
        <NoButton name="No" path="/i3" />
      </div>
    </div>
  </div>
  )
}

export default Check18