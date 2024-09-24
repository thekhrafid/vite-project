import React, { Children } from 'react'

export const Container = ({children}) => {
  return (
    <div className={`max-w-maxwith m-auto`}>{children}</div>
  )
}
export default Container