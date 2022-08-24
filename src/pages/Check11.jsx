import React from 'react';
import { Button, Navbar } from '../components';
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';

const Check11 = () => {
  return (
    <div class="background text-center">
    <Navbar />
    <div class="m-20 text-white">
        <h2 class="header">Terminal has Power ?</h2>
        <div class="buttonDiv">
            <YesButton name="Yes" path="/check12"/>
            <NoButton name="No" path="/check14"/>
        </div>
    </div>
</div>
  )
}

export default Check11