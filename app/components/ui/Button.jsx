import React from 'react'

const Button = ({name}) => {
  return (
    <>
     <button style={{border:'1px solid #C778DD'}} className='hidden md:block py-2 px-4 gap-2 items-start inline-flex hover:bg-[#c778dd] hover:bg-opacity-20 ' type='button'>
         {name}
     </button>
    </>
  )
}

export default Button
