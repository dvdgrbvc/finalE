import React from 'react';
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
        <Link to={props.path}>
        <div class="">
        {props.name}
        </div>
        </Link>
    </div>
    
  )
}

export default Button
