"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoJquery } from "react-icons/bi";
import { Autoplay } from "swiper/modules"
import { IconButton, Tooltip } from "@mui/material"
import 'swiper/css'
import 'swiper/css/pagination'
import './Slider.css'

export default function Slider() {

    // const iconList = [
    //     { id: 0, title: 'Javascript', item: <IoLogoJavascript className="text-yellow-300" /> },
    //     { id: 1, title: 'Typescript', item: <BiLogoTypescript className="text-blue-500" /> },
    //     { id: 2, title: 'React', item: <FaReact className="text-blue-400" /> },
    //     { id: 3, title: 'HTML', item: <IoLogoHtml5 className="text-red-500" /> },
    //     { id: 4, title: 'CSS', item: <FaCss3Alt className="text-blue-500" /> },
    //     { id: 5, title: 'NextJs', item: <RiNextjsFill className="text-white" /> },
    //     { id: 6, title: 'TailwindCss', item: <RiTailwindCssFill className="text-blue-600" /> },
    //     { id: 7, title: 'Bootstrap', item: <FaBootstrap className="text-purple-600" /> },
    //     { id: 8, title: 'Jquery', item: <BiLogoJquery className="text-blue-600" /> }
    // ]

    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            autoplay={{
                delay: 1500,
                pauseOnMouseEnter: true
            }}
            loop={true}
        >
            {/* {iconList.map(item => (
                <SliderItem key={item.id} title={item.title}>
                    {item.item}
                </SliderItem>
            ))} */}
            <SwiperSlide>
                <Tooltip title='Javascript' arrow>
                    <IconButton>
                        <IoLogoJavascript className="text-yellow-300" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
            <SwiperSlide>
                <Tooltip arrow title='Typescript'>
                    <IconButton>
                        <BiLogoTypescript className="text-blue-500" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
            <SwiperSlide>
                <Tooltip arrow title="React">
                    <IconButton>
                        <FaReact className="text-blue-400" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
            <SwiperSlide>
                <Tooltip arrow title="NextJs">
                    <IconButton>
                        <RiNextjsFill className="text-black dark:text-white" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
            <SwiperSlide>
                <Tooltip arrow title='Jquery'>
                    <IconButton>
                        <BiLogoJquery className="text-blue-600" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
            <SwiperSlide>
                <Tooltip arrow title='HTML'>
                    <IconButton>
                        <IoLogoHtml5 className="text-red-500" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
            <SwiperSlide>
                <Tooltip arrow title='CSS'>
                    <IconButton>
                        <FaCss3Alt className="text-blue-500" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
            <SwiperSlide>
                <Tooltip arrow title='Bootstrap'>
                    <IconButton>
                        <FaBootstrap className="text-purple-600" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
            <SwiperSlide>
                <Tooltip arrow title='TailwindCss'>
                    <IconButton>
                        <RiTailwindCssFill className="text-blue-600" />
                    </IconButton>
                </Tooltip>
            </SwiperSlide>
        </Swiper>
    )
}