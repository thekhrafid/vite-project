import React from 'react'

const Button = ({btname, className}) => {
  return (
<button className={`font-opensan py-[10px] px-[40px] text-white border border-hoverclr rounded-full hover:bg-hoverclr ${className}`}>{btname}</button>  
)
}

export default Button