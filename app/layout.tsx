import type { Metadata, Viewport } from "next"
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { Navigation } from "@/components/navigation"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Globandina | Raíces del Futuro",
  description:
    "Un viaje digital por la región andina colombiana donde la tradición ancestral se encuentra con la tecnología moderna.",
  keywords: [
    "Andes",
    "Colombia",
    "cultura andina",
    "Muisca",
    "Boyacá",
    "Santander",
    "Antioquia",
    "tradición",
    "patrimonio",
  ],
  authors: [{ name: "Globandina" }],
  openGraph: {
    title: "Globandina | Raíces del Futuro",
    description:
      "Un viaje digital por la región andina colombiana: tradición ancestral y tecnología moderna.",
    locale: "es_CO",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
