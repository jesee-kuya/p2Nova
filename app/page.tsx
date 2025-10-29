"use client"
import Header from "@/components/sections/header"
import HeroSection from "@/components/sections/hero"
import ProblemSection from "@/components/sections/problem"
import SolutionSection from "@/components/sections/solution"
import TRMSection from "@/components/sections/trm"
import DevelopersSection from "@/components/sections/developers"
import SecuritySection from "@/components/sections/security"
import FounderSection from "@/components/sections/founder"
import TeamSection from "@/components/sections/team"
import VisionSection from "@/components/sections/vision"
import CTASection from "@/components/sections/cta"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TRMSection />
      <DevelopersSection />
      <SecuritySection />
      <FounderSection />
      <TeamSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </main>
  )
}
