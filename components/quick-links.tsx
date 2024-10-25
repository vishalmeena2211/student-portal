"use client"

import React, { useState } from 'react'
import { BellIcon, Book, Calendar, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Define the quick links data

const quickLinks = [
    {
        icon: Book,
        title: "Canvas LMS",
        description: "Click here to access your LMS portal for assignments, class recordings and notes.",
        color: "bg-[#6366F1]",
        hoverColor: "hover:bg-white hover:text-[#6366F1]",
        newOrder: "2"
    },
    {
        icon: Calendar,
        title: "Join Live Class",
        description: "Click here to join your live class session. Please do not share this link.",
        color: "bg-[#EC4899]",
        hoverColor: "hover:bg-white hover:text-[#EC4899]",
        newOrder: "1"
    },
    {
        icon: MessageCircle,
        title: "Contact Teacher",
        description: "Click here to contact your teacher for any doubts or concerns.",
        color: "bg-[#818CF8]",
        hoverColor: "hover:bg-white hover:text-[#818CF8]",
        newOrder: "3"
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
                    <CardTitle className="text-xl font-semibold">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="px-4 rounded-xl flex flex-col gap-2">
                    {quickLinks.map((link, index) => (
                        <button
                            key={index}
                            className={`w-full p-4 text-white ${link.color} ${link.hoverColor} rounded-2xl transition-colors duration-200 ease-in-out order-${link.newOrder} md:order-none`}
                            onClick={link.title === "Join Live Class" ? handleLiveClassClick : undefined}
                        >
                            <div className="flex md:flex-col items-center">
                                <div className="flex items-center w-full md:flex-col md:items-center">
                                    <link.icon className="md:w-12 md:h-12 w-6 h-6 md:mb-4 mr-4 md:mr-0" />
                                    <span className="md:text-2xl text-xl font-semibold md:mb-2 text-left md:text-center flex-grow">{link.title}</span>
                                </div>
                                <span className="text-sm hidden md:flex">{link.description}</span>
                            </div>
                        </button>
                    ))}
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {dialogToggle ? (
                    <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-none shadow-none [&>button]:hidden">
                        <DialogHeader className="text-[#FF10F0] p-4 font-bold rounded-3xl bg-white">
                            <DialogTitle className="flex items-center gap-2 text-lg font-normal">
                                <BellIcon className="h-5 w-5" />
                                <span className='font-bold'>Class 7 Math is starting in 1 hour, 34 minutes.</span>
                            </DialogTitle>
                        </DialogHeader>
                        <Card className="border-0 shadow-none w-10/12 mx-auto">
                            <CardContent className="pt-6 pb-4 px-4">
                                <div className="flex flex-col items-center text-center">
                                    <p className="text-2xl font-semibold text-blue-700 mb-4 px-6 ">
                                        You can join the live class<br />
                                        5 minutes before it<br />
                                        starts. Please wait.
                                    </p>
                                    <p
                                        onClick={() => setIsDialogOpen(false)}
                                        className="w-24 rounded-full bg-blue-600 text-white hover:bg-blue-700 px-3 py-2"
                                    >
                                        Okay
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </DialogContent>
                ) : (
                    <DialogContent className="sm:max-w-[425px] bg-gray-500 text-white border-none [&>button]:hidden">
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                            <Calendar className="w-12 h-12 mb-4" />
                            <h2 className="text-2xl font-bold mb-2">No Live Classes</h2>
                            <p className="text-sm">You have no live classes scheduled for today.</p>
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </>
    )
}