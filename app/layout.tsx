import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

export const metadata: Metadata = {
  title: "P2Nova - Decentralized AI Cloud",
  description:
    "P2Nova is the decentralized AI cloud built on idle devices around the world — enabling developers to train, run, and host applications without centralized control.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${manrope.variable} font-manrope antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
