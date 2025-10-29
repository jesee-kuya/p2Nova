export default function VisionSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#0B1E2D] to-[#0B1E2D] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <circle cx="600" cy="300" r="300" fill="none" stroke="#1EB39C" strokeWidth="1" opacity="0.3" />
          <circle cx="600" cy="300" r="200" fill="none" stroke="#E65C2B" strokeWidth="1" opacity="0.3" />
          <circle cx="600" cy="300" r="100" fill="none" stroke="#EBD5B3" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-space-grotesk text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-balance">
          Intelligence Without Borders.
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          A world where compute is distributed, accessible, and owned by everyone. Where every connected device
          contributes to a global intelligence network. Where AI power belongs to people, not corporations.
        </p>
      </div>
    </section>
  )
}
