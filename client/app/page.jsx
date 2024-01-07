"use client"
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="container mx-auto relative">
        
        <motion.div 
          initial={{position: 'absolute', opacity: 0, scale: 0.5, left: -100}}
          animate={{position: 'absolute', opacity: 1, scale: 1, left: 0}}
          transition={{duration: 0.5}}
        >
          TEST
        </motion.div>
        
      </div>
    </main>
  )
}
