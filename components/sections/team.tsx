import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin } from "lucide-react"

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Leadership section with Jesee Kuya */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md group hover:shadow-lg transition-all duration-300 border-none shadow-md bg-gray-50 overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E65C2B] to-[#0B1E2D] rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                      <AvatarImage src="/placeholder-user.jpg" alt="Jesee Kuya" />
                      <AvatarFallback className="bg-[#0B1E2D] text-white text-3xl font-space-grotesk">
                        JK
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="font-space-grotesk text-2xl font-bold text-[#0B1E2D] mb-1">Jesee Kuya</h3>
                  <p className="text-[#E65C2B] font-medium mb-4">CTO</p>
                  <div className="w-full pt-4 border-t border-gray-200">
                    <a
                      href="https://www.linkedin.com/in/jesee-kuya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-gray-500 hover:text-[#0077b5] transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Bio */}
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jesee Kuya is an exceptional technologist with deep expertise in cloud systems, networking, and
                distributed computing. As a full-stack engineer and systems architect, he brings the technical precision
                and engineering discipline needed to turn P2Nova’s decentralized cloud vision into a reality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
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
              src="/images/design-mode/image.png"
              alt="Security shield with globe representing team collaboration"
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
