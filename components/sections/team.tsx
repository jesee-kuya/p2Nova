import { Button } from "@/components/ui/button"

export default function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
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
              src="/images/design-mode/image.png"
              alt="Security shield with globe representing team collaboration"
              className="w-full h-full object-cover rounded-xl mx-0"
            />
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#E65C2B] hover:bg-[#d14a1a] text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Join Our Team
          </Button>
          <p className="text-gray-600 mt-4">
            Email us at{" "}
            <a href="mailto:info@p2nova.cloud" className="text-[#E65C2B] font-semibold hover:underline">
              info@p2nova.cloud
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
