import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: "Advent Workshop: God's Design for the Family",
  description: "A promotional website for the Advent Workshop on 'God's Design for the Family' at Holy Korean Martyrs Catholic Church, featuring event details, agenda, and speaker information.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
