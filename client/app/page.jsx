"use client"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { fadeAnimation, slideAnimation } from '@/config/motion';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';


import Slider from '@/components/Slider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Slider />
    </main>
  )
}
