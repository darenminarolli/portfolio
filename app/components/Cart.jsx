import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'


const Cart = ({source, title, desc, endpoint, tech, live}) => {
  return (
    <>
    <div className=' w-full justify-center h-[500px]  border-2 border-[#ABB2BF]'>
       <div className='h-[300px]'>
        <Image src={source}
         alt='cartphoto' 
         height={300}
         className='h-full border-b w-full border-[#ABB2BF] '
         />
       </div>
        <div className='flex gap-2 p-2 border-b border-[#ABB2BF] object-containt object-center  '>
            <h3 className='text-[#ABB2BF]  not-italic ' >{tech}</h3>
        </div>
        <div className='p-4 gap-4'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet.</p>
            <Button name={live ?'Live <~>':'Code <~>'} endpoint={endpoint}/>
        </div>
    </div>
    </>
  )
}

export default Cart
