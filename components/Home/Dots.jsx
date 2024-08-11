import React from 'react'

const Dots = () => {
  return (
    <div className="flex justify-center space-x-2 md:space-x-4 lg:space-x-6 mt-4 overflow-hidden max-w-full flex-wrap max-h-2">
      {[...Array(150)].map((_, index) => (
        <span key={index} className="block w-2 h-2  lg:w-2 lg:h-2 bg-gray-400 rounded-full"></span>
      ))}
    </div>
  )
}

export default Dots
