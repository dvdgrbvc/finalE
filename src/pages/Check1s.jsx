import React from 'react';
import { Navbar } from '../components';
import NoButton from '../components/NoButton';
import YesButton from '../components/YesButton';
import Ruby from "./images/ruby.png"

const Check1s = () => {
  return (
    <div class="background">
      <Navbar />
         <div class="m-10">
            <h2 class="header">Fiskalisation Error ?</h2>
            <div class="buttonDiv">
                <YesButton name="Yes" path="/i3"/>
                <NoButton name="No" path="/shiji"/>
            </div>
        </div>
    </div>
  )
}

export default Check1s