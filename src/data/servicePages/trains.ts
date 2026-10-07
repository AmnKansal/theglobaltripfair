import { BRAND_NAME, COMPANY_NAME } from "../legal/brand"
import { media } from "../media"
import { contactInfo, trainsDeskPhoneDisplay } from "../contact"
import type { ServiceDoc } from "./types"

export const trainsPage: ServiceDoc = {
  slug: "trains",
  eyebrow: "US train tickets",
  title: "City-centre to city-centre, without the airport shuffle.",
  lead: `Tell us two stations and a date. ${BRAND_NAME} compares published US rail schedules, confirms fares with the carrier, and tickets the journey for you.`,
  intro: [
    "Rail is often the calmer way to move between US cities: you board downtown, skip TSA lines, and watch the corridor go by instead of driving it. Northeast business trips, California coastal hops and longer scenic routes all sit on the same conversation.",
    `${BRAND_NAME} is an independent booking-assistance service operated by ${COMPANY_NAME}. We are not a rail carrier and we are not affiliated with Amtrak or any other operator. You can always buy directly from the railroad. When you book with us, the total — ticket plus any assisted-booking service fee — is quoted in full before you authorize payment.`,
  ],
  heroImage: media.trains,
  heroAlt: "A vintage map of North America used to plan US rail journeys",
  notice:
    "Schedules are taken from the carrier’s published timetable. Seat availability and the fare you pay are confirmed with the carrier when you call. Service fees, when they apply, depend on how complex the itinerary is and are never added after you agree to book.",
  highlights: [
    { title: "Major US corridors", copy: "Northeast, California, the Pacific Northwest, the Midwest and longer cross-country routes on request." },
    { title: "One-way or round trip", copy: "Same-day returns, open-jaws and extra station stops — we build the itinerary around how you actually travel." },
    { title: "Fares confirmed, not guessed", copy: "We do not publish made-up ticket prices. The number you hear is checked with the carrier for your date." },
    { title: "Coach, business and rooms", copy: "Daytime reserved seats or overnight roomettes and bedrooms when the journey runs through the night." },
  ],
  included: [
    "A comparison of useful departures: time of day, journey length and whether you change trains.",
    "Coach, business class or sleeper space confirmed with the carrier before you pay.",
    "Help adding a hotel night or a rental car at either end of the rail segment.",
    "Tickets and confirmation sent to your email, with the carrier’s reference on the file.",
    "Support if you need to change a date inside the railroad’s own rules.",
  ],
  steps: [
    { title: "Name the stations", copy: "Origin, destination, date, one-way or return, and who is travelling — including children or guests who need accessible seating." },
    { title: "We read the timetable", copy: "Your advisor lines up realistic options and flags tight connections or trains that sell out on that day of week." },
    { title: "Fares are confirmed live", copy: "We check availability with the carrier, quote the ticket total and any assistance fee, then ticket only after you agree." },
    { title: "Travel with the references", copy: "Keep the carrier confirmation handy. If a delay cascades, call us and we work the change with the railroad’s policy." },
  ],
  picksTitle: "Corridors travellers start with",
  picksCopy: "These are the routes people ask for first. If your stations are not listed, call anyway — we look up the timetable with you.",
  picks: [
    { title: "Northeast Corridor", copy: "Boston, New York, Philadelphia, Baltimore and Washington — the weekday spine for meetings that should not depend on a runway.", image: media.newYork, imageAlt: "New York skyline, a common Northeast Corridor endpoint" },
    { title: "California", copy: "San Francisco Bay, Los Angeles, San Diego and the Central Coast — city pairs where a train can beat a drive and a short-haul flight.", image: media.sanFrancisco, imageAlt: "San Francisco waterfront and bridge in clear light" },
    { title: "Midwest cities", copy: "Chicago as a hub to Milwaukee, Detroit, St. Louis and beyond, including overnight services that save a hotel night.", image: media.chicago, imageAlt: "Chicago skyline along the water" },
    { title: "Longer scenic routes", copy: "Pacific Northwest, the Southwest and transcontinental trips where the landscape is part of the reason to go by rail.", image: media.swissOffer, imageAlt: "Mountain scenery along a long-distance route" },
  ],
  knowTitle: "Planning a US train trip",
  knowItems: [
    { title: "Arrive downtown", copy: "Most long-distance and corridor trains use stations in the city centre. Build in time for a short walk or taxi rather than an airport transfer." },
    { title: "Seats sell out", copy: "Friday afternoons, Sunday evenings, holidays and any train with sleeper space should be booked early. We will say when a departure is already tight." },
    { title: "Coach vs premium", copy: "Unreserved or reserved coach is the everyday choice. Business class adds a quieter car on some corridors. Rooms include bedding and usually meals on overnight trains." },
    { title: "Bags", copy: "Carry-on rules are gentler than airlines, but storage at your seat is still finite. We remind you of the carrier’s bag policy for that train." },
    { title: "Connections", copy: "A legal connection on the timetable is not always a relaxed one. We prefer a buffer when you are changing stations or travelling with children." },
    { title: "Direct with the carrier", copy: "You are welcome to ticket on the railroad’s own site. Booking through us is for travellers who want a person to compare options and keep flights or hotels on the same trip file." },
  ],
  faqs: [
    { question: "Are you part of Amtrak?", answer: `No. ${BRAND_NAME} is independent. We help you compare published schedules and can ticket through the carrier. The railroad remains responsible for operating the train.` },
    { question: "Why is there sometimes a service fee?", answer: "Assisted booking is optional. When a fee applies, it reflects the work on that itinerary and is quoted with the ticket total before you pay. There is no surprise add-on after authorization." },
    { question: "Can I book a round trip with different return stations?", answer: "Yes. Open-jaw and multi-city rail trips are common. Share the full plan so we do not ticket a simple out-and-back when you actually need two different endpoints." },
    { question: "Do you cover only the Northeast?", answer: "No. The Northeast is the busiest ask, but we also ticket California, Midwest, Pacific Northwest and long-distance routes when the carrier still has space." },
    { question: "What if my train is delayed?", answer: "The carrier’s delay and missed-connection rules apply. Call us with your booking reference and we work the next available option under those rules, including hotels if we booked those too." },
    { question: "Can I add a hotel or car at the other end?", answer: `Yes. Many travellers pair rail with a downtown hotel or a rental for the last stretch. Ask when you call ${trainsDeskPhoneDisplay} and we keep it on one file.` },
  ],
  ctaTitle: "Pick two cities. We will line up the trains.",
  ctaCopy: `Call the train desk on ${trainsDeskPhoneDisplay} or email ${contactInfo.email}. ${COMPANY_NAME} confirms times and fares with the carrier before anything is ticketed.`,
}
