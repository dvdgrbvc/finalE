import React from 'react';
import { Button, Navbar } from '../components';
import PaymentButton from '../components/PaymentButton';

const Check7 = () => {
  return (
    <div class="background text-center">
        <Navbar />
        <div class="m-16 text-white ">
            <h2 class="header">Payment Can't be Processed on ?</h2>
            <div class="flex flex-row gap-60 justify-center mt-14">
                <PaymentButton name="Terminal" path="/check11"/>
                <PaymentButton name="SEP" path="/i1s"/>
            </div>
        </div>
    </div>
  )
}

export default Check7