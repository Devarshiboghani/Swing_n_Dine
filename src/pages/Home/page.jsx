import { useEffect } from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import StorySection from './components/StorySection';
import FeaturedCollection from './components/FeaturedCollection';
import StatementPiece from './components/StatementPiece';
import Craftsmanship from './components/Craftsmanship';
import LifestyleSection from './components/LifestyleSection';
import Testimonials from './components/Testimonials';
import SocialGallery from './components/SocialGallery';
import FinalCTA from './components/FinalCTA';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-ivory">
      <Hero />
      <Collections />
      <StorySection />
      <FeaturedCollection />
      <StatementPiece />
      <Craftsmanship />
      <LifestyleSection />
      <Testimonials />
      <SocialGallery />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
