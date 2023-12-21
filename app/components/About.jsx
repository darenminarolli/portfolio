import React from 'react'
import Image from 'next/image'
import Image1 from '../../public/Image1.png'
import Button from './ui/Button'
const About = () => {
  return (
    <>
      <div id='about' className="flex justify-between items-center">
          <article className='flex flex-col gap-4'>
            <p className='text-[#ABB2BF]' >Hello, i’m Daren!</p>
            <p className='text-[#ABB2BF]' >I’m a self-taught front-end developer based in Tirana, Albania. I can develop websites from scratch and raise them into modern user-friendly web experiences.</p>
            <p className='text-[#ABB2BF] pb-6' >Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            <Button name='Read more ->'/>
          </article>
          <Image  src={Image1} width={ 339 } height={ 507 } alt='profile' className='self-start'/>
        </div>
    </>
  )
}

export default About
