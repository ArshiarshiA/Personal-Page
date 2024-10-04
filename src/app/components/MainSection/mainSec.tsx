import ServicesCard from '../ServicesCard/ServicesCard';
import Image from 'next/image'
import mainImg from '$/Coding.png'
import secImg from '$/about.png'
import Slider from '@/app/components/Slider/SliderCon/slider'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { PiTreeEvergreenThin } from "react-icons/pi";
import Contact from '../Contact/Contact';

export default function MainSec() {
    return (
        <>
            <section>
                <div className='max-w-[1200px] m-auto flex items-center justify-between gap-10 px-3 max-[758px]:flex-col-reverse max-[758px]:gap-0 max-[758px]:pb-10'>
                    <div className='w-1/2 max-[758px]:w-full'>
                        <div className='uppercase text-4xl'>
                            <p className=''>hey, im <span className='underline'>arshia mansury,</span> a mid-level <span className='text-[#9129d7]'>front-end developer</span>, and i am enjoy to be here.</p>
                            <div className='py-4 flex items-center gap-5'>
                                <a href="https://github.com/ArshiarshiA">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/arshia-mansury-3439ba320/">
                                    <FaLinkedin className='hover:text-blue-500 transition-all' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 max-[758px]:w-full'>
                        <Image src={mainImg} alt='is coding image' className='w-full' />
                    </div>
                </div>
            </section>
            <section id='WhatCanIDo'>
                <div className='max-w-[1200px] m-auto text-center border-b-2 pb-5'>
                    <h1 className='uppercase pb-5 text-xl'>Dominant Technologies</h1>
                    <Slider />
                </div>
            </section>
            <section className='py-3 max-w-[1200px] m-auto px-2'>
                <div id='aboutMe'>
                    <div className='flex max-[763px]:flex-wrap items-center justify-center'>
                        <div className='w-1/2 max-[763px]:w-11/12'>
                            <Image src={secImg} alt='about me image' />
                        </div>
                        <div className='uppercase w-1/2 max-[763px]:w-11/12 text-justify'>
                            <h1 className='text-purple-600 text-4xl mb-3'>Exactly who am I?</h1>
                            <p>I am Arshiya Mansouri, a front-end developer, I am 16 years old and I live in Iran, and I have been working and learning for two years as an enthusiast in the field of technology and the web.By using the knowledge I gained, I effectively meet the needs of business and customers.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='Services' className='py-10 max-w-[1200px] m-auto'>
                <div className='text-center'>
                    <h1 className='text-3xl'>SERVICES</h1>
                    <div className='flex justify-center flex-wrap'>
                        <ServicesCard children={<FaGears />} desc='made your website seo with the best practical' title='SEO' />
                        <ServicesCard children={<PiTreeEvergreenThin />} desc='Ensuring a modern ui ux for your business' title='UI/UX' />
                        <ServicesCard children={<IoCodeSlash />} desc='Building your website with the most modern technologies' title='FRONT-END' />
                        <ServicesCard children={<MdSupportAgent />} desc='Support for two months after delivery of your website' title='SUPPORT' />
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] m-auto pb-10 px-3'>
                <Contact />
            </section>
        </>
    )
}