'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface ScheduleItem {
  time: string;
  activity: string;
}

interface ScheduleData {
  [key: string]: ScheduleItem[];
}

const scheduleData = {
    "Thursday": [
      { time: '17:00', activity: 'Arrival' },
      { time: '17:30', activity: 'Early Dinner' },
      { time: '19:00', activity: 'Candlelight Yoga / Welcome Circle' },
      { time: '20:00', activity: 'Snack' }
    ],
    "Friday (Chakras: Root, Sacral, Solar Plexus)": [
      { time: '06:30', activity: 'Meditation' },
      { time: '07:00', activity: 'Yoga Class' },
      { time: '09:00', activity: 'Breakfast, Journaling' },
      { time: '12:00', activity: 'Sound Healing with optional Microdosing' },
      { time: '14:30', activity: 'Lunch' },
      { time: '17:00', activity: 'Artistic Yoga Class' },
      { time: '19:00', activity: 'Dinner' }
    ],
    "Saturday (Chakras: Heart, Throat, Third Eye)": [
      { time: '06:30', activity: 'Walking meditation' },
      { time: '07:00', activity: 'Yoga Class' },
      { time: '09:00', activity: 'Breakfast, Journaling' },
      { time: '12:00', activity: 'Breathwork + Artistic Restoration' },
      { time: '14:30', activity: 'Lunch' },
      { time: '17:30', activity: 'Cacao Ceremony' },
      { time: '19:00', activity: 'Ecstatic Dance' },
      { time: '20:00', activity: 'Dinner' },
      { time: '21:00', activity: 'Closing Ceremony' }
    ],
    "Sunday (Chakra: Crown)": [
      { time: '06:30', activity: 'Meditation' },
      { time: '07:00', activity: 'Restorative Yoga Class' },
      { time: '09:00', activity: 'Breakfast, Journaling' },
      { time: '12:00', activity: 'Departure' }
    ]
  }

export function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Thursday')

  return (
    <section id="schedule" className="w-full py-20 bg-[#F5E6D3] text-[#8B4A3B]">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-normal tracking-wide text-center mb-12">Amarte Retreat Schedule</h2>
        <div className="bg-[#8B4A3B] text-[#F5E6D3] p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.keys(scheduleData).map((day) => (
              <Button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`${
                  selectedDay === day ? 'bg-[#F5E6D3] text-[#8B4A3B]' : 'bg-[#8B4A3B] text-[#F5E6D3]'
                } hover:bg-[#F5E6D3] hover:text-[#8B4A3B] text-sm md:text-base py-1 px-2 md:py-2 md:px-4`}
              >
                {day.split(' ')[0]}
              </Button>
            ))}
          </div>
          <h3 className="text-2xl font-normal mb-4">{selectedDay}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {scheduleData[selectedDay as keyof typeof scheduleData].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Calendar className="w-6 h-6" />
                <div>
                  <p className="font-semibold">{item.time}</p>
                  <p>{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}