import { BRAND_NAME } from "./brand"
import type { LegalDoc } from "./types"

export const cancellationDoc: LegalDoc = {
  slug: "cancellation",
  title: "Cancellation & Refund Policy",
  intro: `At ${BRAND_NAME}, we understand that travel plans may change due to unexpected situations, personal commitments, or schedule adjustments. Our goal is to provide clear information about the cancellation and refund process so travelers can understand their available options.`,
  sections: [
    {
      id: "overview",
      title: "About this Policy",
      blocks: [
        {
          type: "p",
          text: "This Cancellation & Refund Policy explains the terms related to booking cancellations, refund eligibility, applicable charges, and processing timelines. By using our services, you agree to the guidelines mentioned below.",
        },
      ],
    },
    {
      id: "guidelines",
      title: "1. General Cancellation Guidelines",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} operates as a travel service provider and works with third-party airlines and travel partners. Therefore, cancellation and refund conditions may vary depending on:`,
        },
        {
          type: "ul",
          items: [
            "Airline or hotel policies",
            "Selected fare or rate type",
            "Travel route and destination",
            "Ticket rules and booking conditions",
          ],
        },
        { type: "h3", text: "Service Fees and Charges" },
        {
          type: "p",
          text: `Any service fees, processing charges, or convenience fees charged by ${BRAND_NAME} may be non-refundable. Certain promotional, discounted, or restricted fares may not qualify for refunds based on airline or supplier rules.`,
        },
        { type: "h3", text: "Airline and Supplier Policies Apply" },
        {
          type: "p",
          text: "All cancellation requests are subject to the airline or travel provider’s terms and fare conditions.",
        },
        {
          type: "ul",
          items: [
            "Airlines and hotels determine refund eligibility",
            "Applicable penalties are decided according to fare or rate rules",
            "Provider decisions regarding refunds are final",
          ],
        },
        { type: "h3", text: "Cancellation Charges" },
        {
          type: "p",
          text: "Cancellation charges may include:",
        },
        {
          type: "ul",
          items: [
            "Airline or hotel cancellation penalties",
            "Applicable service fees",
            "Fare differences or other charges based on ticket conditions",
          ],
        },
        {
          type: "p",
          text: "Charges may vary depending on how close the cancellation request is made to the departure or check-in date.",
        },
      ],
    },
    {
      id: "how-to-request",
      title: "2. How To Request A Cancellation",
      blocks: [
        {
          type: "p",
          text: `To request a cancellation, customers must contact ${BRAND_NAME} support. For a smoother process:`,
        },
        {
          type: "ul",
          items: [
            "Submit cancellation requests as early as possible",
            "Keep your booking details available",
            "Wait for confirmation from our support team regarding the cancellation request",
          ],
        },
        {
          type: "note",
          text: "A cancellation is considered processed only after confirmation from our team.",
        },
      ],
    },
    {
      id: "24-hour",
      title: "3. 24-Hour Cancellation Policy",
      blocks: [
        {
          type: "p",
          text: "Some airlines may provide a 24-hour cancellation option after booking, depending on their policies. Please note:",
        },
        {
          type: "ul",
          items: [
            "Eligibility depends on the airline and fare conditions",
            "Not all bookings qualify for free cancellation",
            "Refund approval is subject to airline rules",
          ],
        },
        {
          type: "p",
          text: `${BRAND_NAME} does not control airline-specific cancellation policies.`,
        },
      ],
    },
    {
      id: "flexible",
      title: "4. Flexible Fare Options",
      blocks: [
        {
          type: "p",
          text: "Some airlines or hotels may offer flexible booking options or additional protection plans that may provide:",
        },
        {
          type: "ul",
          items: [
            "Reduced cancellation penalties",
            "Extended cancellation flexibility",
            "Additional benefits based on selected terms",
          ],
        },
        {
          type: "p",
          text: "These options are controlled by the airline or travel provider, and customers should review the applicable conditions before selecting them.",
        },
      ],
    },
    {
      id: "conditions",
      title: "5. Important Cancellation Conditions",
      blocks: [
        {
          type: "p",
          text: "Customers should consider the following:",
        },
        {
          type: "ul",
          items: [
            "Cancellation fees may increase closer to the departure date",
            "Removing a passenger from a booking may result in fare recalculation",
            "Refund eligibility may differ for round-trip or multi-city bookings",
            "Partially used tickets may only qualify for refunds on unused portions, if permitted by airline rules",
          ],
        },
      ],
    },
    {
      id: "refunds",
      title: "6. Refund Policy",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} assists customers with the refund process; however, refund approval and amounts are determined by airline or supplier policies.`,
        },
        { type: "h3", text: "Refund Approval" },
        {
          type: "p",
          text: "Refund eligibility depends on:",
        },
        {
          type: "ul",
          items: [
            "Airline fare rules or hotel rate rules",
            "Ticket or stay conditions",
            "Cancellation timing",
            "Applicable deductions or penalties",
          ],
        },
        {
          type: "p",
          text: `${BRAND_NAME} cannot modify airline or hotel refund decisions.`,
        },
        { type: "h3", text: "Non-Refundable Bookings" },
        {
          type: "p",
          text: "Some tickets or rates may:",
        },
        {
          type: "ul",
          items: [
            "Become non-refundable after purchase",
            "Qualify only for partial refunds",
            "Include deductions based on provider conditions",
          ],
        },
        { type: "h3", text: "No-Show Policy" },
        {
          type: "p",
          text: "If a traveler does not board the flight or does not arrive for a reserved stay, and does not cancel before departure or check-in, the booking may be considered a “no-show.” No-show bookings are generally non-refundable unless the provider provides an exception.",
        },
      ],
    },
    {
      id: "method",
      title: "7. Refund Processing Method",
      blocks: [
        {
          type: "p",
          text: "Approved refunds are generally returned through the original payment method used during booking.",
        },
        {
          type: "ul",
          items: [
            "Credit/Debit Card payments: Refunded to the original card",
            "Online payment methods: Returned through the applicable payment channel",
          ],
        },
        {
          type: "p",
          text: "Refunds are usually processed in the name of the original booking customer.",
        },
      ],
    },
    {
      id: "timeline",
      title: "8. Refund Timeline",
      blocks: [
        {
          type: "p",
          text: "Refund processing times may vary depending on airlines, hotels, payment providers, and financial institutions. Generally:",
        },
        {
          type: "ul",
          items: [
            "Providers may take several business days to process refunds",
            "Some refunds may require additional processing time",
            "Banks or payment providers may take additional time to reflect the amount",
          ],
        },
        {
          type: "p",
          text: `${BRAND_NAME} is not responsible for delays caused by airlines, hotels, banks, or payment systems but will assist customers with refund status updates when requested.`,
        },
      ],
    },
    {
      id: "role",
      title: "9. Our Role and Responsibility",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} acts as an intermediary between travelers and third-party travel providers. We assist customers by:`,
        },
        {
          type: "ul",
          items: [
            "Helping submit cancellation requests",
            "Providing information about applicable policies",
            "Supporting communication regarding refund status",
          ],
        },
        {
          type: "p",
          text: "However:",
        },
        {
          type: "ul",
          items: [
            "We cannot guarantee refund approval",
            "We do not control airline or hotel policies",
            "We do not determine provider processing timelines",
          ],
        },
        {
          type: "p",
          text: "Our team aims to provide guidance and support throughout the cancellation and refund process.",
        },
      ],
    },
    {
      id: "contact",
      title: "10. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have questions regarding cancellations or refunds, please contact our support team using the same phone number, email, and address published on this website. We recommend contacting us as soon as possible when your travel plans change so we can assist you with the available options.",
        },
        { type: "contact" },
      ],
    },
  ],
}
