import Slider from '@/components/Slider/Slider';
import SliderLoading from '@/components/Slider/SliderLoading';
import { Suspense } from 'react';
import UnderSliderSection from '@/components/landing/UnderSliderSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      <Suspense fallback={<SliderLoading />}>
        <Slider />
      </Suspense>
      <UnderSliderSection />
      
    </main>
  )
}
