export default function TRMSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TPUo7fY87oIqpStEgfjPknsikD6sSq.png"
                alt="Brain hologram representing Tiny Recursive Models"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-[#0B1E2D] mb-6 text-balance">
              Smarter, Not Heavier.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Instead of chasing trillion-parameter models, P2Nova runs lightweight recursive AIs optimized for
              distributed environments — proving that intelligence doesn't need to be massive to be powerful.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Tiny Recursive Models (TRMs) are designed to:</p>
            <ul className="space-y-3">
              {[
                "Run efficiently on edge devices",
                "Scale horizontally across the network",
                "Maintain high performance with minimal resources",
                "Enable real-time inference and training",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#E65C2B] font-bold text-xl mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
