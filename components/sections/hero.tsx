"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-blue-50 pt-32">
      {/* Animated background network */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Network lines */}
          <line
            x1="100"
            y1="100"
            x2="400"
            y2="300"
            stroke="#E65C2B"
            strokeWidth="2"
            opacity="0.4"
            className="animate-network-flow"
          />
          <line
            x1="400"
            y1="300"
            x2="800"
            y2="200"
            stroke="#1EB39C"
            strokeWidth="2"
            opacity="0.4"
            className="animate-network-flow"
          />
          <line
            x1="800"
            y1="200"
            x2="1000"
            y2="500"
            stroke="#0B1E2D"
            strokeWidth="2"
            opacity="0.4"
            className="animate-network-flow"
          />
          <line
            x1="1000"
            y1="500"
            x2="600"
            y2="700"
            stroke="#E65C2B"
            strokeWidth="2"
            opacity="0.4"
            className="animate-network-flow"
          />

          {/* Nodes */}
          <circle cx="100" cy="100" r="6" fill="#E65C2B" filter="url(#glow)" className="animate-glow-pulse" />
          <circle cx="400" cy="300" r="6" fill="#1EB39C" filter="url(#glow)" className="animate-glow-pulse" />
          <circle cx="800" cy="200" r="6" fill="#0B1E2D" filter="url(#glow)" className="animate-glow-pulse" />
          <circle cx="1000" cy="500" r="6" fill="#E65C2B" filter="url(#glow)" className="animate-glow-pulse" />
          <circle cx="600" cy="700" r="6" fill="#1EB39C" filter="url(#glow)" className="animate-glow-pulse" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="font-space-grotesk text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0B1E2D] mb-6 leading-tight text-balance">
          Open. Secure. Powered by Everyone.
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
          P2Nova is the decentralized AI cloud built on idle devices around the world — enabling developers to train,
          run, and host applications without centralized control.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="https://p2novadash.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0B1E2D] text-[#0B1E2D] hover:bg-[#0B1E2D] hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent w-full sm:w-auto"
            >
              Build on P2Nova
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
