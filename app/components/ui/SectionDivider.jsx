import React from 'react'

const SectionDivider = ({name}) => {
  return (
    <>
      <div className='flex gap-4 w-[701px] items-center   '>
        <h1 className='text-2xl font-medium not-italic'><span className='text-[#C778DD]'>#</span>{name}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD"/>
</svg>
      </div>
    </>
  )
}

export default SectionDivider
