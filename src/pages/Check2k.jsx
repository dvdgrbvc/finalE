import React from 'react';
import { Button, Navbar } from '../components';
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';

const Check2k = () => {
  return (
    <div class="background text-center">
    <Navbar />
    <div class="m-16 text-white">
        <h2 class="header">Does the Printer Have Power ?</h2>
        <div class="buttonDiv">
            <YesButton name="Yes" path="/check16"/>
            <NoButton name="No" path="/check22"/>
        </div>
    </div>
</div>
  )
}

export default Check2k