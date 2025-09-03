import React from 'react'

const Input = ({ placeholder, onChange, value, className, style }) => {

  return (
    <input
      type="text"
      placeholder={placeholder}
      style={style}
      onChange={onChange}
      className={`${className} w-full h-full px-2 py-1 border-0 focus:outline-0`}
      value={value}
    />
  )
}

export default Input