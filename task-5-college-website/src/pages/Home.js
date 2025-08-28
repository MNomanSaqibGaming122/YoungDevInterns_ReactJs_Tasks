import React from 'react';
import HeroSection from '../components/home/HeroSection';
import NewsEventsSection from '../components/home/NewsEventsSection';
import DepartmentsSection from '../components/home/DepartmentsSection';
import TestimonialsSection from '../components/home/Testimonials';
import GallerySection from '../components/home/GallerySection';
import Faq from '../components/home/Faq';
import StatsSection from '../components/home/StatsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <NewsEventsSection />
      <DepartmentsSection />
      <TestimonialsSection />
      <GallerySection />
      <Faq />
      <StatsSection />
    </div>
  );
};

export default Home;