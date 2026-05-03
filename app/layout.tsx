import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Endpoint Cost Optimizer — Find Your Most Expensive API Calls',
  description: 'Analyze API usage patterns and costs per endpoint. Get caching strategies and optimization recommendations to cut your API bill.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="591971c2-9c8d-4718-89ab-2eb4b63eb6d2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
