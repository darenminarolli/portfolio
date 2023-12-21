import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <p className='w-[505px] text-[#ABB2BF] font-medium text-[16px]'>I’m open to work. If you have a request or question, don’t hesitate to contact me !!</p>
                <div className=' flex flex-col gap-4 border border-[#ABB2BF] p-4'>
                    <h1>Message me here</h1>
                    <h1><span class="material-symbols-outlined">
                    </span> +355 67 632 0588</h1>
                    <h1></h1>
                    <h1 className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" fill="#ABB2BF" />
                        </svg> darenminarolli@gmail.com
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Contact
