"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            {/* Headline */}
            <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E2D] mb-6 leading-tight text-balance">
              Open. Secure. Powered by Everyone.
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed text-pretty">
              P2Nova is the decentralized AI cloud built on idle devices around the world — enabling developers to
              train, run, and host applications without centralized control.
            </p>

            {/* CTA Button */}
            <a href="https://p2novadash.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#0B1E2D] text-[#0B1E2D] hover:bg-[#0B1E2D] hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent"
              >
                Build on P2Nova
              </Button>
            </a>
          </div>

          {/* Right side - Image container */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/p2nova-20logo1.png"
                alt="P2Nova - Decentralized AI Cloud"
                fill
                className="object-contain p-8 bg-white"
                priority
              />
            </div>
            {/* Decorative glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#1EB39C]/20 via-[#E65C2B]/10 to-[#0B1E2D]/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
