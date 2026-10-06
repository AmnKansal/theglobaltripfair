import { BRAND_NAME, COMPANY_NAME } from "./brand"
import type { AboutDoc } from "./types"

export const aboutDoc: AboutDoc = {
  title: "About Us",
  intro: [
    `At ${BRAND_NAME}, operated by ${COMPANY_NAME}, we believe that planning a journey should be simple, convenient, and stress-free from the very beginning.`,
    "Finding the right flight, stay, or holiday can involve comparing multiple options, understanding different fares, and managing various travel details. Our goal is to make this process easier by helping travelers explore available options and plan their journeys with confidence.",
  ],
  sections: [
    {
      id: "where-we-come-in",
      title: "That’s Where We Come In",
      paragraphs: [
        `${BRAND_NAME} was created with the vision of making travel search and travel planning a smoother experience for travelers worldwide.`,
        "Whether you are planning a vacation, visiting family, traveling for business, or arranging a quick getaway, we help you explore flights, hotels, car rentals, US train tickets, cruises, holiday packages, and transfers — and make informed travel decisions with greater ease.",
      ],
    },
    {
      id: "simple-convenient",
      title: "Making Travel Simple & Convenient",
      paragraphs: [
        "Every journey has a purpose — a new adventure, an important business trip, a family visit, or a dream destination waiting to be discovered.",
        `At ${BRAND_NAME}, we understand that every booking is important. That is why we focus on creating a simple and user-friendly travel experience where travelers can explore options, compare choices, and move forward with their plans more comfortably.`,
        "Our goal is simple: To provide travelers with a convenient booking experience, clear travel information, and reliable assistance whenever they need support.",
      ],
    },
    {
      id: "built-around-travelers",
      title: "Built Around Travelers",
      paragraphs: [
        `${BRAND_NAME} is designed with an understanding of the challenges travelers face while planning their trips.`,
        "From searching for suitable fares to handling booking-related questions, we aim to provide support throughout your travel planning journey.",
        "We focus on creating a dependable platform where travelers can access helpful information, explore travel possibilities, and receive assistance when required.",
        "For us, travel is more than just booking a ticket — it is about helping you begin your journey with confidence and convenience.",
      ],
    },
    {
      id: "vision",
      title: "Our Vision",
      paragraphs: [
        "Our vision is to become a trusted travel partner for travelers seeking convenience, accessibility, and a smooth booking experience.",
        "We aim to support modern travelers by offering a platform built around simplicity, transparency, and customer-focused service.",
        "Every journey begins with a first step, and we strive to make that first step easier by helping travelers plan with confidence.",
      ],
    },
  ],
  whatWeDo: [
    "Explore flight, hotel, car rental, US train, cruise, holiday, and transfer options based on your travel requirements",
    "Find suitable fares for domestic and international journeys",
    "Compare available choices before making travel decisions",
    "Get assistance with booking-related queries",
    "Enjoy a simpler and more convenient travel planning experience",
  ],
  whyChoose: [
    {
      title: "Wide Range of Travel Choices",
      copy: "Explore multiple flight, stay, and holiday options and find choices that match your travel schedule, preferences, and requirements.",
    },
    {
      title: "Simple & Convenient Booking Experience",
      copy: "Our platform is designed to make searching, comparing, and planning your journey easier.",
    },
    {
      title: "Reliable Travel Assistance",
      copy: "Receive support for travel-related questions, booking concerns, and general assistance whenever needed.",
    },
    {
      title: "Clear Travel Information",
      copy: "We focus on providing easy-to-understand information to help travelers make informed decisions.",
    },
    {
      title: "Traveler-Focused Approach",
      copy: "Your travel needs remain at the center of everything we do.",
    },
  ],
  promise: [
    `At ${BRAND_NAME}, operated by ${COMPANY_NAME}, we are committed to creating a smooth, reliable, and traveler-friendly experience.`,
    "As the travel industry continues to evolve, we continue to improve our services to meet changing traveler expectations and provide a more convenient way to plan journeys.",
    "Every journey begins with a single step, and we are here to help make that beginning simple, comfortable, and convenient.",
  ],
}
