'use client'

import React, { useState } from 'react'
import { Search, Play } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import VideoConference from './video-conference'
import { Recording } from '@/lib/types'

// Sample recordings data
const recordings: Recording[] = [
    { title: "Algebraic Equations", subject: "Class 7 Math", color: "bg-blue-100", img: "/Mask group.png" },
    { title: "Differential Maths", subject: "Class 7 Math", color: "bg-blue-100", img: "/Mask group.png" },
    { title: "Organic Chemistry", subject: "Class 7 Science", color: "bg-purple-100", img: "/Mask group pink.png" },
    { title: "Trigonometry 101", subject: "Class 7 Math", color: "bg-blue-100", img: "/Mask group.png" },
]



export function ClassRecordings() {
    // State to track the hovered recording index
    const [hoveredRecording, setHoveredRecording] = useState<number | null>(null);
    // State to track if the video dialog is open
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    // State to track the selected recording
    const [selectedRecording, setSelectedRecording] = useState<Recording | null>(null);

    // Function to open the video dialog
    const openVideo = (recording: Recording) => {
        setSelectedRecording(recording);
        setIsVideoOpen(true);
    };

    return (
        <>
            <Card className="col-span-1 bg-transparent border-none shadow-none">
                <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-800">Access Class Recordings</CardTitle>
                </CardHeader>
                <CardContent className="p-4 bg-white py-6 flex flex-col gap-4 rounded-2xl">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input placeholder="Search for class recordings" className="pl-10 bg-white" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Filter By:</span>
                        <div className="md:space-x-2 space-x-1 flex">
                            <Select defaultValue="this-week">
                                <SelectTrigger className="md:w-[120px] w-[90px] bg-white">
                                    <SelectValue placeholder="This week" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="this-week">This week</SelectItem>
                                    <SelectItem value="last-week">Last week</SelectItem>
                                    <SelectItem value="this-month">This month</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="all-subjects">
                                <SelectTrigger className="md:w-[120px] w-[90px] bg-white">
                                    <SelectValue placeholder="All subjects" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all-subjects">All subjects</SelectItem>
                                    <SelectItem value="math">Math</SelectItem>
                                    <SelectItem value="science">Science</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {recordings.map((recording, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between p-2 border-b border-gray-200 ${recording.subject.includes('Math') ? 'hover:border-b hover:border-blue-700' : 'hover:border-b hover:border-[#EC4899]/60'} group`}
                            onMouseEnter={() => setHoveredRecording(index)}
                            onMouseLeave={() => setHoveredRecording(null)}
                        >
                            <div className='space-y-2'>
                                <div className='flex flex-col'>
                                    <p className={`text-xs ${recording.subject.includes('Math') ? 'text-blue-700 group-hover:text-blue-400' : 'text-[#EC4899] group-hover:text-[#EC4899]/60'}`}>{recording.subject}</p>
                                    <h3 className={`font-[900] ${recording.subject.includes('Math') ? 'group-hover:text-blue-700' : 'group-hover:text-[#EC4899]/60'} text-base text-gray-800`}>{recording.title}</h3>
                                </div>
                                <p className="text-xs text-gray-500">24th October, 2024</p>
                            </div>
                            <div
                                className={`relative w-24 h-16 ${recording.color} rounded-md overflow-hidden flex items-center justify-center cursor-pointer`}
                                onClick={() => openVideo(recording)}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                    <img src={recording.img} alt="" />
                                    {hoveredRecording === index ? (
                                        <span className="text-white absolute text-xs">Play Now</span>
                                    ) : (
                                        <Play className="w-5 h-5 absolute text-white bg-black/30 rounded-full p-1 border border-white" fill="white" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen} >
                <DialogContent className="max-w-5xl p-0 [&>button]:text-white rounded-3xl border-none shadow-none bg-transparent">
                    <VideoConference recording={selectedRecording} />
                </DialogContent>
            </Dialog>
        </>
    )
}