import React from 'react'
import Cart from '../components/Cart'
import Antik from '../../public/Antik.PNG'
import Dentist from '../../public/Dentist.PNG'
import Vans from '../../public/Capture.PNG'
import Barber from '../../public/barber-project.png'
import Ai from '../../public/Ai.PNG'
import TextToImg from  '../../public/Text2Image.PNG'
import Node from '../../public/Node.PNG'
const page = () => {
    return (
        <section className='w-full py-12'>
            <hgroup>
                <h1 className='text-2xl font-semibold not-italic pb-2'><span className='text-[#C778DD]'>/</span>projects</h1>
                <p className='text-base not-italic font-normal ' >List of my projects</p>
            </hgroup>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3  items-start gap-y-8 md:gap-4 ">
                <Cart source={Antik} title={'Pub Blog'} endpoint={'https://the-antik.vercel.app/'} tech={'React Next Tailwind'} live={true} />
                <Cart source={Barber} title={'Barber Shop'} endpoint={'https://barbershop-livid.vercel.app/'} tech={'React Next Tailwind'} live={true} />
                <Cart source={Vans} title={'Vans Website'} endpoint={'https://daren-vans.netlify.app/'} tech={'React React-Router-V6 Bootstrap '} live={true} />
                <Cart source={Ai} title={'Chat Bot'} endpoint={'https://ai-next-huggingface-orpin.vercel.app/'} tech={'React TypeScript Next '}  live={true}/>
                <Cart source={Dentist} title={'Dentsit Blog'} endpoint={'https://dentist-blog.vercel.app/Daren-Test'} tech={'React Next MongoDB Mongoose '} live={true}/>
                <Cart  source={Node} title={'Node, Express Crud App'} endpoint={'https://github.com/darenminarolli/Crud-Node-App'} tech={'Node.js Express.js MongoDB Mongoose'} live={false}/>
                <Cart  source={TextToImg} title={'Text to Image Ai'} endpoint={'https://text2image-beta.vercel.app/'} tech={'Html Css Javascript'} live={true}/>

            </div>
        </section>
    )
}

export default page
