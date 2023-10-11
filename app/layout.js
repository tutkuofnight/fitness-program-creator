import './globals.scss'
import { Inter } from 'next/font/google'
import Provider from './components/Provider'
const inter = Inter({ subsets: ['latin'] })
require('dotenv').config()

export const metadata = {
  title: 'Fitness Training & Diet Program Creator',
  description: 'Create your own fitness workout and diet program.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
