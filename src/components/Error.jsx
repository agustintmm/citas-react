import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-800 text-white text-center uppercase p-3 mb-4 font-bold rounded-md'>
      <p>{mensaje}</p>
    </div>
  )
}

export default Error