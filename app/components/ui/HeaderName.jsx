import React from 'react'

const HeaderName = () => {
    return (
        <>
            <div className="flex items-center gap-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-4 md:h-4" viewBox="0 0 52 52" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" fill="white" />
                </svg>
                <h1 className="hidden md:block text-base not-italic font-bold leading-normal">Daren</h1>
            </div>
        </>
    )
}

export default HeaderName
