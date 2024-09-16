import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

interface GuestInfo {
  guest_name: string;
  hotel_room: string;
}

interface GuestRoomSearchProps {
  onGuestFound: (name: string, roomNumber: string) => void;
}

export function GuestRoomSearch({ onGuestFound }: GuestRoomSearchProps) {
  const [inputName, setInputName] = useState('');
  const [matchingGuests, setMatchingGuests] = useState<GuestInfo[]>([]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setInputName(searchTerm);

    if (searchTerm.length > 0) {
      const { data, error } = await supabase
        .from('yoga_retreat_guests')
        .select('guest_name, hotel_room')
        .ilike('guest_name', `%${searchTerm}%`)
        .limit(5);

      if (error) {
        console.error('Error fetching guests:', error);
      } else {
        setMatchingGuests(data || []);
      }
    } else {
      setMatchingGuests([]);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (matchingGuests.length === 1) {
      const guest = matchingGuests[0];
      onGuestFound(guest.guest_name, guest.hotel_room);
    }
  }

  const handleGuestSelect = (guest: GuestInfo) => {
    onGuestFound(guest.guest_name, guest.hotel_room);
    setInputName(guest.guest_name);
    setMatchingGuests([]);
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
  );
}