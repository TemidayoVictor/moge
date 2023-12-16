import { Inter } from 'next/font/google'
import './globals.css'
import "../public/style/boxicons/boxicons-2.1.4/boxicons.min.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Madam Dodge',
  description: 'Madam Dodge Web Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}
