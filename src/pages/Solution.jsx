import React from 'react'

const Solution = (props) => {
  return (
    <div class="text-center m-10">
        <img src="/png" alt="logo"/>
        <div class="mt-10">
        <p>{props.phone1}phone1</p>
        <p>{props.phone2}phone no 2</p>
        <p>{props.email}email</p>
        </div>
    </div>
  )
}

export default Solution