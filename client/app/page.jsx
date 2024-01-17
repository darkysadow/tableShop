import Slider from '@/components/Slider/Slider';
import SliderLoading from '@/components/Slider/SliderLoading';
import { Suspense } from 'react';
import UnderSliderSection from '@/components/landing/UnderSliderSection';
import Sales from '@/components/landing/Sales';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <Suspense fallback={<SliderLoading />}>
        <Slider />
      </Suspense>
      <UnderSliderSection />
      <Sales />
    </main>
  )
}
