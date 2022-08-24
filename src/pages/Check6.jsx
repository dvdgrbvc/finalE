import React from 'react';
import { Button, Navbar } from '../components';
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';

const Check6 = () => {
  return (
    <div class="background text-center">
    <Navbar />
    <div class="m-16 text-white">
        <h2 class="header">Tablet has Internet Connection ?</h2>
        <div class="buttonDiv">
            <YesButton name="Yes" path="/check7"/>
            <NoButton name="No" path="/check8"/>
        </div>
    </div>
</div>
  )
}

export default Check6