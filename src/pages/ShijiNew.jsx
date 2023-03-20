import React from 'react';
import Select from 'react-select'
import '../index.css';
import {Navbar} from "../components";
import {useNavigate} from "react-router-dom"

const options = [
  { value: "check1s", label:"TSE"  },
  { value: 'i1s', label: 'End of Day (EOD/Night Audit)' },
  { value: 'checking', label: "Payments can't be done" },
]

const Shiji = () => {
 // setTimeout() 
  const navigate = useNavigate();

  const handleChange = (ev) => {
  
    navigate(`/${ev.value}`)
  //  If you want to navigate to another location just change the string above.
  //  Your code will be: navigate('/check1')
  }
  return(
  <div class='background'>
  <div>
  <div>
        <Navbar />
      </div>
  <div class="mt-10">
      <h2 class="text-center text-white text-[54px]">
        Select your Problem
      </h2>
  </div>
  <div class="select">
<Select onChange={handleChange} options={options} classNamePrefix={"select-filter"} />
  </div>
  
</div>
</div>
     )
}

export default Shiji;

