import React from 'react';
import { Link } from "react-router-dom";

const PaymentButton = (props) => {
    return (
        <div>
        <Link to={props.path}>
        <div class="text-[#000000] text-[64px] flex justify-center items-center w-[332px] h-[139px] bg-[#D9D9D9] rounded-[10px] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]">
        {props.name}
        </div>
        </Link>
    </div>
    );
};

export default PaymentButton;