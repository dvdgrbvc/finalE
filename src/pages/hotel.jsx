import React from 'react';
import Select from 'react-select'
import '../index.css';
import {Navbar} from "../components";
import {useNavigate} from "react-router-dom"




const options = [
  { value: 'Claire', label: 'Claire' },
  { value: 'Coco', label: 'Coco' },
  { value: 'Emma', label: 'Emma' },
  { value: 'Leni', label: 'Leni' },
  { value: 'Lilly', label: 'Lilly' },
  { value: 'Lissi', label: 'Lissi' },
  { value: 'Lotti', label: 'Lotti' },
  { value: 'Louise', label: 'Louise' },
  { value: 'Lucy', label: 'Lucy' },
  { value: 'Luna', label: 'Luna' },
  { value: 'Marie', label: 'Marie' },
  { value: 'Mimi', label: 'Mimi' },
  { value: 'Rosi', label: 'Rosi' },
  { value: 'Sofie', label: 'Sofie' },
  { value: 'Zoe', label: 'Zoe' },
]

const Hotel = () => {
  const navigate = useNavigate();

  const handleChange = (ev) => {
    navigate(`/home`)
   // navigate(`/${ev.value}`)
  //  If you want to navigate to another location just change the string above.
  //  Your code will be: navigate('/check1')
  }
  return(
  <div class='background'>
  <div>
  <div>
        <Navbar />
      </div>
  <div class="">
    <div class="flex justify-center text-8xl text-[#9B0000] pt-16">
    Emergency Contact
  </div>
  <div class="mt-10">
      <h2 class="text-center text-white text-[54px]">
        Select your Location
      </h2>
  </div>
  <div class="select">
<Select onChange={handleChange} options={options} classNamePrefix={"select-filter"} />
  </div>
  
</div>
</div>
   </div>  
     )
}

export default Hotel;