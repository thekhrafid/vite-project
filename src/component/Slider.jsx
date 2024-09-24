import React, { Children } from 'react'

const Slider = ({className, children}) => {
  return (
    <div className={`w-[1050px] py-[30px] bg-white m-auto rounded-lg ${className}`}>{children}</div>
  )
}

export default Slider