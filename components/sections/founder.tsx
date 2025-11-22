import Image from "next/image"

export default function FounderSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/frank-okumu/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-sm block group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl z-10" />
              <Image
                src="/images/design-mode/My%20ChatGPT%20image1.png"
                alt="Frankie, Founder & CEO"
                width={400}
                height={500}
                className="rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-[#0B1E2D] mb-4 text-balance">
              Meet the Founder
            </h2>
            <p className="text-lg font-semibold text-[#E65C2B] mb-6">Frank Okumu, Founder &amp; CEO</p>

            <blockquote className="text-2xl font-space-grotesk font-bold text-[#0B1E2D] mb-8 leading-relaxed italic">
              "We're redefining who controls intelligence — shifting AI power from data centers to people."
            </blockquote>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm on a mission to democratize AI and compute. With a vision of a world where intelligence is
              distributed, accessible, and owned by everyone, P2Nova represents the future of cloud computing.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              P2Nova is building the infrastructure that will power the next generation of AI applications — one where
              every device, everywhere, can contribute to the global compute network.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
