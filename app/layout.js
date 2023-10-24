import './globals.scss'
import 'swiper/css';
import { Inter } from 'next/font/google'
import SessionProvider from './components/Provider'
// import {Provider as ReduxProvider} from 'react-redux'
// import store from './store'
import ThemeProvider from './components/ThemeProvider'
import Sidebar from './components/Siderbar'
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
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SessionProvider>
            <main className='flex'>
              <Sidebar />
              <div className='flex-1'>{children}</div>
            </main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
