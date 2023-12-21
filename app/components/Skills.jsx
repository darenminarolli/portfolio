import React from 'react'

const Skills = ({ title, desc }) => {
  return (
    <>
      <article className='w-[240px] border border-[#ABB2BF] py-2 gap-2'>
        <h1 className='border-b border-[#ABB2BF] p-2 text-base font-medium '>{ title }</h1>
        <p className='p-2 flex flex-wrap text-[#ABB2BF] text-base font-medium  '>{ desc }</p>
      </article>
    </>
  )
}

export default Skills
