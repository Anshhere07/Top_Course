
import "./Spinner.css"
import React from 'react'

const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className='spinner'></div>
      <p className="text-black text-lg font-semibold">loading...</p>
    </div>
  )
}

export default Spinner;
