import React from 'react'

const Footer = ({className}) => {
  return (
    <div className={`bg-[var(--primary-color)] text-white py-4 text-center bottom-0 ${className}`}>
      <p>&copy; {new Date().getFullYear()} Popcorn Verdict. All rights reserved.</p>
    </div>
  )
}

export default Footer