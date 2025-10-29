export default function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-[#0B1E2D] mb-6 text-balance">
              Cloud Power Is Locked Away.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              AI and compute are dominated by a few corporations. It's expensive, exclusive, and environmentally costly.
              Billions of devices sit idle while data centers consume massive amounts of energy to power the world's AI.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The future of compute shouldn't be controlled by a handful of companies. It should be open, distributed,
              and accessible to everyone.
            </p>
          </div>

          {/* Right: Visual Contrast */}
          <div className="flex flex-col gap-6">
            <div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BEUxuf4pEJ0KjXe1ZYcIIZDJdK44Zi.png)",
              }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/60 rounded-xl" />
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2"></div>
                <h3 className="font-space-grotesk text-2xl font-bold mb-2">Centralized Data Centers</h3>
                <ul className="space-y-2 text-gray-100">
                  <li>• Expensive infrastructure</li>
                  <li>• High energy consumption</li>
                  <li>• Limited accessibility</li>
                  <li>• Single point of failure</li>
                </ul>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-[#1EB39C] to-[#0B1E2D] rounded-xl p-8 text-white bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z1SGwYs0kzJFnxqYIoMssmiT24qQQr.png)",
              }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/50 rounded-xl" />
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2"></div>
                <h3 className="font-space-grotesk text-2xl font-bold mb-2">P2Nova Network</h3>
                <ul className="space-y-2 text-gray-100">
                  <li>• Affordable & efficient</li>
                  <li>• Sustainable computing</li>
                  <li>• Open to everyone</li>
                  <li>• Resilient & distributed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
