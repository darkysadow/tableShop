import './globals.css'
import Header from '@/components/Header/Header'

export const metadata = {
  title: 'TableShop',
  description: 'The TableShop website, created by darkysadow. Used: next.js, react-three/fiber, react-three/drei, framer-motion, etc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
