import React from 'react'

const List = ({children, className}) => {
  return (
    <ul className={`font-DM text-fontC ${className}`}>{children}</ul>
  )
}

export default List