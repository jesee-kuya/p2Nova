"use client"

import { Network, Cpu, BrainCircuit } from "lucide-react"

export default function SolutionSection() {
  const steps = [
    {
      icon: Network,
      title: "Connect",
      description: "Link your idle devices to the network",
      color: "text-[#1EB39C]", // Teal
    },
    {
      icon: Cpu,
      title: "Compute",
      description: "Contribute processing power to the cloud",
      color: "text-[#E65C2B]", // Copper
    },
    {
      icon: BrainCircuit,
      title: "Create",
      description: "Build and deploy AI applications",
      color: "text-[#0B1E2D]", // Midnight Blue
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white" id="solution">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-[#0B1E2D] mb-6 text-balance">
            A Living Cloud Built by People.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            P2Nova connects billions of idle devices into a unified, distributed cloud. Developers can deploy, host, and
            train AI seamlessly on this open network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                <div className={`mb-6 p-4 rounded-full bg-gray-50 w-fit ${step.color}`}>
                  <step.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="font-space-grotesk text-2xl font-bold text-[#0B1E2D] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-[#E65C2B] to-[#1EB39C]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
