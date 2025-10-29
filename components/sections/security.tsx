export default function SecuritySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1E2D] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Open & Secure by Design.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              P2Nova's open architecture ensures transparency, while encrypted sandboxing keeps every node isolated and
              secure. It's openness without compromise.
            </p>
            <div className="space-y-4">
              {[
                { title: "End-to-End Encryption", desc: "All data is encrypted in transit and at rest" },
                { title: "Sandboxed Execution", desc: "Each node runs in an isolated environment" },
                { title: "Transparent Governance", desc: "Open-source code and community-driven decisions" },
                { title: "Zero-Knowledge Proofs", desc: "Verify computation without revealing data" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-space-grotesk font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VSIMmyx2vPOY4Y5QXqiK3BksZzQd9O.png"
                alt="Security shield with globe representing open and secure design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
