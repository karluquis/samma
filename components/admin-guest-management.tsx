'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

interface GuestInfo {
  guest_id: number;
  guest_name: string;
  hotel_room: string;
}

export function AdminGuestManagement() {
  const [guests, setGuests] = useState<GuestInfo[]>([]);
  const [newGuest, setNewGuest] = useState<{ guest_name: string; hotel_room: string }>({ guest_name: '', hotel_room: '' });

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    const { data, error } = await supabase
      .from('yoga_retreat_guests')
      .select('*')
      .order('guest_name');

    if (error) {
      console.error('Error fetching guests:', error);
    } else {
      setGuests(data || []);
    }
  };

  const handleAddGuest = async () => {
    const { error } = await supabase
      .from('yoga_retreat_guests')
      .insert([newGuest]);

    if (error) {
      console.error('Error adding guest:', error);
    } else {
      fetchGuests();
      setNewGuest({ guest_name: '', hotel_room: '' });
    }
  };

  const handleDeleteGuest = async (guest_id: number) => {
    try {
      const { error } = await supabase
        .from('yoga_retreat_guests')
        .delete()
        .eq('guest_id', guest_id);

      if (error) {
        throw error;
      }

      // Update the local state to remove the deleted guest
      setGuests(guests.filter(guest => guest.guest_id !== guest_id));
    } catch (error) {
      console.error('Error deleting guest:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6 md:space-y-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Guest Management</h2>
      
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-gray-800">Add New Guest</h3>
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <Input
            type="text"
            placeholder="Guest Name"
            value={newGuest.guest_name}
            onChange={(e) => setNewGuest({ ...newGuest, guest_name: e.target.value })}
            className="w-full md:w-auto flex-grow text-gray-800 border-gray-800"
          />
          <Input
            type="text"
            placeholder="Room Number or Name"
            value={newGuest.hotel_room}
            onChange={(e) => setNewGuest({ ...newGuest, hotel_room: e.target.value })}
            className="w-full md:w-auto flex-grow text-gray-800 border-gray-800"
          />
          <Button onClick={handleAddGuest} className="w-full md:w-auto px-6 bg-gray-800 text-white hover:bg-gray-700">Add Guest</Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((guest) => (
              <TableRow key={guest.guest_id}>
                <TableCell className="text-black">{guest.guest_name}</TableCell>
                <TableCell className="text-black">{guest.hotel_room}</TableCell>
                <TableCell>
                  <Button 
                    onClick={() => handleDeleteGuest(guest.guest_id)} 
                    variant="destructive"
                    size="sm"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}