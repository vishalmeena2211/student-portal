import React from 'react'
import { Announcements } from './announcements'
import { QuickLinks } from './quick-links'
import { ClassRecordings } from './class-recordings'
import { ClassSchedule } from './class-schedule'

export default function Dashboard() {
    return (
        <div className="mx-auto lg:px-16 py-3 px-2 bg-[#F3F4FF]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column: Announcements, QuickLinks (mobile), and ClassSchedule */}
                <div className='space-y-2 md:space-y-0'>
                    <Announcements />
                    <div className='md:hidden'>
                        <QuickLinks />
                    </div>
                    <ClassSchedule />
                </div>

                {/* Middle Column: QuickLinks (desktop) */}
                <div className='md:flex hidden'>
                    <QuickLinks />
                </div>

                {/* Right Column: ClassRecordings */}
                <ClassRecordings />
            </div>
        </div>
    )
}