'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Schedule } from '@/components/schedule'
import Image from 'next/image'
import { GuestRoomSearch } from '@/components/guest-search'
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);


export function LandingPageComponent() {
  const [breatheProgress, setBreatheProgress] = useState(0)
  const [attendeeName, setAttendeeName] = useState('')
  const [attendeeRoom, setAttendeeRoom] = useState('')
  const [attendeeId, setAttendeeId] = useState('')

  const [showJulianPhoto, setShowJulianPhoto] = useState(false)

  useEffect(() => {
    const animationDuration = 16000 // 8 seconds for a full cycle
    const animationInterval = 50 // Update every 50ms for smooth animation

    const timer = setInterval(() => {
      setBreatheProgress((prev) => (prev + (50 / animationDuration) * 100) % 100)
    }, animationInterval)

    // Get attendee id from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
      setAttendeeId(id);
      fetchGuestInfo(id);
    }

    return () => clearInterval(timer)
  }, [])

  const calculateLineHeight = (progress: number): number => {
    // Use a sine wave to create a smooth, oscillating effect
    return 50 + Math.sin((progress / 100) * Math.PI * 2) * 40
  }

  const fetchGuestInfo = async (id: string) => {
    const { data, error } = await supabase
      .from('yoga_retreat_guests')
      .select('guest_name, hotel_room')
      .eq('guest_id', id)
      .single();

    if (error) {
      console.error('Error fetching guest info:', error);
    } else if (data) {
      setAttendeeName(data.guest_name);
      setAttendeeRoom(data.hotel_room);
    }
  }

  const handleGuestFound = (name: string, roomNumber: string) => {
    setAttendeeName(name);
    setAttendeeRoom(roomNumber);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#8B4A3B] text-[#F5E6D3]">      
      <main className="flex-1">
        <section className="w-full h-[80vh] relative">
          <Image
            src="/hero_image.jpg"
            alt="Serene landscape"
            layout="fill"
            objectFit="cover"
            priority
            className="block md:hidden"
          />
          <Image
            src="/hero.jpg"
            alt="Serene landscape"
            layout="fill"
            objectFit="cover"
            priority
            className="hidden md:block"
          />
          <div className="absolute inset-0 bg-[#8B4A3B]/60 flex items-center justify-center">
            <div className="text-center space-y-4 px-4 w-full max-w-screen-sm">
              <div className="mb-4">
                <Image
                  src="/logo_white.png"
                  alt="SAMMA logo"
                  width={180}
                  height={60}
                  className="mx-auto w-[180px] md:w-[240px]"
                />
              </div>
              <p className="text-base md:text-xl font-light mx-auto italic px-4">
                Surrender to the Awakening of Mindful Miracles through the Arts
              </p>
              <Button asChild variant="outline" className="mt-4 bg-transparent text-[#F5E6D3] border-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-[#8B4A3B] transition-all duration-300">
                <Link href="#retreat">Begin Your Journey</Link>
              </Button>
            </div>
          </div>
        </section>
        {attendeeName && attendeeRoom ? (
          <section className="w-full py-8 md:py-10 bg-[#8B4A3B] text-[#F5E6D3]">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-center mb-4 md:mb-6">Welcome, {attendeeName}!</h2>
              <p className="text-lg md:text-xl text-center">Your room is: {attendeeRoom}</p>
            </div>
          </section>
        ) : (
          <section className="w-full py-8 md:py-10 bg-[#8B4A3B] text-[#F5E6D3]">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-center mb-4 md:mb-6">Find Your Room</h2>
              <GuestRoomSearch onGuestFound={handleGuestFound} />
            </div>
          </section>
        )}
        <section className="w-full py-12 md:py-20 bg-[#F5E6D3] text-[#8B4A3B]" id="retreat">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-center mb-8 md:mb-12">Embrace Tranquility</h2>
            <div className="grid gap-6 md:gap-10 md:grid-cols-3">
              <Card className="bg-[#8B4A3B] text-[#F5E6D3] border-none shadow-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-4 md:p-6">
                  <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 10A40 40 0 1 0 50 90A40 40 0 0 1 50 10z" 
                          stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                  </svg>
                  <h3 className="text-lg md:text-xl font-normal text-center">Mindful Practices</h3>
                  <p className="text-sm md:text-base text-center opacity-80">
                    Cultivate presence through guided meditation and gentle yoga flows.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#8B4A3B] text-[#F5E6D3] border-none shadow-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-4 md:p-6">
                  <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" 
                            stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <h3 className="text-lg md:text-xl font-normal text-center">Natural Harmony</h3>
                  <p className="text-sm md:text-base text-center opacity-80">
                    Immerse in the serenity of our lush gardens and serene landscapes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#8B4A3B] text-[#F5E6D3] border-none shadow-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-4 md:p-6">
                  <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 10A40 40 0 1 1 50 90A40 40 0 0 0 50 10z" 
                          stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                  </svg>
                  <h3 className="text-lg md:text-xl font-normal text-center">Inner Awakening</h3>
                  <p className="text-sm md:text-base text-center opacity-80">
                    Discover your true self through transformative workshops and practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 bg-[#8B4A3B] text-[#F5E6D3]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-center mb-8 md:mb-12">Breathe with SAMMA</h2>
            <div className="flex flex-col items-center space-y-6 md:space-y-8">
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <div 
                  className="absolute left-1/2 bottom-0 w-3 md:w-4 bg-[#F5E6D3] transform -translate-x-1/2 transition-all duration-300 ease-in-out rounded-full"
                  style={{ height: `${calculateLineHeight(breatheProgress)}%` }}
                ></div>
              </div>
              <p className="text-sm md:text-base text-center opacity-80 max-w-md">
                Observe the gentle rise and fall of this line. 
                Let it guide your breath, bringing you into the present moment.
              </p>
            </div>
          </div>
        </section>
        <section id="schedule" className="w-full py-12 md:py-20 bg-[#F5E6D3] text-[#8B4A3B]">
          <div className="container px-4 md:px-6 mx-auto">
            <Schedule />
          </div>
        </section>
        <section className="w-full py-12 md:py-20 bg-[#8B4A3B] text-[#F5E6D3]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-center mb-8 md:mb-12">Voices of Transformation</h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <Card className="bg-[#F5E6D3] text-[#8B4A3B] border-none shadow-sm">
                <CardContent className="p-4 md:p-6">
                  <p className="text-base md:text-lg mb-3 md:mb-4 italic">
                    &ldquo;Samma provided a nurturing space for my journey inward. The practices and surroundings allowed me to reconnect with my true self in ways I never imagined possible.&rdquo;
                  </p>
                  <p className="text-sm md:text-base font-light">- Sofia C.</p>
                </CardContent>
              </Card>
              <Card 
                className="bg-[#F5E6D3] text-[#8B4A3B] border-none shadow-sm cursor-pointer" 
                onClick={() => setShowJulianPhoto(!showJulianPhoto)}
              >
                <CardContent className="p-4 md:p-6">
                  <p className="text-base md:text-lg mb-3 md:mb-4 italic">
                    &ldquo;The serenity of Samma is unmatched. From the mindful practices to the stunning natural beauty, every moment here was an opportunity for growth and peace.&rdquo;
                  </p>
                  <p className="text-sm md:text-base font-light">- Julian S.</p>
                </CardContent>
              </Card>
            </div>
            {showJulianPhoto && (
              <div className="mt-6 md:mt-8 relative w-full max-w-md mx-auto aspect-square">
                <Image
                  src="/julian.png"
                  alt="Julian"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </section>
        <section className="w-full py-12 md:py-20 bg-[#F5E6D3] text-[#8B4A3B]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-2xl md:text-3xl font-normal tracking-wide">Need Assistance During Your Retreat?</h2>
              <p className="max-w-[600px] text-base md:text-xl opacity-80">
                For any questions, help, or personalized attention during your retreat, we're here to support you.
              </p>
              <Button asChild size="lg" className="mt-4 md:mt-6 bg-[#8B4A3B] text-[#F5E6D3] hover:bg-[#8B4A3B]/90 transition-colors duration-300">
                <Link href="https://wa.me/525541458117">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}