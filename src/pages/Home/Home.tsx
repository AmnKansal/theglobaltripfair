import { ContactSection } from "../../components/contact/ContactSection"
import { CtaBand } from "../../components/travel/CtaBand"
import { DestinationGrid } from "../../components/travel/DestinationGrid"
import { ServiceCards } from "../../components/travel/ServiceCards"
import { WhyChooseUs } from "../../components/trust/WhyChooseUs"
import { Hero } from "../../components/hero/Hero"

export function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <WhyChooseUs />
      <DestinationGrid />
      <CtaBand />
      <ContactSection />
    </>
  )
}
