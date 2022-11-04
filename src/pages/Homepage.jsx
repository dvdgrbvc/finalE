import React from 'react';
import { BodyMain } from '../components';
import '../index.css'; 
import { Navbar } from '../components';

const Homepage = () => {
  return (
    <div class="background">
      <div>
        <Navbar />
      </div>
      <div>
      <div class="">
        <div class="flex justify-center text-8xl text-[#9B0000] pt-16">
        Emergency Contact
      </div>
      </div>
      <div className="main">
        <BodyMain />
      </div>
      <div className="footer">

      </div>
    </div>
    </div>
  )
}

export default Homepage
