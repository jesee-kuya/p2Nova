export default function Footer() {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/p2nova/" },
    { label: "GitHub", href: "https://github.com/jesee-kuya/p2Nova" },
  ]

  return (
    <footer className="bg-[#051018] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-space-grotesk font-bold text-white mb-2">P2Nova</h3>
            <p className="text-sm text-gray-500">The decentralized AI cloud powered by everyone.</p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} className="hover:text-[#1EB39C] transition-colors">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">Copyright © 2025 P2Nova. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-4 sm:mt-0">Built with ❤️ for the decentralized future.</p>
        </div>
      </div>
    </footer>
  )
}
