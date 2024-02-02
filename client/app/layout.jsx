import Footer from '@/components/Footer/Footer'
import './globals.css'
import './iconfont.css'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import CartSidebar from '@/components/Cart/CartSidebar'
import { StoreProvider } from './redux/provider'

export const metadata = {
  title: 'TableShop',
  description: 'The TableShop website, created by darkysadow. Used: next.js, react-three/fiber, react-three/drei, framer-motion, etc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <body className='relative w-full h-full font-poppins'>
        <Header />
        <main className='pt-[86px]'>
          {children}
        </main>
        <StoreProvider>
          <CartSidebar />
        </StoreProvider>
        <Footer />
      </body>
    </html>
  )
}
