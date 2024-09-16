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

  const getGuestUrl = (guestId: number) => {
    const rootUrl = window.location.origin;
    return `${rootUrl}?id=${guestId}`;
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Guest Management</h2>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-3 text-gray-800">Add New Guest</h3>
        <div className="flex flex-col space-y-3">
          <Input
            type="text"
            placeholder="Guest Name"
            value={newGuest.guest_name}
            onChange={(e) => setNewGuest({ ...newGuest, guest_name: e.target.value })}
            className="w-full text-gray-800 border-gray-800"
          />
          <Input
            type="text"
            placeholder="Room Number or Name"
            value={newGuest.hotel_room}
            onChange={(e) => setNewGuest({ ...newGuest, hotel_room: e.target.value })}
            className="w-full text-gray-800 border-gray-800"
          />
          <Button onClick={handleAddGuest} className="w-full bg-gray-800 text-white hover:bg-gray-700">Add Guest</Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Guest URL</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((guest) => (
              <TableRow key={guest.guest_id}>
                <TableCell className="text-black">{guest.guest_name}</TableCell>
                <TableCell className="text-black">{guest.hotel_room}</TableCell>
                <TableCell className="text-black">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm truncate">
                      {getGuestUrl(guest.guest_id).split('?')[1]}
                    </span>
                    <Button
                      onClick={() => navigator.clipboard.writeText(getGuestUrl(guest.guest_id))}
                      size="icon"
                      variant="outline"
                      className="h-6 w-6"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                        <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                      </svg>
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <Button 
                    onClick={() => handleDeleteGuest(guest.guest_id)} 
                    variant="destructive"
                    size="sm"
                    className="w-full"
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