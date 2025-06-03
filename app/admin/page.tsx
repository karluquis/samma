'use client'

import React from 'react';

const guests = [
  { name: "Paola Peralta", room: "Habitación Salvia" },
  { name: "Sofia Sanchez", room: "Habitación Salvia" },
  { name: "Ximena Sanchez", room: "Habitación Salvia" },
  { name: "Leila Muñoz", room: "Habitación Romero" },
  { name: "Pau Muñoz", room: "Habitación Romero" },
  { name: "Meli Cervantes", room: "Habitación Romero" },
  { name: "Alexandra Burillo", room: "Habitación Lavanda" },
  { name: "Isabel Gonzalez", room: "Habitación Lavanda" },
  { name: "Imelda Gonzalez", room: "Habitación Lavanda" },
  { name: "Fer Name", room: "Habitación Cedrón" },
  { name: "Alejandra Name (jr.)", room: "Habitación Cedrón" },
  { name: "Sofia Name", room: "Habitación Cedrón" },
  { name: "Alberto Jaber", room: "Habitación Bungaló" },
  { name: "Ana Rendon", room: "Habitación Bungaló" },
  { name: "Olivia Peralta", room: "Habitación Cabaña" },
  { name: "Gia Hidalgo", room: "Habitación Cabaña" },
  { name: "Paola Bucay", room: "Habitación Cueva" },
  { name: "Jacqueline Bettech", room: "Habitación Cueva" },
  { name: "Kevin Mishkin", room: "Habitación King Size Cueva A" },
  { name: "Alejandra Name", room: "Habitación King Size Cueva B" },
  { name: "Issac Askenazi", room: "Habitación King Size Cueva D" },
  { name: "Buge Peralta", room: "Habitación King Size Cueva E" },
  { name: "Santiago Vaca", room: "Habitación King Size Cueva F" },
];

export default function AdminGuestsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Room Assignments</h1>
      <table className="w-full border-collapse border border-gray-300 bg-[#F5E6D3] text-[#8B4A3B]">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Guest</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Room</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{guest.name}</td>
              <td className="border border-gray-300 px-4 py-2">{guest.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
