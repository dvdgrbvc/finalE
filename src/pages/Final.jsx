import React from 'react'
import Navbar from '../components/Navbar'

const Final = () => {
  return (
    <div class="background">
      <Navbar/>
        <p class="text-center text-6xl text-white pt-32 pb-20">Describe what happened and send an email to :</p>
        <a class="block text-center text-[64px] text-[#0066CC] font-bold font-['Inter']" href="mailto:david.ojstersek@ruby-hotels.com">david.ojstersek@ruby-hotels.com</a>
    </div>
  )
}

export default Final