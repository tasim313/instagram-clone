import { Inter } from 'next/font/google'
import "../styles/globals.css";
import Head from './head'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
