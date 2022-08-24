import React from "react";
import { Link } from "react-router-dom";
import Solution from "../pages/Solution";

const DropItem = (props) => {
  return (
        <div class="hover:text-yellow-600 bg-lg p-2 text-black my-2">
          {props.name}
      </div>
  );
};

export default DropItem;
