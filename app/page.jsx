import Image from "next/image"
import ProfileImg from '../public/Image.png'
import Button from "./components/ui/Button"
import Quote from "./components/ui/Quote"
import SectionDivider from "./components/ui/SectionDivider"
import Cart from "./components/Cart"
import Skills from "./components/Skills"
export default function Home() {
  return (
    <>
      <section className=" w-[1024px] m-auto flex flex-col md:flex-row justify-between items-center  mt-24">
        <div className=" ">
          <h1 className="text-4xl md:text-[32px] font-bold leading-[25px] not-italic pb-6">Daren is a <span className="text-[#C778DD]">front-end developer</span></h1>
          <p className="text-[#ABB2BF] text-2xl md:text-[16px] leading-[25px] not-italic font-normal pb-6">He crafts responsive websites where technologies meet creativity</p>
          <Button name='Contact me!!' />
        </div>
        <div className="mt-24">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="156" height="156" viewBox="0 0 156 156" fill="none">
            <mask id="path-1-inside-1_64_1298" fill="white">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z" />
            </mask>
            <path d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z" fill="#C778DD" mask="url(#path-1-inside-1_64_1298)" />
            <mask id="path-3-outside-2_64_1298" maskUnits="userSpaceOnUse" x="76.5" y="0" width="80" height="119" fill="black">
              <rect fill="white" x="76.5" width="80" height="119" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z" />
            </mask>
            <path d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z" fill="#C778DD" mask="url(#path-3-outside-2_64_1298)" />
          </svg> */}
          <Image src={ProfileImg} className="mt-[-100px] " alt="profile" width={457} height={386} />
        </div>
      </section>
        <Quote/>
        <section className="w-[1024px] m-auto ">
        <div className=" flex justify-between items-center mt-24 ">
        <SectionDivider name='projects'/>
        <h1 className="items-center">View all ~~{">"}</h1>
        </div>
        <div className=" mt-24 flex items-start gap-4  ">
         <Cart/>
         <Cart/>
         <Cart/>
        </div>
         <SectionDivider name='skills'/>
         <div className="flex flex-wrap gap-2 float-right">

         <Skills title='Languages' desc='TypeScript Javascript'/>
         <Skills title='Libraries' desc='Bootstrap Tailwind Antd Mui React-Bootstrap '/>
         </div>

        </section>
    </>  
  )
}
