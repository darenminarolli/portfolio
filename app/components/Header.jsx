

const Header = () => {
    return (
        <>
            <nav className="w-[1024px] m-auto py-16 flex justify-around md:justify-between items-end  ">
                <div className="flex items-center gap-[8px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-4 md:h-4"  viewBox="0 0 52 52" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" fill="white" />
                    </svg>
                    <h1 className="hidden md:block text-base not-italic font-bold leading-normal">Daren</h1>
                </div>
                <ul className="flex items-start gap-8">
                    <li><a href="#" className="text-[#ABB2BF] hover:text-[#fff] text-4xl md:text-base "><span className="text-[#C778DD]">#</span>home</a></li>
                    <li><a href="#" className="text-[#ABB2BF] hover:text-[#fff] text-4xl md:text-base "><span className="text-[#C778DD]">#</span>works</a></li>
                    <li><a href="#" className="text-[#ABB2BF] hover:text-[#fff] text-4xl md:text-base "><span className="text-[#C778DD]">#</span>about-me</a></li>
                    <li><a href="#" className="text-[#ABB2BF] hover:text-[#fff] text-4xl md:text-base "><span className="text-[#C778DD]">#</span>contacts</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
