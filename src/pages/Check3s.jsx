import React from 'react';
import { Button, Navbar } from '../components';
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';

const Check3s = () => {
  return (
    <div class="background text-center">
        <Navbar />
        <div class="m-16 text-white">
            <h2 class="header">Does the Printer Have Paper ?</h2>
            <div class="buttonDiv">
                <YesButton name="Yes" path="/i3"/>
                <NoButton name="No" path="/check5"/>
            </div>
        </div>
    </div>
  )
}

export default Check3s
