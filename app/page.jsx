import Quote from "./components/ui/Quote"
import SectionDivider from "./components/ui/SectionDivider"
import Cart from "./components/Cart"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
import Headersection from "./components/Headersection"
import ViewMore from "./components/ui/ViewMore"
import SafeIndex from '../public/SafeIndex.png'
import Events from "../public/Events.png"
import Eureka from "../public/Eureka.png"
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
          <a href="/projects" className="md:hidden">View All</a>
        <div className="mt-14 flex flex-col md:flex-row justify-center  items-start gap-y-8 md:gap-4 ">
          <Cart source={SafeIndex}  title={'Safe Index'}    endpoint={'https://secure-index.vercel.app'} tech={'React Next Tailwind'} live={true}/>
          <Cart  source={Eureka} title={'Eureka Soft '} endpoint={'https://eureka-dev.vercel.app/'} tech={'React Next.js Tailwind '} live={true}/>
          <Cart source={Events} title={'Events Manager'} endpoint={'https://event-manager-project.vercel.app/'} tech={'React React-Router Tailwind Node Express'} live={true} />
        </div>
      </section>
      <section id="skills" className="w-full">
      <SectionDivider name='skills' />
        <div className=" w-full md:w-[750px] flex flex-col md:flex-row md:flex-wrap justify-center md:justify-end gap-2 gap-y-6  mb-24 sm:float-right">
          <Skills title='Languages' desc='TypeScript Javascript' />
          <Skills title='Libraries' desc='Bootstrap Tailwind Antd Mui React-Bootstrap React-Router Redux ' />
          <Skills title='Frameworks' desc='React Next Node Express' />
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
