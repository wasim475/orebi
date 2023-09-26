import React from 'react'

const Item = ({listItem, className}) => {
  return (
    <li className={`hover:text-black transition duration-150 ease-out ${className}`}>{listItem}</li>
  )
}

export default Item