import React from 'react'
import Cart from '../components/Cart'
import TextToImg from '../../public/text2image.png'
const page = () => {
    return (
        <section className='w-full py-12'>
            <hgroup>
                <h1 className='text-2xl font-semibold not-italic pb-2'><span className='text-[#C778DD]'>/</span>projects</h1>
                <p className='text-base not-italic font-normal ' >List of my projects</p>
            </hgroup>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3  items-start gap-y-8 md:gap-4 ">
                <Cart source={'https://daren.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAntik.bf8868d5.PNG&w=640&q=75'} title={'Pub Blog'} endpoint={'https://the-antik.vercel.app/'} tech={'React Next Tailwind'} live={true} />
                <Cart source={'https://daren.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbarber-project.c94880ca.png&w=640&q=75'} title={'Barber Shop'} endpoint={'https://barbershop-livid.vercel.app/'} tech={'React Next Tailwind'} live={true} />
                <Cart source={'https://daren.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvans.cf0427a2.png&w=750&q=75'} title={'Vans Website'} endpoint={'https://daren-vans.netlify.app/'} tech={'React React-Router-V6 Bootstrap '} live={true} />
                <Cart source={'https://daren.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAi.3191b629.PNG&w=640&q=75'} title={'Chat Bot'} endpoint={'https://ai-next-huggingface-orpin.vercel.app/'} tech={'React TypeScript Next '}  live={true}/>
                <Cart source={'https://daren.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDentist.63f8b233.PNG&w=640&q=75'} title={'Dentsit Blog'} endpoint={'https://dentist-blog.vercel.app/Daren-Test'} tech={'React Next MongoDB Mongoose '} live={true}/>
                <Cart  source={'https://miro.medium.com/v2/resize:fit:1400/1*f7ztMaMM0etsFHpEfkdiwA.png'} title={'Node, Express Crud App'} endpoint={'https://github.com/darenminarolli/Crud-Node-App'} tech={'Node.js Express.js MongoDB Mongoose'} live={false}/>
                <Cart  source={'https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg'} title={'Text to Image Ai'} endpoint={'https://text2image-beta.vercel.app/'} tech={'Html Css Javascript'} live={true}/>

            </div>
        </section>
    )
}

export default page
