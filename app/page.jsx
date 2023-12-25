import Quote from "./components/ui/Quote"
import SectionDivider from "./components/ui/SectionDivider"
import Cart from "./components/Cart"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
import Headersection from "./components/Headersection"
export default function Home() {
  return (
    <>
      <Headersection/>
      <Quote />
      <section id="projects" className="w-full  ">
      <div className=" flex justify-between items-center">
          <SectionDivider name='projects' />
          <p className=" md:block items-center w-1/4  text-sm sm:text-sm">View all ~~{">"}</p>
        </div>
        <div className="sm:mt-14 flex flex-col md:flex-row justify-center  items-start gap-4 ">
          <Cart />
          <Cart />
          <Cart />
        </div>
      </section>
      <section id="skills" className="w-full">
      <SectionDivider name='skills' />
        <div className=" w-full md:w-[750px] flex flex-col md:flex-row md:flex-wrap justify-center md:justify-end gap-2  mb-24 sm:float-right">
          <Skills title='Languages' desc='TypeScript Javascript' />
          <Skills title='Libraries' desc='Bootstrap Tailwind Antd Mui React-Bootstrap React-Router ' />
          <Skills title='Frameworks' desc='React Next Redux' />
          <Skills title='Additional Skills' desc='Organizational skills, Problem solving, Computer skills, etc... ' />
          <Skills title='Other' desc='Html5 Css Git(Github/Gitlab)' />
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
