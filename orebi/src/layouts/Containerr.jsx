import React from 'react'

const Containerr = ({children,className}) => {
  return (
    <div className={`max-w-6xl mx-auto  p-2 ${className}`}>{children}</div>
  )
}

export default Containerr