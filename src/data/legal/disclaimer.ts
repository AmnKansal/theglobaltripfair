import { BRAND_DOMAIN, BRAND_NAME, COMPANY_NAME } from "./brand"
import type { LegalDoc } from "./types"

export const disclaimerDoc: LegalDoc = {
  slug: "disclaimer",
  title: "Disclaimer",
  intro: `The information provided on ${BRAND_NAME}, operated by ${COMPANY_NAME}, is intended for general travel information, assistance, and booking support purposes only.`,
  sections: [
    {
      id: "general",
      title: "1. General Information",
      blocks: [
        {
          type: "p",
          text: "We make reasonable efforts to ensure that the information available on our website, including flight options, hotel and holiday details, fares, availability, travel-related content, and other details, is accurate and updated. However, we do not guarantee that all information displayed on our website will always be complete, accurate, current, or free from errors.",
        },
        {
          type: "p",
          text: "Travel-related information, including airfare, flight schedules, hotel availability, airline policies, and other travel details, may change at any time without prior notice due to updates from airlines, travel providers, partners, or other external circumstances.",
        },
        {
          type: "p",
          text: `Any reliance on the information provided through ${BRAND_DOMAIN} is solely at your own discretion and risk.`,
        },
        {
          type: "p",
          text: `${COMPANY_NAME} reserves the right to modify, update, remove, or change any website content, services, features, or information at any time without prior notice.`,
        },
      ],
    },
    {
      id: "acceptance",
      title: "2. Acceptance of Disclaimer",
      blocks: [
        {
          type: "p",
          text: `By accessing or using ${BRAND_DOMAIN} and its services, you acknowledge that you have read, understood, and agreed to this Disclaimer, along with our Terms & Conditions and Privacy Policy.`,
        },
        {
          type: "p",
          text: "If you do not agree with any part of this Disclaimer, you should discontinue using our website and services. Your continued use of our website indicates your acceptance of these terms.",
        },
      ],
    },
    {
      id: "liability",
      title: "3. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: `To the maximum extent permitted by applicable laws, ${COMPANY_NAME}, including its affiliates, employees, partners, and service providers, shall not be responsible or liable for any:`,
        },
        {
          type: "ul",
          items: [
            "Direct or indirect losses",
            "Incidental or consequential damages",
            "Loss of information, revenue, or profits",
            "Travel delays, cancellations, or disruptions",
            "Booking-related misunderstandings or errors",
            "Airline or hotel schedule changes, cancellations, or operational changes",
          ],
        },
        {
          type: "p",
          text: `${BRAND_NAME} acts as an intermediary between travelers and third-party travel providers. We do not operate airlines or hotels, control flight schedules, or manage airline or hotel operations, services, or policies.`,
        },
      ],
    },
    {
      id: "errors",
      title: "4. Errors and Inaccuracies",
      blocks: [
        {
          type: "p",
          text: "While we aim to provide accurate and reliable information, our website may occasionally contain:",
        },
        {
          type: "ul",
          items: [
            "Typographical errors",
            "Incorrect pricing details",
            "Outdated information",
            "Technical issues",
            "System-related inaccuracies",
          ],
        },
        {
          type: "p",
          text: `We reserve the right to correct, update, or modify any information at any time, including after a booking request has been submitted. ${COMPANY_NAME} shall not be responsible for any decisions, actions, or consequences resulting from reliance on incomplete, inaccurate, or outdated information.`,
        },
      ],
    },
    {
      id: "advice",
      title: "5. No Professional Advice",
      blocks: [
        {
          type: "p",
          text: `The information provided on ${BRAND_NAME} is intended for general informational purposes only and should not be considered a replacement for professional advice, including:`,
        },
        {
          type: "ul",
          items: [
            "Legal advice",
            "Financial advice",
            "Immigration or visa guidance",
            "Medical or health-related advice",
            "Travel insurance recommendations",
          ],
        },
        {
          type: "p",
          text: "Travelers should consult official sources or qualified professionals for specific requirements related to their individual travel needs and circumstances. Any communication through our website does not establish a professional advisory relationship.",
        },
      ],
    },
    {
      id: "risks",
      title: "6. Travel Risks and User Responsibility",
      blocks: [
        {
          type: "p",
          text: "Travel involves certain risks, changes, and uncertainties that may be beyond our control, including but not limited to:",
        },
        {
          type: "ul",
          items: [
            "Flight delays or cancellations",
            "Weather conditions",
            "Natural disasters",
            "Government restrictions or regulations",
            "Political situations",
            "Health emergencies",
            "Changes in travel requirements",
          ],
        },
        {
          type: "p",
          text: "By using our services, you acknowledge that you are responsible for understanding and managing these risks. We recommend reviewing applicable travel requirements and considering appropriate travel insurance before your trip.",
        },
        {
          type: "p",
          text: "If you make a booking for multiple travelers, you are responsible for ensuring that all passengers understand and agree to the applicable booking terms, conditions, and policies.",
        },
      ],
    },
    {
      id: "third-party",
      title: "7. Third-Party Links and Services",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} may contain links, references, or connections to third-party websites, including airline websites, payment providers, and travel partners. Please note:`,
        },
        {
          type: "ul",
          items: [
            `Third-party websites operate independently from ${COMPANY_NAME}`,
            "We do not control their content, services, policies, or practices",
            "We are not responsible for any actions, decisions, or services provided by third parties",
          ],
        },
        {
          type: "p",
          text: "Any access to external websites or services is made at your own discretion. We recommend reviewing the terms, conditions, and privacy policies of third-party providers before using their services.",
        },
      ],
    },
    {
      id: "availability",
      title: "8. Website Availability and Technical Issues",
      blocks: [
        {
          type: "p",
          text: `We aim to provide reliable access to ${BRAND_DOMAIN}; however, we do not guarantee that the website will always:`,
        },
        {
          type: "ul",
          items: [
            "Be available without interruption",
            "Be free from errors",
            "Operate without technical difficulties",
            "Remain completely secure at all times",
          ],
        },
        {
          type: "p",
          text: `Temporary interruptions may occur due to maintenance, updates, technical issues, or circumstances beyond our control. ${COMPANY_NAME} shall not be liable for any losses, damages, or inconvenience caused due to website downtime, interruptions, or technical problems.`,
        },
      ],
    },
    {
      id: "pricing",
      title: "9. Pricing and Availability Disclaimer",
      blocks: [
        {
          type: "p",
          text: `Flight fares, hotel rates, and availability displayed on ${BRAND_DOMAIN} are dynamic and may change at any time. Please note:`,
        },
        {
          type: "ul",
          items: [
            "Fares and rates are not guaranteed until the booking process is completed and confirmed",
            "Availability may change based on airline or hotel updates, demand, and other factors",
            "Displayed prices may not remain available during the booking process",
          ],
        },
        {
          type: "p",
          text: `${COMPANY_NAME} does not guarantee that displayed fares will remain unchanged until final purchase completion.`,
        },
      ],
    },
    {
      id: "termination",
      title: "10. Suspension or Termination of Access",
      blocks: [
        {
          type: "p",
          text: `${COMPANY_NAME} reserves the right to restrict, suspend, or terminate access to ${BRAND_NAME} or its services without prior notice if:`,
        },
        {
          type: "ul",
          items: [
            "Users violate applicable terms, policies, or agreements",
            "Fraudulent or suspicious activities are detected",
            "The website or services are misused",
            "Applicable laws or regulations are violated",
          ],
        },
        {
          type: "p",
          text: "If you do not agree with our services, policies, or terms, you may discontinue using our website.",
        },
      ],
    },
    {
      id: "indemnification",
      title: "11. Indemnification",
      blocks: [
        {
          type: "p",
          text: `By using ${BRAND_NAME}, you agree to indemnify and hold harmless ${COMPANY_NAME}, its affiliates, employees, and partners from any claims, damages, losses, liabilities, or expenses arising from:`,
        },
        {
          type: "ul",
          items: [
            "Misuse of our website or services",
            "Violation of our terms, policies, or agreements",
            "Violation of applicable laws",
            "Disputes involving third-party travel providers",
          ],
        },
      ],
    },
    {
      id: "contact",
      title: "12. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have any questions, concerns, or requests regarding this Disclaimer, please contact us using the same phone number, email, and address published on this website.",
        },
        { type: "contact" },
      ],
    },
  ],
}
