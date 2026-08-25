import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ServicesSection } from '@/components/services-section'
import { FeaturedService } from '@/components/featured-service'
import { AboutSection } from '@/components/about-section'
import { ServiceAreas } from '@/components/service-areas'
import { ProcessSection } from '@/components/process-section'
import { Credentials } from '@/components/credentials'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-14 lg:pb-0">
        <Hero />
        <TrustBar />
        <ServicesSection />
        <FeaturedService />
        <AboutSection />
        <ServiceAreas />
        <ProcessSection />
        <Credentials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
