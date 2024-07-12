import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Woovi Frontend Engineer Challenge by Pedro Santana',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} w-dvw h-dvh`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
