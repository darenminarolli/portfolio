import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'


const Cart = ({source, title, desc, endpoint, tech, live}) => {
  return (
<>
  <div className="w-full h-[500px] border-2 border-[#ABB2BF] flex flex-col justify-between">
    <div className="h-[300px]">
      <Image
        src={source}
        alt="cartphoto"
        height={300}
        className="h-full w-full border-b border-[#ABB2BF] object-cover"
      />
    </div>

    <div className="flex gap-2 p-2 border-b border-[#ABB2BF]">
      <h3 className="text-[#ABB2BF] not-italic">{tech}</h3>
    </div>

    <div className="relative flex-1 p-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      
      <div className="absolute left-0 bottom-0 p-4">
        <Button name={live ? 'Live <~>' : 'Code <~>'} endpoint={endpoint} />
      </div>
    </div>
  </div>
</>

  )
}

export default Cart
