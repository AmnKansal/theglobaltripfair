import { ContactSection } from "../../components/contact/ContactSection"
import { CtaBand } from "../../components/travel/CtaBand"
import { DestinationGrid } from "../../components/travel/DestinationGrid"
import { OffersSection } from "../../components/offers/OffersSection"
import { ServiceCards } from "../../components/travel/ServiceCards"
import { StoriesSection } from "../../components/stories/StoriesSection"
import { WhyChooseUs } from "../../components/trust/WhyChooseUs"
import { Hero } from "../../components/hero/Hero"

export function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <WhyChooseUs />
      <StoriesSection />
      <DestinationGrid />
      <OffersSection />
      <CtaBand />
      <ContactSection />
    </>
  )
}
