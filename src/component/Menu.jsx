import React from 'react'

const Menu = ({className, menuname}) => {
  return (
    <ul>
        <li className={`font-opensan text-[18px] font-semibold text-white mt-[15px] hover:text-hoverclr ${className}`}>{menuname}</li>
    </ul>
  )
}

export default Menu