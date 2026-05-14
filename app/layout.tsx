import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Changelog Customer Impact Predictor',
  description: 'Predict which customers will be affected before releasing changes. Built for product managers at B2B SaaS companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0ee22694-5a61-4358-9880-90d0f0d41c2b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
