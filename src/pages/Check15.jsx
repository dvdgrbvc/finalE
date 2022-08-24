import React from 'react';
import { Button, Navbar } from '../components';
import NoButton from "../components/NoButton";
import YesButton from "../components/YesButton";

const Check15 = () => {
  return (
    <div class="background text-center">
    <Navbar />
    <div class="m-16 text-white">
      <h2 class="header">Are Check-ins on other Tablets working ?</h2>
      <div class="buttonDiv">
        <YesButton name="Yes" path="/i5" />
        <NoButton name="No" path="/i3" />
      </div>
    </div>
  </div>
  )
}

export default Check15