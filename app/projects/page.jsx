import React from 'react'
import Cart from '../components/Cart'
import BarberImg from "../../public/barber-project.png"
import AntikImg from "../../public/Antik.PNG"
import Vans from "../../public/vans.png"
import Ai from "../../public/Ai.PNG"
import Dentist from "../../public/Dentist.PNG"
const page = () => {
    return (
        <section className='w-full py-12'>
            <hgroup>
                <h1 className='text-2xl font-semibold not-italic pb-2'><span className='text-[#C778DD]'>/</span>projects</h1>
                <p className='text-base not-italic font-normal ' >List of my projects</p>
            </hgroup>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3  items-start gap-y-8 md:gap-4 ">
                <Cart source={AntikImg} title={'Pub Blog'} endpoint={'https://the-antik.vercel.app/'} tech={'React Next Tailwind'} />
                <Cart source={BarberImg} title={'BarberShop'} endpoint={'https://barbershop-livid.vercel.app/'} tech={'React Next Tailwind'} />
                <Cart source={Vans} title={'Vans Website'} endpoint={'https://daren-vans.netlify.app/'} tech={'React React-Router-V6 Bootstrap '} />
                <Cart source={Ai} title={'Chat Bot'} endpoint={'https://ai-next-huggingface-orpin.vercel.app/'} tech={'React TypeScript Next '} />
                <Cart source={Dentist} title={'Dentsit Blog'} endpoint={'https://dentist-blog.vercel.app/Daren-Test'} tech={'React Next MongoDB Mongoose '} />
            </div>
        </section>
    )
}

export default page
