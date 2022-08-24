import React from "react";
import { Link } from "react-router-dom";

const YesButton = (props) => {
  return (
    <div>
      <Link to={props.path}>
        <div class="bg-[#55B559] w-[264px] h-[102px] rounded-[10px] text-white text-[64px] text-center">{props.name}</div>
      </Link>
    </div>
  );
};

export default YesButton;
