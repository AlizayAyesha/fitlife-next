import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Fitlife',
  description: 'Your ultimate fitness companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <div suppressHydrationWarning id="root-main">
          {children}
        </div>
      </body>
    </html>
  )
}
