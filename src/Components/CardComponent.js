import React from 'react'

const CardComponent = (props) => {
  return (
    <>

    <div className="max-w-sm w-full md:w-1/3 p-6  flex flex-col justify-center items-center  gap-2">
    <span className='border-2 border-gray-200 text-4xl p-2 rounded-md'>{props.icon}</span>
    <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 text-center">{props.title}</h5>
   
    <p className="mb-3 font-normal text-gray-500 text-center ">{props.description}</p>
    
    <span className="text-md flex items-center gap-2 text-purpleText px-4 py-1.5 me-3 font-semibold cursor-pointer hover:text-headerBorder">{props.button} {props.icon1}</span>
    </div>
    
    
    </>
  )
}

export default CardComponent