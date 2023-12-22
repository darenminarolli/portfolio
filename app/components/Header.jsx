import HeaderName from "./ui/HeaderName"


const Header = () => {
    return (
        <>
            <nav className="w-[1024px] m-auto py-16 flex justify-around md:justify-between items-end  ">
                <HeaderName/>
                <ul className="flex items-start gap-8">
                    <li><a href="#" className="text-[#ABB2BF] hover:text-[#fff] text-4xl md:text-base "><span className="text-[#C778DD]">#</span>home</a></li>
                    <li><a href="#works" className="text-[#ABB2BF] hover:text-[#fff] text-4xl md:text-base "><span className="text-[#C778DD]">#</span>works</a></li>
                    <li><a href="#about" className="text-[#ABB2BF] hover:text-[#fff] text-4xl md:text-base "><span className="text-[#C778DD]">#</span>about-me</a></li>
                    <li><a href="#contacts" className="text-[#ABB2BF] hover:text-[#fff] text-4xl md:text-base "><span className="text-[#C778DD]">#</span>contacts</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
