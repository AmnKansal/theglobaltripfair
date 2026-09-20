import { BRAND_NAME, COMPANY_NAME } from "./brand"
import type { LegalDoc } from "./types"

export const termsDoc: LegalDoc = {
  slug: "terms",
  title: "Terms & Conditions",
  intro: `Welcome to ${BRAND_NAME}, operated by ${COMPANY_NAME} (“we,” “our,” or “us”). These Terms & Conditions explain the rules and guidelines for using our website, services, and customer support channels. By accessing our website, requesting travel assistance, or making a booking through our platform, you agree to comply with these Terms.`,
  sections: [
    {
      id: "agreement",
      title: "Agreement to these Terms",
      blocks: [
        {
          type: "p",
          text: "If you do not agree with any part of these Terms & Conditions, please do not use our services.",
        },
      ],
    },
    {
      id: "eligibility",
      title: "1. Eligibility to Use Our Services",
      blocks: [
        {
          type: "p",
          text: "To use our services, you confirm that:",
        },
        {
          type: "ul",
          items: [
            "You are at least 18 years old",
            "You have the legal authority to enter into agreements",
            "You are using our services for lawful travel purposes",
          ],
        },
        {
          type: "p",
          text: "By making a reservation, you confirm that the information provided is accurate and that you have authorization to act on behalf of all travelers included in the booking.",
        },
      ],
    },
    {
      id: "nature",
      title: "2. Nature of Our Services",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} operates as an independent travel service provider that helps customers explore, compare, and request travel-related services, including flights, hotels, holiday packages, and airport transfers.`,
        },
        {
          type: "p",
          text: "We act as an intermediary between customers and third-party travel providers, including airlines, hotels, and other travel suppliers. We do not own, operate, or control these third-party services.",
        },
        {
          type: "p",
          text: "All airline tickets, stays, travel products, and services are subject to the terms, conditions, policies, and rules of the respective travel providers.",
        },
      ],
    },
    {
      id: "accuracy",
      title: "3. Accuracy of Information",
      blocks: [
        {
          type: "p",
          text: "Customers are responsible for providing accurate and complete information during the booking process, including:",
        },
        {
          type: "ul",
          items: [
            "Full legal name as shown on travel documents",
            "Correct travel dates and destinations",
            "Contact information",
            "Passenger details",
            "Payment information",
          ],
        },
        {
          type: "p",
          text: `Incorrect or incomplete information may result in additional charges, booking complications, or travel issues. ${COMPANY_NAME} is not responsible for problems caused by incorrect information provided by customers.`,
        },
      ],
    },
    {
      id: "booking",
      title: "4. Booking and Payment",
      blocks: [
        {
          type: "p",
          text: "All fares, availability, and travel options are subject to change until the booking is confirmed. By completing a booking:",
        },
        {
          type: "ul",
          items: [
            "Payment must be successfully processed before confirmation",
            "Prices may change due to airline or supplier updates, availability, or system changes",
            "Booking confirmation will be provided after successful completion",
          ],
        },
        {
          type: "p",
          text: `${COMPANY_NAME} reserves the right to:`,
        },
        {
          type: "ul",
          items: [
            "Cancel bookings affected by pricing errors or technical issues",
            "Request additional verification for security purposes",
            "Decline transactions suspected of fraud or unauthorized activity",
          ],
        },
        {
          type: "p",
          text: "Failure to complete required verification may result in cancellation of the booking.",
        },
      ],
    },
    {
      id: "airline-policies",
      title: "5. Airline Policies and Fare Conditions",
      blocks: [
        {
          type: "p",
          text: "Each airline or travel provider has its own rules regarding:",
        },
        {
          type: "ul",
          items: [
            "Cancellations and changes",
            "Refund eligibility",
            "Baggage allowances",
            "Seat selection",
            "Flight schedule changes",
          ],
        },
        {
          type: "p",
          text: "Fare conditions may vary depending on the selected ticket type. Some fares may include restrictions or may not be refundable. Customers are responsible for reviewing applicable fare rules before completing their booking.",
        },
      ],
    },
    {
      id: "documents",
      title: "6. Travel Documents and Requirements",
      blocks: [
        {
          type: "p",
          text: "Travel requirements may vary depending on destination, nationality, and government regulations. Customers are responsible for ensuring they have:",
        },
        {
          type: "ul",
          items: [
            "Valid identification documents",
            "Required passports",
            "Necessary visas",
            "Health or travel-related documents when applicable",
          ],
        },
        {
          type: "p",
          text: `${COMPANY_NAME} is not responsible for denied boarding, entry restrictions, or delays caused by missing or invalid travel documents.`,
        },
      ],
    },
    {
      id: "changes",
      title: "7. Changes, Cancellations, and Refunds",
      blocks: [
        {
          type: "p",
          text: "For booking changes, cancellations, or refund requests, customers should contact our support team. Please note:",
        },
        {
          type: "ul",
          items: [
            "Airline or supplier penalties or restrictions may apply",
            "Additional service charges may apply",
            "Refund processing times depend on airlines, hotels, and payment providers",
            "Some tickets or rates may be non-refundable",
          ],
        },
        {
          type: "p",
          text: "Refunds are processed according to the applicable airline or travel provider policies.",
        },
      ],
    },
    {
      id: "third-party",
      title: "8. Third-Party Services and Links",
      blocks: [
        {
          type: "p",
          text: "Our website may include references or links to third-party websites, services, or providers.",
        },
        {
          type: "p",
          text: `${BRAND_NAME} does not control or take responsibility for:`,
        },
        {
          type: "ul",
          items: [
            "Third-party website content",
            "External policies",
            "Services provided by external companies",
            "Transactions completed through third-party platforms",
          ],
        },
        {
          type: "p",
          text: "Customers should review the terms and policies of third-party providers before using their services.",
        },
      ],
    },
    {
      id: "account",
      title: "9. Account Responsibility",
      blocks: [
        {
          type: "p",
          text: "If you create an account or provide account information through our platform, you are responsible for maintaining the confidentiality of your details.",
        },
        {
          type: "p",
          text: "You are responsible for activities performed through your account. If you notice unauthorized access or suspicious activity, you should contact us immediately.",
        },
      ],
    },
    {
      id: "prohibited",
      title: "10. Prohibited Activities",
      blocks: [
        {
          type: "p",
          text: "Users must not:",
        },
        {
          type: "ul",
          items: [
            "Use our services for illegal purposes",
            "Provide false or misleading information",
            "Attempt unauthorized access to our systems",
            "Introduce harmful software or malicious code",
            "Copy or misuse website content without permission",
            `Impersonate ${COMPANY_NAME} representatives`,
            "Interfere with website operations",
            "Send spam or unauthorized communications",
          ],
        },
        {
          type: "p",
          text: "Violation of these Terms may result in restricted access, booking cancellation, or further action where applicable.",
        },
      ],
    },
    {
      id: "ip",
      title: "11. Intellectual Property",
      blocks: [
        {
          type: "p",
          text: `All content available on ${BRAND_NAME}, including text, graphics, logos, website design, and other materials, belongs to or is licensed to ${COMPANY_NAME}. Unauthorized copying, reproduction, modification, or distribution of website content is prohibited.`,
        },
      ],
    },
    {
      id: "liability",
      title: "12. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: `${COMPANY_NAME} is not responsible for circumstances outside our reasonable control, including:`,
        },
        {
          type: "ul",
          items: [
            "Flight delays or cancellations",
            "Airline or hotel schedule changes",
            "Missed connections",
            "Weather conditions",
            "Natural disasters",
            "Government restrictions",
            "Other force majeure events",
          ],
        },
        {
          type: "p",
          text: "Our responsibility is limited to the services provided directly by us, where applicable. We are not responsible for indirect, incidental, or consequential losses.",
        },
      ],
    },
    {
      id: "indemnification",
      title: "13. Indemnification",
      blocks: [
        {
          type: "p",
          text: `You agree to protect and hold harmless ${COMPANY_NAME}, its affiliates, and representatives from claims, damages, or expenses arising from:`,
        },
        {
          type: "ul",
          items: [
            "Your violation of these Terms",
            "Misuse of our services",
            "Violation of applicable laws or regulations",
          ],
        },
      ],
    },
    {
      id: "updates",
      title: "14. Updates To These Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms & Conditions from time to time to reflect changes in our services, policies, or legal requirements. Updated Terms will be posted on this page, and continued use of our services indicates acceptance of the revised Terms.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "15. Governing Law",
      blocks: [
        {
          type: "p",
          text: "These Terms & Conditions shall be governed by applicable laws. Any disputes related to the use of our services shall be handled according to the applicable jurisdiction and legal processes.",
        },
      ],
    },
    {
      id: "contact",
      title: "16. Contact Us",
      blocks: [
        {
          type: "p",
          text: "For questions, concerns, or assistance regarding these Terms & Conditions, contact us using the same phone number, email, and address published on this website.",
        },
        { type: "contact" },
      ],
    },
  ],
}
