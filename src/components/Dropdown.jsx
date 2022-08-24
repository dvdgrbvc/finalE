import React,{useState} from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import DropItem from './DropItem';
import Solution from '../pages/Solution';

const Dropdown = () => {
    const [isActive, setisActive] = useState(false);
  return (
    <div class="relative mx-80 my-10">{/*dropdown */}
      <div class="flex flex-row gap-40 border border-yellow-500 px-5 py-4 border-2 text-blue-600 rounded-lg mx-44" 
      onClick={e => setisActive(!isActive)}>{/*dropdown btn*/}
        <h2>Choose option from the following</h2>
        <AiFillCaretDown class="pt-1 w-5 h-5"/>
      </div>
        {isActive && (
            <div class="absolute mx-44 p-4 w-7/12 my-5 shadow-2xl">{/*dropdown content */}
                <DropItem name="xxx" path="/solution" onClick={<Solution phone1="999999999" phone2="7748392238" email="xyz@gmail.com"/>}/>{/*dropdown item*/}
                <DropItem name="yyy" path="/solution"/>
                <DropItem name="zzz" path="/solution"/>
            </div>
        )}
    </div>
  )
}

export default Dropdown
