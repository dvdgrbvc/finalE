import React from 'react';
import {Navbar, Dropdown} from '../components';

const Selection = () => {
  return (
    <div class="m-5">
      <div>
        <Navbar />
      </div>
      <h2 class="text-center text-2xl mt-20 mb-5">Choose the Problem</h2>
      <Dropdown class="m-40"/>
    </div>
  )
}

export default Selection
