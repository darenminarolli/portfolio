import React from 'react'

const FactsContainer = ({text}) => {
  return (
   <div className='flex p-2 items-start  justify-center gap-2 border border-[#ABB2BF] w-full md:w-fit'>
     <p className='text-[#ABB2BF] text-base font-normal'>{text}</p>
   </div>
  )
}

export default FactsContainer
