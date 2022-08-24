import React from 'react';
import { Button, Navbar } from '../components';
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';

const Check7 = () => {
  return (
    <div class="background text-center">
    <Navbar />
    <div class="m-20 text-white">
        <h2 class="header">Have you restarted the Infrasys App ?</h2>
        <div class="buttonDiv">
            <YesButton name="Yes" path="/check8"/>
            <NoButton name="No" path="/check10"/>
        </div>
    </div>
</div>
  )
}

export default Check7