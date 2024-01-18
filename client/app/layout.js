import Footer from '@/components/Footer/Footer'
import './globals.css'
import './iconfont.css'
import Header from '@/components/Header/Header'

export const metadata = {
  title: 'TableShop',
  description: 'The TableShop website, created by darkysadow. Used: next.js, react-three/fiber, react-three/drei, framer-motion, etc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative w-full h-full font-poppins'>
        <Header />
        <main  className='pt-[86px]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
