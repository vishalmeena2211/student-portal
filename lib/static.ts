import { Sun, FileText } from 'lucide-react'


// Announcements data
export const announcements = [
    {
        icon: Sun,
        text: "On account of Independence Day, August 15th will be a holiday."
    },
    {
        icon: FileText,
        text: "Reminder to finish your assignments and submit them by Monday."
    }
];


// Initial schedule data
export const schedules = [
    { class: "Class 7, Science | Live Class", time: "Tuesday, 5:00 - 5:50 PM", status: "Yesterday", color: "bg-[#F3F4FF]" },
    { class: "Class 7, Science | Live Class", time: "Tuesday, 6:30 - 7:15 PM", status: "Today", color: "bg-[#E66DFF]" },
    { class: "Class 7, Science | Live Class", time: "Tuesday, 5 - 5:50 PM", status: "Tomorrow", color: "bg-[#F3F4FF]" },
    { class: "Class 7, Science | Live Class", time: "Tuesday, 5 - 5:50 PM", status: "23rd Sept, 2024", color: "bg-[#F3F4FF] text-[#E66DFF]", isLast: true },
];