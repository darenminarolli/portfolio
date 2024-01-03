'use client'
import { useRouter } from "next/navigation"

const Button = ({ name, endpoint }) => {
  const router= useRouter()
  return (
    <>
     <button onClick={()=> router.push(`${endpoint}`)} style={{border:'1px solid #C778DD'}} className='w-full md:w-fit py-2  md:px-4 gap-2  inline-flex justify-center sm:justify-start hover:bg-[#c778dd] hover:bg-opacity-20 ' type='button'>
         {name}
     </button>
    </>
  )
}

export default Button
