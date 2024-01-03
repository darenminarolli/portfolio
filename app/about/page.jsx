import Image from 'next/image'
import Image1 from '../../public/Image1.png'
import FactsContainer from '../components/ui/FactsContainer'
const page = () => {
    return (
        <>
            <section className='w-full py-12 '>
                <hgroup>
                    <h1 className='text-2xl font-semibold not-italic'><span className='text-[#C778DD]'>/</span>about-me</h1>
                    <p className='text-base not-italic font-normal' >Who am i?</p>
                </hgroup>
                <div className="flex flex-col sm:flex-row justify-between items-center py-4">
                    <article className='flex flex-col gap-4 md:w-[515px] '>
                        <p className='text-[#ABB2BF]' >Hello, i’m Daren!</p>
                        <p className='text-[#ABB2BF]' >I’m a self-taught front-end developer based in Tirana, Albania. I can develop websites from scratch and raise them into modern user-friendly web experiences.</p>
                        <p className='text-[#ABB2BF] pb-6' >Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                    </article>
                    <Image src={Image1} width={339} height={507} alt='profile' className='self-start' />
                </div>
                <article className='pt-24'>
                    <h1 className='text-2xl font-medium not-italic py-4 '><span className='text-[#C778DD]'>#</span>my-fun-facts</h1>
                    <div className='flex flex-col md:flex-row justify-between gap-y-12'>
                        <div className='w-full md:w-[605px] flex flex-wrap gap-4'>
                            <FactsContainer text='Outside-of-Work Interests' />
                            <FactsContainer text='Continuous Learning' />
                            <FactsContainer text='Team Player' />
                            <FactsContainer text='Technology Enthusiast' />
                            <FactsContainer text='Responsive Design Aficionado'/>
                            <FactsContainer text='Tech Bookworm'/>
                            <FactsContainer text='Problem-Solving Prowess' />
                        </div>


                        <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 114 114" fill="none">
                            <mask id="path-1-inside-1_52_1835" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.5 0H85.75H114V28.25V56.5V84.75H85.75H57.5V56.5H85.75V28.25H57.5V0Z" />
                            </mask>
                            <path d="M57.5 0V-1H56.5V0H57.5ZM114 0H115V-1H114V0ZM114 84.75V85.75H115V84.75H114ZM57.5 84.75H56.5V85.75H57.5V84.75ZM57.5 56.5V55.5H56.5V56.5H57.5ZM85.75 56.5V57.5H86.75V56.5H85.75ZM85.75 28.25H86.75V27.25H85.75V28.25ZM57.5 28.25H56.5V29.25H57.5V28.25ZM85.75 -1H57.5V1H85.75V-1ZM114 -1H85.75V1H114V-1ZM115 28.25V0H113V28.25H115ZM115 56.5V28.25H113V56.5H115ZM115 84.75V56.5H113V84.75H115ZM85.75 85.75H114V83.75H85.75V85.75ZM85.75 83.75H57.5V85.75H85.75V83.75ZM58.5 84.75V56.5H56.5V84.75H58.5ZM57.5 57.5H85.75V55.5H57.5V57.5ZM84.75 28.25V56.5H86.75V28.25H84.75ZM57.5 29.25H85.75V27.25H57.5V29.25ZM56.5 0V28.25H58.5V0H56.5Z" fill="#C778DD" mask="url(#path-1-inside-1_52_1835)" />
                            <mask id="path-3-outside-2_52_1835" maskUnits="userSpaceOnUse" x="0" y="27.2501" width="59" height="87" fill="black">
                                <rect fill="white" y="27.2501" width="59" height="87" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 28.2501H29.25H57.5V56.5001H29.25V84.7501H57.5V113H29.25H1V84.7501V56.5001V28.2501Z" />
                            </mask>
                            <path d="M1 28.2501V27.2501H0V28.2501H1ZM57.5 28.2501H58.5V27.2501H57.5V28.2501ZM57.5 56.5001V57.5001H58.5V56.5001H57.5ZM29.25 56.5001V55.5001H28.25V56.5001H29.25ZM29.25 84.7501H28.25V85.7501H29.25V84.7501ZM57.5 84.7501H58.5V83.7501H57.5V84.7501ZM57.5 113V114H58.5V113H57.5ZM1 113H0V114H1V113ZM29.25 27.2501H1V29.2501H29.25V27.2501ZM57.5 27.2501H29.25V29.2501H57.5V27.2501ZM58.5 56.5001V28.2501H56.5V56.5001H58.5ZM29.25 57.5001H57.5V55.5001H29.25V57.5001ZM30.25 84.7501V56.5001H28.25V84.7501H30.25ZM29.25 85.7501H57.5V83.7501H29.25V85.7501ZM56.5 84.7501V113H58.5V84.7501H56.5ZM57.5 112H29.25V114H57.5V112ZM1 114H29.25V112H1V114ZM0 84.7501V113H2V84.7501H0ZM0 56.5001V84.7501H2V56.5001H0ZM0 28.2501V56.5001H2V28.2501H0Z" fill="#C778DD" mask="url(#path-3-outside-2_52_1835)" />
                        </svg>

                    </div>
                </article>
            </section>
        </>
    )
}

export default page
