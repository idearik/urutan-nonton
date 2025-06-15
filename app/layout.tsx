import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Urutan Nonton',
  description: 'Direktori urutan nonton film dan anime',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <footer className="text-center text-sm py-4 border-t">
          © 2025 UrutanNonton.com – Sebuah proyek kecil oleh idearik
        </footer>
      </body>
    </html>
  )
}
