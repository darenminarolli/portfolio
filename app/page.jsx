import Quote from "./components/ui/Quote"
import SectionDivider from "./components/ui/SectionDivider"
import Cart from "./components/Cart"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
import Headersection from "./components/Headersection"
import Button from "./components/ui/Button"
import ViewMore from "./components/ui/ViewMore"
import BarberImg from "../public/barber-project.png"
import AntikImg from "../public/Antik.PNG"
import Vans from "../public/Capture.PNG"
export default function Home() {
  return (
    <>
      <Headersection/>
      <Quote />
      <section id="projects" className="w-full  ">
      <div className=" flex justify-between items-center">
          <SectionDivider name='projects' />
          <ViewMore/>
        </div>
          {/* <Button name='View all'/> */}
          <a href="/projects" className="md:hidden">View All</a>
        <div className="mt-14 flex flex-col md:flex-row justify-center  items-start gap-y-8 md:gap-4 ">
          <Cart source={AntikImg}  title={'Pub Blog'}    endpoint={'https://the-antik.vercel.app/'} tech={'React Next Tailwind'}/>
          <Cart source={BarberImg} title={'BarberShop'}   endpoint={'https://barbershop-livid.vercel.app/'} tech={'React Next Tailwind'} />
          <Cart source={Vans}      title={'Vans Website'} endpoint={'https://daren-vans.netlify.app/'} tech={'React React-Router-V6 Bootstrap '} />
        </div>
      </section>
      <section id="skills" className="w-full">
      <SectionDivider name='skills' />
        <div className=" w-full md:w-[750px] flex flex-col md:flex-row md:flex-wrap justify-center md:justify-end gap-2 gap-y-6  mb-24 sm:float-right">
          <Skills title='Languages' desc='TypeScript Javascript' />
          <Skills title='Libraries' desc='Bootstrap Tailwind Antd Mui React-Bootstrap React-Router Redux ' />
          <Skills title='Frameworks' desc='React Next ' />
          <Skills title='Additional Skills' desc='Organizational skills, Problem solving, Computer skills, etc... ' />
          <Skills title='Other' desc='Html5 Css Git(Github/Gitlab) MongoDB Mongoose' />
        </div>
      </section>
      <section id="about" className="w-full">
      <SectionDivider name='about'/>
        <About/>
      </section>
      <section id="contacts" className="w-full" >
      <SectionDivider name='contacts'/>
        <Contact/>
      </section>
    </>
  )
}
