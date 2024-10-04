import React from "react"
import { SwiperSlide } from "swiper/react";
import { Tooltip , IconButton } from "@mui/material";
import '@/app/components/Slider/SliderItem/Slider.css'
import 'swiper/css/pagination'

interface ITitleInfo{
    children: React.ReactNode;
    title: string;
}

export default function SliderItem({title , children}:ITitleInfo) {
    return (
        <SwiperSlide>
            <Tooltip title={title} arrow>
                <IconButton>
                    {children}
                </IconButton>
            </Tooltip>
        </SwiperSlide>
    )
}