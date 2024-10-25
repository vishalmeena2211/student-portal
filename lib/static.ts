import { Book, Calendar, MessageCircle, Sun, FileText } from 'lucide-react'
import { Recording } from './types';
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

// Define the quick links data

export const quickLinks = [
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


// Sample recordings data
export const recordings: Recording[] = [
    { title: "Algebraic Equations", subject: "Class 7 Math", color: "bg-blue-100", img: "/Mask group.png" },
    { title: "Differential Maths", subject: "Class 7 Math", color: "bg-blue-100", img: "/Mask group.png" },
    { title: "Organic Chemistry", subject: "Class 7 Science", color: "bg-purple-100", img: "/Mask group pink.png" },
    { title: "Trigonometry 101", subject: "Class 7 Math", color: "bg-blue-100", img: "/Mask group.png" },
]


// Initial schedule data
export const schedules = [
    { class: "Class 7, Science | Live Class", time: "Tuesday, 5:00 - 5:50 PM", status: "Yesterday", color: "bg-[#F3F4FF]" },
    { class: "Class 7, Science | Live Class", time: "Tuesday, 6:30 - 7:15 PM", status: "Today", color: "bg-[#EC4899]" },
    { class: "Class 7, Science | Live Class", time: "Tuesday, 5 - 5:50 PM", status: "Tomorrow", color: "bg-[#F3F4FF]" },
    { class: "Class 7, Science | Live Class", time: "Tuesday, 5 - 5:50 PM", status: "23rd Sept, 2024", color: "bg-[#F3F4FF] text-[#EC4899]", isLast: true },
  ];