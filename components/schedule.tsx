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
    { time: "2:00 PM", activity: "Llegada" },
    { time: "3:00 PM", activity: "Comida de Bienvenida" },
    { time: "4:30 PM", activity: "Recorrido por el Huerto" },
    { time: "5:30 PM", activity: "Yoga – Vinyasa" },
    { time: "7:30 PM", activity: "Cena" },
    { time: "8:30 PM", activity: "Ceremonia de Cacao" }
  ],
  "Friday": [
    { time: "7:00 AM", activity: "Hike" },
    { time: "8:30 AM", activity: "Yoga – Power" },
    { time: "10:00 AM", activity: "Desayuno" },
    { time: "11:00 AM", activity: "Journaling: Roots to Reflection" },
    { time: "12:00 PM", activity: "Downtime (Sukti, Kala, Abhyanga)" },
    { time: "2:30 PM", activity: "Comida" },
    { time: "5:30 PM", activity: "Yoga – Yin + Soundhealing" },
    { time: "7:30 PM", activity: "Cena" }
  ],
  "Saturday": [
    { time: "7:00 AM", activity: "Yoga – Power" },
    { time: "9:30 AM", activity: "Desayuno" },
    { time: "10:30 AM", activity: "Artistic Restoration" },
    { time: "12:00 PM", activity: "Downtime (Sukti, Kala, Abhyanga)" },
    { time: "2:30 PM", activity: "Comida" },
    { time: "4:30 PM", activity: "Nature Immersion" },
    { time: "6:00 PM", activity: "Yoga – Vinyasa" },
    { time: "8:00 PM", activity: "Cena" },
    { time: "9:00 PM", activity: "Círculo de Cierre" }
  ],
  "Sunday": [
    { time: "7:00 AM", activity: "Hike" },
    { time: "8:30 AM", activity: "Yoga – Slow Flow" },
    { time: "10:00 AM", activity: "Desayuno" },
    { time: "12:00 PM", activity: "Check-Out" }
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
