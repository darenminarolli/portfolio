import Image from "next/image"
import ProfileImg from '../../public/image.png'
import Button from "./ui/Button"

const Headersection = () => {
  return (
    <>
    <section id="#" className="w-full m-auto flex flex-col md:flex-row md:justify-between md:items-center mt-24">

      <div className=" flex flex-col text-wrap ">
          <h1 className="text-6xl md:text-4xl  font-bold not-italic pb-6">Daren is a <span className="text-[#C778DD]">front-end developer</span></h1>
          <p className="text-[#ABB2BF] break-words text-4xl md:text-2xl md:text-[16px] not-italic font-normal pb-8">He crafts responsive websites where technologies meet creativity</p>
          <Button  name='Contact me!!'/>
        </div>
        <div className="mt-24">
          <Image src={ProfileImg} className="mt-[-100px] py-6" alt="profile" width={457} height={386} />
        </div>
    </section>
    </>
  )
}

export default Headersection
