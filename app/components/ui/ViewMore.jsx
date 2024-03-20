'use client'
import { useRouter } from "next/navigation"

const ViewMore = () => {
    const router = useRouter()
  return (
    <p className="hidden md:block items-center md:w-[150px] text-sm sm:text-sm cursor-pointer" onClick={()=> router.push('/projects')} >View all ~~{">"}</p>

  )
}

export default ViewMore
