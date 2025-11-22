import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1E2D] to-[#051018]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-white mb-8 text-balance">
          Join the Decentralized Cloud Revolution.
        </h2>

        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          Be part of the future. Start building on P2Nova today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://dashboard.p2nova.cloud" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#E65C2B] hover:bg-[#d14a1a] text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              Developer Early Access
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#1EB39C] text-[#1EB39C] hover:bg-[#1EB39C] hover:text-[#0B1E2D] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent"
          >
            Read the Whitepaper
          </Button>
        </div>
      </div>
    </section>
  )
}
