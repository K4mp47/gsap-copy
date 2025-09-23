"use client"
import NavBar from '@/components/NavBar';
import FlavourSection from '@/sections/FlavourSection';
import HeroSection from '@/sections/HeroSection';
import MessageSection from '@/sections/MessageSection';
import { ScrollSmoother } from 'gsap/all';
import { useEffect } from 'react';
import gsap from 'gsap';
import NutritionSection from '@/sections/NutritionSection';
import BenefitSection from '@/sections/BenefitSection';
import TestimonialSection from '@/sections/TestimonialSection';
import FooterSection from '@/sections/FooterSection';

gsap.registerPlugin(ScrollSmoother);

export default function Page() {
  // Initialize ScrollSmoother
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1.5,
      effects: true,
    });
  }, []);

  return (
    <main>
      <NavBar />
      <div className='smooth-wrapper'>
        <div className='smooth-content'>
          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />
          <BenefitSection />
          <TestimonialSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
