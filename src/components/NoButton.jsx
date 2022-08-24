import React from "react";
import { Link } from "react-router-dom";

const NoButton = (props) => {
  return (
    <div>
      <Link to={props.path}>
        <div class="bg-[#912525] w-[264px] h-[102px] rounded-[10px] text-white text-[64px] text-center">{props.name}</div>
      </Link>
    </div>
  );
};

export default NoButton;
