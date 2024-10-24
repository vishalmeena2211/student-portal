import React from 'react'
import { Sun, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const announcements = [
    {
        icon: Sun,
        text: "On account of Independence Day, August 15th will be a holiday."
    },
    {
        icon: FileText,
        text: "Reminder to finish your assignments and submit them by Monday."
    }
]

export function Announcements() {
    return (
        <Card className="col-span-1 bg-transparent p-0 border-none shadow-none">
            <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800">Announcements</CardTitle>
            </CardHeader >
            <CardContent className='bg-white px-4 py-6 rounded-2xl space-y-1'>
                {announcements.map((announcement, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-[#F3F4FF] p-3 rounded-lg">
                        <announcement.icon className="w-5 h-5 text-indigo-600 mt-0.5" />
                        <p className="text-sm text-indigo-600">{announcement.text}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}