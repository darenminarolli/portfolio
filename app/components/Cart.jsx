import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'
import ProjectImg from '../../public/Work.jpg'

const Cart = () => {
  return (
    <>
    <div className=' w-full justify-center border border-[#ABB2BF]'>
        <Image src={ProjectImg}
         alt='cartphoto' 
         width={330} 
         height={201}
         className='w-full'
         />
        <div className='flex gap-2 p-2 border-b border-[#ABB2BF] '>
            <h3 className='text-[#ABB2BF]  not-italic ' >HTML5</h3>
            <h3 className='text-[#ABB2BF]  not-italic ' >TAILWIND</h3>
            <h3 className='text-[#ABB2BF]  not-italic ' >REACT</h3>
            <h3 className='text-[#ABB2BF]  not-italic ' >NEXT</h3>
        </div>
        <div className='p-4 gap-4'>
            <h1 className='text-2xl font-semibold'>ProtectX</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet.</p>
            <Button name='Live <~>'/>
        </div>
    </div>
    </>
  )
}

export default Cart
