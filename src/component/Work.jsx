import React, { Children } from 'react'

const Work = ({children, className}) => {
  return (
<div className={`w-[400px] ${className}`}>{children}</div>
  )
}

export default Work