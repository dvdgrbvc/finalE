import React from 'react';
import { Button, Navbar } from '../components';
import NoButton from "../components/NoButton";
import YesButton from "../components/YesButton";

const Check17 = () => {
  return (
    <div class="background text-center">
    <Navbar />
    <div class="m-16 text-white">
      <h2 class="header">Are the Cards Filled Up ?</h2>
      <div class="buttonDiv">
        <YesButton name="Yes" path="/check18" />
        <NoButton name="No" path="/check20" />
      </div>
    </div>
  </div>
  )
}

export default Check17