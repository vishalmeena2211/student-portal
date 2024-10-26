"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { announcements } from '@/lib/static';

// Slider settings for the carousel
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

// Announcements component
export function Announcements() {
    return (
        <Card className="col-span-1 bg-transparent p-0 border-none shadow-none">
            <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800">Announcements</CardTitle>
            </CardHeader>
            <CardContent className='bg-white px-4 py-6 rounded-2xl space-y-1'>
                {/* Announcements for medium and larger screens */}
                <div className="hidden md:block space-y-2">
                    {announcements.map((announcement, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-[#F3F4FF] px-3 py-2 rounded-lg">
                            <announcement.icon className="w-5 h-5 text-[#4749b3] mt-0.5" />
                            <p className="text-sm font-light text-[#4749b3]">{announcement.text}</p>
                        </div>
                    ))}
                </div>
                {/* Announcements for small screens with slider */}
                <div className="block md:hidden">
                    <Slider {...sliderSettings}>
                        {announcements.map((announcement, index) => (
                            <div key={index} className="!flex !items-center w-full h-full !space-x-3 bg-[#F3F4FF] px-3 py-2 rounded-lg">
                                <announcement.icon className="w-5 h-5 text-[#4749b3] mt-0.5" />
                                <p className="text-sm font-light w-fit text-[#4749b3]">{announcement.text}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </CardContent>
        </Card>
    );
}