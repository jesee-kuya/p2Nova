import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Leadership section with Jesee Kuya */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Clickable) */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <a
                href="https://www.linkedin.com/in/jesee-kuya"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-sm block group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl z-10" />
                <Image
                  src="/images/jesee-kuya.jpg"
                  alt="Jesee Kuya, CTO"
                  width={400}
                  height={500}
                  className="rounded-xl shadow-2xl object-cover h-[500px] w-[400px] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
            </div>

            {/* Right: Text */}
            <div className="order-2 lg:order-2">
              <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-[#0B1E2D] mb-4 text-balance">
                Meet the CTO
              </h2>
              <p className="text-lg font-semibold text-[#E65C2B] mb-6">Jesee Kuya, CTO</p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Jesee Kuya is an exceptional technologist with deep expertise in cloud systems, networking, and
                distributed computing. As a full-stack engineer and systems architect, he brings the technical precision
                and engineering discipline needed to turn P2Nova’s decentralized cloud vision into a reality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                He has worked on projects that blend infrastructure design, AI integration, and scalable backend systems
                — giving him firsthand insight into the pain points of traditional centralized compute models.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-[#0B1E2D] mb-6 text-balance">
            Help Build the Future of AI and Cloud Compute.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We're looking for bold engineers, AI researchers, and dreamers who believe compute should belong to
            everyone.
          </p>
        </div>

        {/* Team illustration */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-2xl h-64 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/secure-network.webp"
              alt="Secure network of connected locks representing decentralized security"
              className="w-full h-full object-cover rounded-xl mx-0"
            />
          </div>
        </div>

        <div className="text-center">
          <a
            href="mailto:okumufrank254@outlook.com?subject=Joining%20the%20P2Nova%20team&body=Hey%2C%20I%27m%20%5BYour%20Name%5D%20I%20would%20like%20to%20talk%20to%20you%20to%20join%20the%20P2Nova%20team..."
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-[#E65C2B] hover:bg-[#d14a1a] text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Join Our Team
            </Button>
          </a>
          <p className="text-gray-600 mt-4">
            Email us at{" "}
            <a
              href="mailto:okumufrank254@outlook.com?subject=Joining%20the%20P2Nova%20team&body=Hey%2C%20I%27m%20%5BYour%20Name%5D%20I%20would%20like%20to%20talk%20to%20you%20to%20join%20the%20P2Nova%20team..."
              className="text-[#E65C2B] font-semibold hover:underline"
            >
              okumufrank254@outlook.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
