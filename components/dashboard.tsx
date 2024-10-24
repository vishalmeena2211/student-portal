import React from 'react'
import { Announcements } from './announcements'
import { QuickLinks } from './quick-links'
import { ClassRecordings } from './class-recordings'
import { ClassSchedule } from './class-schedule'

export default function Dashboard() {
    return (
        <div className="container mx-auto md:px-12 py-3 px-2 bg-[#F3F4FF]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className='space-y-2 md:space-y-0'>
                    <Announcements />
                    <ClassSchedule />
                </div>
                <QuickLinks />
                <ClassRecordings />
            </div>
        </div>
    )
}