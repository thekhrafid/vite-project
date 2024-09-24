import React from 'react'

const Headline = ({className, htext}) => {
  return (
    <h1 className={`font-opensan font-bold ${className}`}>{htext}</h1>
  )
}

export default Headline