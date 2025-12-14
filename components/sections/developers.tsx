"use client"

import { Globe, Zap, Brain } from "lucide-react"

export default function DevelopersSection() {
  const cards = [
    {
      icon: Globe,
      title: "Host Web Apps",
      description: "Fast, decentralized web hosting powered by the P2Nova network.",
      color: "text-[#1EB39C]", // Teal
    },
    {
      icon: Zap,
      title: "Run AI Inference",
      description: "Real-time distributed execution of your AI models at scale.",
      color: "text-[#E65C2B]", // Copper
    },
    {
      icon: Brain,
      title: "Train Models",
      description: "Global collaborative compute for training your AI models.",
      color: "text-[#0B1E2D]", // Midnight Blue
    },
  ]

  return (
    <section id="docs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-[#0B1E2D] mb-6 text-balance">
            Build, Train, and Deploy.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything developers need to create the next generation of AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <div className={`mb-6 p-4 rounded-full bg-gray-50 w-fit ${card.color}`}>
                <card.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-[#0B1E2D] mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
