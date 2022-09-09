import React from 'react';
import Aobis from "./images/aobis.png";

const I5 = () => {
  return (
    <div class="background text-center">
      <div className='flex justify-center pt-14'>
      <img src= {Aobis} alt="logo" className='w-[650px] h-[230px]'/>
      </div>
        <p class="text-left text-white m-10 text-6xl">Describe what happened, take Pics/Screenshots and send an E-Mail to :  </p>
        <a class="text-[84px] text-[#0066CC] font-bold font-['Inter']" href="mailto:support@aobis.com?cc=david.ojstersek@ruby-hotels.com">support@aobis.com</a>
    </div>
  )
}

export default I5