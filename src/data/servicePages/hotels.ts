import { BRAND_NAME, COMPANY_NAME } from "../legal/brand"
import { media } from "../media"
import { contactInfo } from "../contact"
import type { ServiceDoc } from "./types"

export const hotelsPage: ServiceDoc = {
  slug: "hotels",
  title: "Hotels worldwide,\nwith the real total up front.",
  lead: `Share the city, dates and who is staying. ${BRAND_NAME} compares properties, explains the rate in plain language, and confirms the stay over the phone.`,
  intro: [
    `${COMPANY_NAME} books hotels and resorts worldwide from Greenwood, Indiana. We look past the headline price: neighbourhood, room type, board basis, taxes and the last day you can cancel without a penalty.`,
    "Airport nights, a week at an all-inclusive, or a block of rooms for a reunion all follow the same pattern — one conversation, a shortlist you can actually compare, and a single number if plans change.",
  ],
  heroImage: media.hotels,
  heroAlt: "A hotel terrace beside a still pool at dusk",
  searchTab: "hotels",
  notice: `${BRAND_NAME} is an independent booking service operated by ${COMPANY_NAME} and is not affiliated with any hotel or hotel chain. Rates and availability are confirmed with the property when you book, and any service fee is included in the total we quote before you pay.`,
  highlights: [
    { title: "City, resort and airport stays", copy: "From a one-night layover to a week on the water, we match the property to the trip — not the other way around." },
    { title: "The real total, up front", copy: "Resort fees, occupancy tax and parking are quoted before you pay, so the folio should match what you heard on the call." },
    { title: "Requests the hotel actually sees", copy: "Connecting rooms, a crib, a quiet floor or late checkout are placed with the property — and we say so if they cannot be guaranteed." },
    { title: "Stay and flight on one file", copy: "When you fly in the same day, we check landing time against check-in so you are not waiting in a lobby with luggage." },
  ],
  included: [
    "A shortlist of two to four hotels with location, room category and what the rate includes.",
    "The cancellation deadline for the exact fare you choose, read back before payment.",
    "Special requests noted on the reservation and, when needed, confirmed with the front desk.",
    "Hotel-only bookings or a stay paired with flights, transfers or a holiday package.",
    "Written confirmation with the property details and our support contacts.",
  ],
  steps: [
    { title: "Tell us the stay", copy: "City or resort area, check-in and check-out, rooms, guests, and anything that matters — a kitchen, a pool, or a specific address." },
    { title: "We compare live options", copy: "Your advisor filters properties that do not fit and walks you through a tight shortlist, including the last cancel-by date." },
    { title: "You choose, we confirm", copy: "We secure the room, add requests, take payment securely, and send confirmation to your email." },
    { title: "We stay reachable", copy: "If a flight moves or the desk has a problem at arrival, you call the same team that booked the stay." },
  ],
  picksTitle: "Stays travellers ask for most",
  picksCopy: "A starting point, not a catalogue. Call with your dates and we price what is actually open.",
  picks: [
    { title: "New York", copy: "Midtown, downtown and airport hotels timed around shows, meetings and early departures.", image: media.newYork, imageAlt: "New York City skyline at dusk" },
    { title: "Dubai", copy: "Marina, downtown and palatial beach resorts — we separate true beachfront from a long taxi ride.", image: media.dubai, imageAlt: "Dubai skyline across the water" },
    { title: "Paris", copy: "Arrondissement hotels with a sense of place, plus practical stays near the major stations.", image: media.paris, imageAlt: "Paris rooftops and a landmark spire" },
    { title: "Island resorts", copy: "Maldives, Bali and similar water stays, with board basis and transfer times made explicit.", image: media.maldivesOffer, imageAlt: "Overwater villas on a tropical lagoon" },
  ],
  knowTitle: "Worth knowing before you book",
  knowItems: [
    { title: "Flexible vs prepaid rates", copy: "A lower prepaid rate is usually charged in full at booking. If dates might move, a refundable rate is the calmer choice — we will show both when they exist." },
    { title: "Resort and destination fees", copy: "Many US, Caribbean and Mexican properties add a mandatory daily fee collected at the hotel. We include it in the total we quote." },
    { title: "Check-in still needs a card", copy: "Hotels ask for photo ID and a card in the guest’s name for an incidentals hold, even when the room is prepaid. Debit holds can take longer to release." },
    { title: "Connecting and accessible rooms", copy: "These are requests the hotel confirms, not a promise a search form can lock. We contact the property and tell you honestly if it cannot be held in advance." },
    { title: "Loyalty numbers", copy: "Give us the membership ID when you book. Some package or deeply discounted rates do not earn nights — we will say which apply." },
    { title: "When to reserve", copy: "School breaks, big events and winter islands fill early. An ordinary city night is often fine a few weeks out; we check your dates live." },
  ],
  faqs: [
    { question: "Can I book a hotel without a flight?", answer: "Yes. Hotel-only reservations are common for road trips, conferences and family visits. Call with the city and dates and we will compare properties while you are on the line." },
    { question: "Are phone bookings refundable?", answer: "It depends on the rate. Refundable fares can usually be cancelled until a stated deadline; prepaid fares are charged up front. We read the rule for your rate before you pay." },
    { question: "Will you tell me about resort fees?", answer: "Yes. Any resort fee, tax or parking charge we can see is disclosed before you confirm, so the number you hear is the number you should expect." },
    { question: "Can you request connecting or accessible rooms?", answer: "We place those requests with the hotel and note them on the reservation. Availability is confirmed at check-in; we will not pretend a request is a guarantee." },
    { question: "How far ahead should I book?", answer: "Two to four months is wise for holidays and popular islands. For a routine city stay, a few weeks is often enough, and same-week rooms still appear — call and we look." },
    { question: "Can you hold rooms for a reunion or group?", answer: "For larger parties we set up a room block so the group stays together until a cutoff date. Flights can sit on the same file if you want everyone arriving together." },
    { question: "What if I land late?", answer: `Call ${contactInfo.phoneDisplay} and we notify the hotel so the room is held past the usual cutoff. If we also booked the flights, we handle both pieces together.` },
    { question: "Can I start with the form on this page?", answer: "Yes — enter your hotel details above, then call or email our team. We check current rates and complete the booking with you." },
  ],
  ctaTitle: "Tell us the city. We will bring the shortlist.",
  ctaCopy: `Call ${contactInfo.phoneDisplay} or write to ${contactInfo.email}. ${COMPANY_NAME} will compare stays for your dates and send confirmation once you choose.`,
}
