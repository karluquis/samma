import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StationsPage() {
  const stations = [
    {
      name: "Sukti",
      description: "A space for poetic expression and reading. Immerse yourself in literature, share your favorite passages, and connect with others through their cherished books.",
      location: "Immersed in the lush gardens",
      activities: "Poetry, reading, book sharing"
    },
    {
      name: "Kala",
      description: "Unleash your artistic expression through journaling and painting. Let your creativity flow with guided prompts.",
      location: "Close to the dining area",
      activities: "Journaling, painting, artistic expression"
    },
    {
      name: "Abhyanga",
      description: "Experience the ancient Indian holistic healing practice of warm oil self-massage. A loving act of self-care and rejuvenation where you massage your own body.",
      location: "By the spa area",
      activities: "Self-massage with warm essential oils"
    }
  ]

  return (
    <section className="w-full py-20 bg-[#F5E6D3] text-[#8B4A3B]">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-normal tracking-wide text-center mb-6">Amarte Stations</h2>
        <p className="text-center text-lg mb-12">These nurturing spaces are available throughout your entire retreat journey. We invite you to explore them freely, following your intuition and personal rhythms.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {stations.map((station, index) => (
            <Card key={index} className="bg-[#8B4A3B] text-[#F5E6D3] border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-normal">{station.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{station.description}</p>
                <p className="font-semibold">Location: {station.location}</p>
                <p className="mt-2">Activities: {station.activities}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
