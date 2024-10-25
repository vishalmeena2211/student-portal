"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from 'lucide-react';
import { schedules } from '@/lib/static';

export function ClassSchedule() {
  // State to manage the schedules to be displayed
  const [schedulesState, setSchedulesState] = useState(schedules);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // If window width is less than or equal to 768px, show only the last two schedules
      if (window.innerWidth <= 768) {
        setSchedulesState(schedules.slice(-2));
      } else {
        // Otherwise, show all schedules
        setSchedulesState(schedules);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Card className="col-span-1 md:col-span-3 lg:col-span-1 bg-transparent p-0 border-none shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-800">Your Class Schedule</CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-6 rounded-xl bg-white space-y-2">
        {schedulesState.map((schedule, index) => {
          const isHighlighted = schedule.color === "bg-[#EC4899]";
          const isLast = schedule.isLast;

          return (
            <div key={index} className={`${schedule.color} px-3 py-2 rounded-xl flex items-center`}>
              <Video className={`w-5 h-5 mr-3 ${isHighlighted ? "text-white" : "text-indigo-600"} ${isLast ? "!text-[#EC4899]" : ""}`} />
              <div className="flex-grow">
                <div className={`text-xs ${isHighlighted ? "text-white/80" : "text-indigo-600"} ${isLast ? "!text-[#EC4899]" : ""}`}>{schedule.class}</div>
                <div className={`font-bold ${isHighlighted ? "text-white" : "text-gray-800"} ${isLast ? "!text-[#EC4899]" : ""}`}>{schedule.time}</div>
              </div>
              <div className={`text-xs ${isHighlighted ? "text-white/80" : "text-gray-500"} ${isLast ? "!text-[#EC4899]" : ""}`}>{schedule.status}</div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}