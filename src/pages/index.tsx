import { NextSeo } from 'next-seo';
import { useEffect } from 'react'
import Page from '@/components/page';
import Header from '@/components/header';
import AboutSection from '@/components/about-section';
import TextSection1 from '@/components/text-section-1';
import CarouselSection from '@/components/carousel-section'
import BannerSection from '@/components/banner';
import CardsSection from '@/components/cards-section'
import TextSection2 from '@/components/text-section-2'
import TestimonialSection from '@/components/testimonials-section';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import ContactUs from '@/components/contact-us';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

declare global {
  interface Window {
    netlifyIdentity:any;
  }
}

export default function Home() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])
  return (
    <Page>
      <NextSeo
        title="Sphere Brochure"
        description="Your one-stop internet-enabled toolkit to power strategic decisions"
      />
      <Header />
      <main>
        <AboutSection />
        <TextSection1/>
        <BannerSection/>
        <CarouselSection/>
        <CardsSection/>
        <TextSection2/>
        <CasesSection />
        <TestimonialSection/>
        <ContactUs/>
      </main>
      <Footer/>
    </Page>
  );
}
