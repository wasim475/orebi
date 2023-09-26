import React from 'react'

const Image = ({imagesrc, className}) => {
  return (
    <img src={imagesrc} className={`${className}`}/>
  )
}

export default Image