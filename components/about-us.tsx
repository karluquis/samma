import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Daniela Cervantes",
    role: "Meditation & Holistic Wellness",
    bio: "Daniela brings a wealth of experience and a deep passion for holistic well-being and visual arts. Having completed various courses in Mindfullness Meditation and Buddhism, Daniela sees the urge to focus on the deep interconnection between mind and body, achieving self-transformation through self-observation. She also holds a 200-hour Hatha Yoga and 50-hour Yin Yoga Teacher Training Certification.",
    image: "/daniela.jpg"
  },
  {
    name: "Isabella Van Heuven",
    role: "Yoga & Ayurvedic Coaching",
    bio: "A student of life and nature lover, Isabella brings over 900 hours of yoga teacher training and expertise as an Ayurvedic and trauma-informed coach. Her multifaceted approach integrates holistic nutrition, mindfulness, and creative arts, reflecting her commitment to fostering holistic health and well-being.",
    image: "/bella.png"
  },
  {
    name: "Karla Sanchez",
    role: "Sound Healing & Holistic Practices",
    bio: "Karla is dedicated to helping individuals reconnect with their true nature through holistic practices. With certifications in Vinyasa and Hatha Yoga, and a master's in Psychoactive Pharmaceutical Investigation, she brings a unique blend of sound healing, yoga, and plant medicine knowledge to create profound, enriching experiences.",
    image: "/karla.png"
  }
]

export function AboutUsComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#8B4A3B] text-[#F5E6D3]">
      <main className="flex-1">
        <section className="w-full py-20 bg-[#F5E6D3] text-[#8B4A3B]">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-4xl font-normal tracking-wide text-center mb-12">About Us</h1>
            <p className="text-lg text-center max-w-2xl mx-auto mb-16">
              At Samma, we are dedicated to guiding you on a transformative journey of self-discovery and inner peace. Our team of experienced practitioners is here to support you every step of the way.
            </p>
            <div className="grid gap-10 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-[#8B4A3B] text-[#F5E6D3] border-none shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h2 className="text-xl font-normal">{member.name}</h2>
                      <p className="text-sm opacity-80">{member.role}</p>
                      <p className="text-sm">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
