"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menuData = {
  "Thursday": {
    "Dinner": {
      "Main": [
        "Green Salad",
        "White Fish with Chiltepín",
        "Handmade Tortillas",
        "Rice",
        "Beans",
        "Avocado and Salsas"
      ],
      "Dessert": ["Cacao Mousse"]
    }
  },
  "Friday": {
    "Breakfast": {
      "Main": [
        "Fruit",
        "House Bread with Butter & Jam",
        "Three types of Quesadillas: Huitlacoche, Flor de Calabaza, Oaxaca Cheese",
        "Avocado and Salsas"
      ]
    },
    "Lunch": {
      "Main": [
        "Cold Avocado Soup",
        "Mediterranean Salad",
        "Lentil Meatballs in Tomato Sauce",
        "Handmade Tortillas",
        "Rice"
      ],
      "Dessert": ["Seasonal Ice Cream"]
    },
    "Dinner": {
      "Main": [
        "Ratatouille",
        "Lemon Pasta (With or Without Shrimp)"
      ]
    }
  },
  "Saturday": {
    "Breakfast": {
      "Main": [
        "Mixed Fruit",
        "Avocado Toast with Basil and Mint (With or Without Egg)",
        "Persian Cucumbers with Lemon, Salt, Olive Oil"
      ]
    },
    "Lunch": {
      "Main": [
        "Cold Leek and Cucumber Soup",
        "Mixed Salad",
        "Two types of Tacos: Grilled Mushrooms / Garlic Shrimp",
        "Rice, Beans",
        "Avocado and Salsas"
      ],
      "Dessert": ["Vegan Chocolate Cookies"]
    },
    "Dinner": {
      "Main": [
        "White fish with Lemon & Capers",
        "Asparagus Risotto",
        "Sautéed Zucchini"
      ]
    }
  },
  "Sunday": {
    "Breakfast": {
      "Main": [
        "Mixed Fruit",
        "House Bread with Butter & Jam",
        "Oatmeal Pancakes",
        "Esponjaditas",
        "Eggs"
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