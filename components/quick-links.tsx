"use client"

import React, { useState } from 'react'
import { Book, Calendar, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const quickLinks = [
    {
        icon: Book,
        title: "Canvas LMS",
        description: "Click here to access your LMS portal for assignments, class recordings and notes.",
        color: "bg-[#6366F1]",
        hoverColor: "hover:bg-white hover:text-[#6366F1]"
    },
    {
        icon: Calendar,
        title: "Join Live Class",
        description: "Click here to join your live class session. Please do not share this link.",
        color: "bg-[#EC4899]",
        hoverColor: "hover:bg-white hover:text-[#EC4899]"
    },
    {
        icon: MessageCircle,
        title: "Contact Teacher",
        description: "Click here to contact your teacher for any doubts or concerns.",
        color: "bg-[#6366F1]",
        hoverColor: "hover:bg-white hover:text-[#6366F1]"
    }
]

export function QuickLinks() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleLiveClassClick = () => {
        setIsDialogOpen(true);
    };

    return (
        <>
            <Card className="col-span-1 bg-transparent p-0 border-none shadow-none">
                <CardHeader className='pb-4'>
                    <CardTitle className="text-xl font-semibold">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 bg-white px-4 py-6 rounded-xl">
                    {quickLinks.map((link, index) => (
                        <button
                            key={index}
                            className={`w-full p-4 text-white ${link.color} ${link.hoverColor} rounded-2xl transition-colors duration-200 ease-in-out`}
                            onClick={link.title === "Join Live Class" ? handleLiveClassClick : undefined}
                        >
                            <div className="flex flex-col items-center text-center">
                                <link.icon className="w-12 h-12 mb-4" />
                                <span className="text-2xl font-semibold mb-2">{link.title}</span>
                                <span className="text-sm">{link.description}</span>
                            </div>
                        </button>
                    ))}
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px] bg-gray-500 text-white border-none">
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                        <Calendar className="w-12 h-12 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">No Live Classes</h2>
                        <p className="text-sm">You have no live classes scheduled for today.</p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}