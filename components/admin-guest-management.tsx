'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

interface GuestInfo {
  id: number;
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

  const handleDeleteGuest = async (id: number) => {
    const { error } = await supabase
      .from('yoga_retreat_guests')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting guest:', error);
    } else {
      fetchGuests();
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-semibold mb-6">Guest Management</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Add New Guest</h3>
        <div className="flex space-x-4 mb-4">
          <Input
            type="text"
            placeholder="Guest Name"
            value={newGuest.guest_name}
            onChange={(e) => setNewGuest({ ...newGuest, guest_name: e.target.value })}
            className="flex-grow text-gray-800 border-gray-800"
          />
          <Input
            type="text"
            placeholder="Room Number or Name"
            value={newGuest.hotel_room}
            onChange={(e) => setNewGuest({ ...newGuest, hotel_room: e.target.value })}
            className="flex-grow text-gray-800 border-gray-800"
          />
          <Button onClick={handleAddGuest} className="px-6 bg-gray-800 text-white hover:bg-gray-700">Add Guest</Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
              <TableRow key={guest.id}>
                <TableCell className="text-black">{guest.guest_name}</TableCell>
                <TableCell className="text-black">{guest.hotel_room}</TableCell>
                <TableCell>
                  <Button 
                    onClick={() => handleDeleteGuest(guest.id)} 
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