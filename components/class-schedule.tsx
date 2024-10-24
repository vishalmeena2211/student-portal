import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from 'lucide-react'

const schedules = [
  { class: "Class 7, Science | Live Class", time: "Tuesday, 5:00 - 5:50 PM", status: "Yesterday", color: "bg-[#F3F4FF]" },
  { class: "Class 7, Science | Live Class", time: "Tuesday, 6:30 - 7:15 PM", status: "Today", color: "bg-[#EC4899]" },
  { class: "Class 7, Science | Live Class", time: "Tuesday, 5 - 5:50 PM", status: "Tomorrow", color: "bg-[#F3F4FF]" },
  { class: "Class 7, Science | Live Class", time: "Tuesday, 5 - 5:50 PM", status: "23rd Sept, 2024", color: "bg-[#F3F4FF] text-[#EC4899]",isLast : true },
]

export function ClassSchedule() {
  return (
    <Card className="col-span-1 md:col-span-3 lg:col-span-1  bg-transparent p-0 border-none shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-800">Your Class Schedule</CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-6 rounded-xl bg-white space-y-2">
        {schedules.map((schedule, index) => (
          <div key={index} className={`${schedule.color} p-3 rounded-xl flex items-center`}>
            <Video className={`w-5 h-5 mr-3 ${schedule.color === "bg-[#EC4899]" ? "text-white" : "text-indigo-600"} ${schedule.isLast ? "text-[#EC4899]" : ""}`} />
            <div className="flex-grow">
              <div className={`text-xs ${schedule.color === "bg-[#EC4899]" ? "text-white/80" : "text-indigo-600"} ${schedule.isLast ? "text-[#EC4899]" : ""}`}>{schedule.class}</div>
              <div className={`font-bold ${schedule.color === "bg-[#EC4899]" ? "text-white" : "text-gray-800"} ${schedule.isLast ? "text-[#EC4899]" : ""}`}>{schedule.time}</div>
            </div>
            <div className={`text-xs ${schedule.color === "bg-[#EC4899]" ? "text-white/80" : "text-gray-500"} ${schedule.isLast ? "text-[#EC4899]" : ""}`}>{schedule.status}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}