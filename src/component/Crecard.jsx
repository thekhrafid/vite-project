import React, { Children } from 'react'

const Crecard = ({children, className}) => {
  return (
    <div className={`w-[640px] rounded-lg ${className}`}>{children}</div>
  )
}

export default Crecard