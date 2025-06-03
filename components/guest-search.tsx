'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

interface GuestInfo {
  guest_name: string
  hotel_room: string
}

const guestList: GuestInfo[] = [
  { guest_name: 'Paola Peralta', hotel_room: 'Habitación Salvia' },
  { guest_name: 'Sofia Sanchez', hotel_room: 'Habitación Salvia' },
  { guest_name: 'Ximena Sanchez', hotel_room: 'Habitación Salvia' },
  { guest_name: 'Leila Muñoz', hotel_room: 'Habitación Romero' },
  { guest_name: 'Pau Muñoz', hotel_room: 'Habitación Romero' },
  { guest_name: 'Meli Cervantes', hotel_room: 'Habitación Romero' },
  { guest_name: 'Alexandra Burillo', hotel_room: 'Habitación Lavanda' },
  { guest_name: 'Isabel Gonzalez', hotel_room: 'Habitación Lavanda' },
  { guest_name: 'Imelda Gonzalez', hotel_room: 'Habitación Lavanda' },
  { guest_name: 'Fer Name', hotel_room: 'Habitación Cedrón' },
  { guest_name: 'Alejandra Name (jr.)', hotel_room: 'Habitación Cedrón' },
  { guest_name: 'Sofia Name', hotel_room: 'Habitación Cedrón' },
  { guest_name: 'Alberto Jaber', hotel_room: 'Habitación Bungaló' },
  { guest_name: 'Ana Rendon', hotel_room: 'Habitación Bungaló' },
  { guest_name: 'Olivia Peralta', hotel_room: 'Habitación Cabaña' },
  { guest_name: 'Gia Hidalgo', hotel_room: 'Habitación Cabaña' },
  { guest_name: 'Paola Bucay', hotel_room: 'Habitación Cueva' },
  { guest_name: 'Jacqueline Bettech', hotel_room: 'Habitación Cueva' },
  { guest_name: 'Kevin Mishkin', hotel_room: 'Habitación King Size Cueva A' },
  { guest_name: 'Alejandra Name', hotel_room: 'Habitación King Size Cueva B' },
  { guest_name: 'Issac Askenazi', hotel_room: 'Habitación King Size Cueva D' },
  { guest_name: 'Buge Peralta', hotel_room: 'Habitación King Size Cueva E' },
  { guest_name: 'Santiago Vaca', hotel_room: 'Habitación King Size Cueva F' }
]

interface GuestRoomSearchProps {
  onGuestFound: (name: string, roomNumber: string) => void
}

export function GuestRoomSearch({ onGuestFound }: GuestRoomSearchProps) {
  const [inputName, setInputName] = useState('')
  const [matchingGuests, setMatchingGuests] = useState<GuestInfo[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    setInputName(searchTerm)

    if (searchTerm.length > 0) {
      const matches = guestList.filter((guest) =>
        guest.guest_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setMatchingGuests(matches)
    } else {
      setMatchingGuests([])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (matchingGuests.length === 1) {
      const guest = matchingGuests[0]
      onGuestFound(guest.guest_name, guest.hotel_room)
    }
  }

  const handleGuestSelect = (guest: GuestInfo) => {
    onGuestFound(guest.guest_name, guest.hotel_room)
    setInputName(guest.guest_name)
    setMatchingGuests([])
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={inputName}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className="w-full px-4 py-2 bg-[#F5E6D3] text-[#8B4A3B] rounded"
        />
        {matchingGuests.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-[#F5E6D3] text-[#8B4A3B] rounded shadow-lg">
            {matchingGuests.map((guest, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-[#8B4A3B] hover:text-[#F5E6D3]"
                onClick={() => handleGuestSelect(guest)}
              >
                {guest.guest_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button type="submit" className="bg-[#F5E6D3] text-[#8B4A3B] hover:bg-[#F5E6D3]/90">
        See Your Room
      </Button>
    </form>
  )
}
