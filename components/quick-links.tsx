"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import cn from 'classnames';
import { BellIcon, BookIcon, ContactIcon, WhatsAppIcon } from '@/lib/icons'

// Define the quick links data
const quickLinks = [
    {
        icon: <>{BookIcon}</>,
        title: "Canvas LMS",
        description: "Click here to access your LMS portal for assignments, class recordings and notes.",
        color: "bg-[#4749B3]",
        hoverColor: "hover:bg-white hover:text-[#4749B3]",
    },
    {
        icon: <>{ContactIcon}</>,
        title: "Join Live Class",
        description: "Click here to join your live class session. Please do not share this link.",
        color: "bg-[#E66DFF] order-first md:order-none",
        hoverColor: "hover:bg-white hover:text-[#E66DFF]",
    },
    {
        icon: <>{WhatsAppIcon}</>,
        title: "Contact Teacher",
        description: "Click here to contact your teacher for any doubts or concerns.",
        color: "bg-[#6669FE]",
        hoverColor: "hover:bg-white hover:text-[#6669FE]",
    }
]

export function QuickLinks() {
    // State to manage the dialog open status
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    // State to toggle between dialog contents
    const [dialogToggle, setDialogToggle] = useState(false);

    // Handle click event for "Join Live Class" button
    const handleLiveClassClick = () => {
        setIsDialogOpen(true);
        setDialogToggle(!dialogToggle);
    };

    return (
        <>
            <Card className="col-span-1 bg-transparent p-0 border-none shadow-none">
                <CardHeader className='pb-4'>
                    <CardTitle className="md:text-2xl text-xl font-semibold text-gray-800">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="px-4 rounded-xl flex flex-col gap-2">
                    {quickLinks.map((link, index) => (
                        <Card
                            key={index}
                            className={cn(
                                "flex cursor-pointer text-white items-center md:flex-col md:justify-center md:px-[61px] md:py-[40px] transition-all duration-500 ease-in-out",
                                link.color,
                                link.hoverColor,
                            )}
                            onClick={link.title === "Join Live Class" ? handleLiveClassClick : undefined}
                        >
                            <div className="flex aspect-square h-full flex-shrink-0 items-center justify-center rounded-lg bg-white/20 px-4 py-10 md:w-10 md:bg-transparent md:p-0">
                                <div className="aspect-square w-9 md:h-[26px] md:w-[26px]">
                                    {link.icon}
                                </div>
                            </div>
                            <h2 className="m-6 text-xl font-bold leading-normal md:m-0 md:mt-1 md:text-center md:text-2xl">
                                {link.title}
                            </h2>
                            <p className="hidden text-center text-xs font-normal leading-3 md:block px-4">
                                {link.description}
                            </p>
                        </Card>
                    ))}
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {dialogToggle ? (
                    <DialogContent className="sm:max-w-md p-2 overflow-hidden bg-transparent border-none outline-none shadow-none [&>button]:hidden">
                        <DialogHeader className="text-[#FF10F0] p-4 font-bold rounded-3xl bg-white">
                            <DialogTitle className="flex items-center gap-2 text-lg font-normal">
                                <span className='h-5 w-5'>{BellIcon}</span>
                                <span className='font-bold md:text-lg text-sm'>Class 7 Math is starting in 1 hour, 34 minutes.</span>
                            </DialogTitle>
                        </DialogHeader>
                        <Card className="border-0 shadow-none w-10/12 mx-auto">
                            <CardContent className="pt-6 pb-4 px-4">
                                <div className="flex flex-col items-center text-center">
                                    <p className="md:text-2xl text-xl font-semibold text-blue-700 mb-4 px-6 ">
                                        You can join the live class<br />
                                        5 minutes before it<br />
                                        starts. Please wait.
                                    </p>
                                    <p
                                        onClick={() => setIsDialogOpen(false)}
                                        className="w-24 rounded-full bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 cursor-pointer"
                                    >
                                        Okay
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </DialogContent>
                ) : (
                    <DialogContent className="sm:max-w-[425px] bg-gray-500 text-white border-none outline-none shadow-none [&>button]:hidden">
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                            <span className="w-12 h-12 mb-4" >{ContactIcon}</span>
                            <h2 className="text-2xl font-bold mb-2">No Live Classes</h2>
                            <p className="text-sm">You have no live classes scheduled for today.</p>
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </>
    )
}