import React from 'react';
import Select from 'react-select'
import { Link } from "react-router-dom";


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

const hotel = () => {
  return(
     
    <Select options={options}/>
     )
}

export default hotel;
