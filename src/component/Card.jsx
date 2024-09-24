import React, { Children } from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`${className}`}>{children}</div>
  )
}

export default Card