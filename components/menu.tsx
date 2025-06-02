"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menuData = {
  "Thursday": {
    "Snack de bienvenida": {
      "Main": [
        "Crudités y hummus de betabel"
      ]
    },
    "Comida": {
      "Main": [
        "Crema de calabaza",
        "Ensalada del huerto",
        "Pollo con flores de cilantro",
        "Tabulé de quinoa",
        "Zanahorias al tahini"
      ]
    },
    "Cena": {
      "Main": [
        "Sopa de jitomate",
        "Mix de tostas: tinga de zanahoria, pimientos con elotes y setas",
        "Ensalada de espinacas y nueces"
      ]
    }
  },
  "Friday": {
    "Abre ojos": {
      "Main": [
        "Fruta con yogurt, granola y miel orgánica",
        "Café, té y jugo verde del huerto"
      ]
    },
    "Desayuno": {
      "Main": [
        "Huevos con brocolini",
        "Pan tostado",
        "Puddin de chía con frutos rojos"
      ]
    },
    "Comida": {
      "Main": [
        "Crema de zanahoria",
        "Ensalada del huerto",
        "Cecina de Valle",
        "Papas al romero"
      ]
    },
    "Cena": {
      "Main": [
        "Sopa de chayote",
        "Calabazas rellenas en salsa de tomate",
        "Carpaccio de betabel"
      ]
    }
  },
  "Saturday": {
    "Abre ojos": {
      "Main": [
        "Fruta con yogurt, granola y miel orgánica",
        "Café, té y jugo verde del huerto"
      ]
    },
    "Desayuno": {
      "Main": [
        "Machacado de verduras con huevo",
        "Quesadillas de flores",
        "Avena con plátano, nuez y coco"
      ]
    },
    "Comida": {
      "Main": [
        "Sopa de hongos",
        "Tostada de flores",
        "Mole de rosas",
        "Arroz salvaje"
      ]
    },
    "Cena": {
      "Main": [
        "Sopa de tortilla",
        "Rollos de acelgas y setas",
        "Ensalada del huerto"
      ]
    }
  },
  "Sunday": {
    "Abre ojos": {
      "Main": [
        "Fruta con yogurt, granola y miel orgánica",
        "Café, té y jugo verde del huerto"
      ]
    },
    "Desayuno": {
      "Main": [
        "Chilaquiles",
        "Huevos al gusto",
        "Pan con crema de cacahuate y plátano"
      ]
    }
  }
}

export function MenuComponent() {
  const [selectedDay, setSelectedDay] = useState('Thursday')

  return (
    <section className="w-full py-20 bg-[#F5E6D3] text-[#8B4A3B]">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-normal tracking-wide text-center mb-12">Nourish Your Body and Soul</h2>
        <div className="bg-[#8B4A3B] text-[#F5E6D3] p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.keys(menuData).map((day) => (
              <Button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`${
                  selectedDay === day ? 'bg-[#F5E6D3] text-[#8B4A3B]' : 'bg-[#8B4A3B] text-[#F5E6D3]'
                } hover:bg-[#F5E6D3] hover:text-[#8B4A3B] text-sm md:text-base py-1 px-2 md:py-2 md:px-4`}
              >
                {day}
              </Button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(menuData[selectedDay as keyof typeof menuData]).map(([meal, courses], index) => (
              <Card key={index} className="bg-transparent text-[#F5E6D3] border border-[#F5E6D3] shadow-sm">
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold mb-2">{meal}</h4>
                  {Object.entries(courses).map(([course, dishes]) => (
                    <div key={course}>
                      <h5 className="text-lg font-medium mt-2 mb-1">{course}</h5>
                      <ul className="list-disc list-inside">
                        {dishes.map((dish, dishIndex) => (
                          <li key={dishIndex}>{dish}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
