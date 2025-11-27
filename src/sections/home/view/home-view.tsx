'use client';

import HomeHero from '../home-hero';
import HomeWhat from '../home-what';
import HomeTeam from '../home-team';
import HomeVision from '../home-vision';
import HomeTestimonials from '../home-testimonials';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <HomeHero />

      <HomeWhat />

      <HomeVision />

      <HomeTeam />

      <HomeTestimonials />
    </>
  );
}
