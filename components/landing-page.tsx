'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Feather, Mountain, Sunrise, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function LandingPageComponent() {
  const [breatheProgress, setBreatheProgress] = useState(0)
  const [selectedDay, setSelectedDay] = useState(1)

  useEffect(() => {
    const animationDuration = 16000 // 8 seconds for a full cycle
    const animationInterval = 50 // Update every 50ms for smooth animation

    const timer = setInterval(() => {
      setBreatheProgress((prev) => (prev + (50 / animationDuration) * 100) % 100)
    }, animationInterval)

    return () => clearInterval(timer)
  }, [])

  const calculateLineHeight = (progress: number): number => {
    // Use a sine wave to create a smooth, oscillating effect
    return 50 + Math.sin((progress / 100) * Math.PI * 2) * 40
  }

  const scheduleData: Record<number, Array<{ time: string; activity: string }>> = {
    1: [
      { time: '6:00 AM', activity: 'Morning Meditation' },
      { time: '7:30 AM', activity: 'Yoga Session' },
      { time: '9:00 AM', activity: 'Breakfast' },
      { time: '10:30 AM', activity: 'Nature Walk' },
      { time: '12:30 PM', activity: 'Lunch' },
      { time: '2:00 PM', activity: 'Mindfulness Workshop' },
      { time: '4:00 PM', activity: 'Free Time' },
      { time: '6:00 PM', activity: 'Evening Yoga' },
      { time: '7:30 PM', activity: 'Dinner' },
      { time: '9:00 PM', activity: 'Stargazing Meditation' },
    ],
    2: [
      { time: '6:00 AM', activity: 'Sunrise Yoga' },
      { time: '7:30 AM', activity: 'Meditation Session' },
      { time: '9:00 AM', activity: 'Breakfast' },
      { time: '10:30 AM', activity: 'Mindful Art Workshop' },
      { time: '12:30 PM', activity: 'Lunch' },
      { time: '2:00 PM', activity: 'Guided Hike' },
      { time: '4:00 PM', activity: 'Free Time' },
      { time: '6:00 PM', activity: 'Restorative Yoga' },
      { time: '7:30 PM', activity: 'Dinner' },
      { time: '9:00 PM', activity: 'Sound Bath Meditation' },
    ],
    3: [
      { time: '6:00 AM', activity: 'Morning Meditation' },
      { time: '7:30 AM', activity: 'Vinyasa Flow Yoga' },
      { time: '9:00 AM', activity: 'Breakfast' },
      { time: '10:30 AM', activity: 'Journaling Workshop' },
      { time: '12:30 PM', activity: 'Lunch' },
      { time: '2:00 PM', activity: 'Breathwork Session' },
      { time: '4:00 PM', activity: 'Free Time' },
      { time: '6:00 PM', activity: 'Yin Yoga' },
      { time: '7:30 PM', activity: 'Farewell Dinner' },
      { time: '9:00 PM', activity: 'Closing Ceremony' },
    ],
  }

  return (
  <div className="flex flex-col min-h-screen bg-[#8B4A3B] text-[#F5E6D3]">      
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-[#F5E6D3]/20">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-2xl font-normal tracking-wide">SAMMA</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="#">
            Practice
          </Link>
          <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="#">
            Stay
          </Link>
          <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="#">
            Connect
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-[80vh] relative">
          <Image
            src="https://redearth.in/blog/wp-content/uploads/2023/04/women-meditating-nature-front-view-1-2048x1109.jpg"
            alt="Serene landscape"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-[#8B4A3B]/60 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-normal tracking-wide">
                Find Your Center at SAMMA
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                A sanctuary for mindfulness and self-discovery
              </p>
              <Button asChild variant="outline" className="mt-4 bg-transparent text-[#F5E6D3] border-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-[#8B4A3B] transition-all duration-300">
                <Link href="#retreat">Begin Your Journey</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-[#F5E6D3] text-[#8B4A3B]" id="retreat">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-normal tracking-wide text-center mb-12">Embrace Tranquility</h2>
            <div className="grid gap-10 md:grid-cols-3">
              <Card className="bg-[#8B4A3B] text-[#F5E6D3] border-none shadow-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Feather className="w-12 h-12" />
                  <h3 className="text-xl font-normal text-center">Mindful Practices</h3>
                  <p className="text-center opacity-80">
                    Cultivate presence through guided meditation and gentle yoga flows.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#8B4A3B] text-[#F5E6D3] border-none shadow-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Mountain className="w-12 h-12" />
                  <h3 className="text-xl font-normal text-center">Natural Harmony</h3>
                  <p className="text-center opacity-80">
                    Immerse in the serenity of our mountain sanctuary and forest trails.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#8B4A3B] text-[#F5E6D3] border-none shadow-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Sunrise className="w-12 h-12" />
                  <h3 className="text-xl font-normal text-center">Inner Awakening</h3>
                  <p className="text-center opacity-80">
                    Discover your true self through transformative workshops and practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-[#8B4A3B] text-[#F5E6D3]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-normal tracking-wide text-center mb-12">Breathe with Samma</h2>
            <div className="flex flex-col items-center space-y-8">
              <div className="w-64 h-64 relative">
                <div 
                  className="absolute left-1/2 bottom-0 w-4 bg-[#F5E6D3] transform -translate-x-1/2 transition-all duration-300 ease-in-out rounded-full"
                  style={{ height: `${calculateLineHeight(breatheProgress)}%` }}
                ></div>
              </div>
              <p className="text-center opacity-80 max-w-md">
                Observe the gentle rise and fall of this line. 
                Let it guide your breath, bringing you into the present moment.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-[#F5E6D3] text-[#8B4A3B]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-normal tracking-wide text-center mb-12">Amarte Schedule</h2>
            <div className="bg-[#8B4A3B] text-[#F5E6D3] p-6 rounded-lg shadow-lg">
              <div className="flex justify-center space-x-4 mb-6">
                {[1, 2, 3].map((day) => (
                  <Button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`${selectedDay === day ? 'bg-[#F5E6D3] text-[#8B4A3B]' : 'bg-[#8B4A3B] text-[#F5E6D3]'} hover:bg-[#F5E6D3] hover:text-[#8B4A3B]`}
                  >
                    Day {day}
                  </Button>
                ))}
              </div>
              <h3 className="text-2xl font-normal mb-4">Day {selectedDay} Schedule</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {scheduleData[selectedDay].map((item, index) => (
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
        <section className="w-full py-20 bg-[#8B4A3B] text-[#F5E6D3]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-normal tracking-wide text-center mb-12">Voices of Transformation</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-[#F5E6D3] text-[#8B4A3B] border-none shadow-sm">
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic">
                    &ldquo;Samma provided a nurturing space for my journey inward. The practices and surroundings allowed me to reconnect with my true self in ways I never imagined possible.&rdquo;
                  </p>
                  <p className="font-light">- Amelia R.</p>
                </CardContent>
              </Card>
              <Card className="bg-[#F5E6D3] text-[#8B4A3B] border-none shadow-sm">
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic">
                    &ldquo;The serenity of Samma is unmatched. From the mindful practices to the stunning natural beauty, every moment here was an opportunity for growth and peace.&rdquo;
                  </p>
                  <p className="font-light">- James L.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-[#F5E6D3] text-[#8B4A3B]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-normal tracking-wide">Begin Your Samma Journey</h2>
              <p className="max-w-[600px] text-xl opacity-80">
                Open your heart to transformation and peace. Your path to mindfulness starts here.
              </p>
              <Button asChild size="lg" className="mt-6 bg-[#8B4A3B] text-[#F5E6D3] hover:bg-[#8B4A3B]/90 transition-colors duration-300">
                <Link href="#">Reserve Your Retreat</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full px-4 md:px-6 border-t border-[#F5E6D3]/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">© 2023 Samma Yoga Retreat. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="#">
              Privacy
            </Link>
            <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="#">
              Terms
            </Link>
            <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}