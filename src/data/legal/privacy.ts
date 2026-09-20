import { BRAND_DOMAIN, BRAND_NAME, COMPANY_NAME } from "./brand"
import type { LegalDoc } from "./types"

export const privacyDoc: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  intro: `At ${BRAND_NAME}, operated by ${COMPANY_NAME} (“we,” “our,” or “us”), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, protect, and manage your information when you visit ${BRAND_DOMAIN}, use our website, submit travel inquiries, make bookings, or interact with our customer support team.`,
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      blocks: [
        {
          type: "p",
          text: `By accessing or using our website, you acknowledge and agree to the practices described in this Privacy Policy and our Terms & Conditions.`,
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      blocks: [
        { type: "h3", text: "A. Personal Information" },
        {
          type: "p",
          text: "We may collect personal information that helps us provide travel-related services, including:",
        },
        {
          type: "ul",
          items: [
            "Full name",
            "Email address",
            "Phone number",
            "Billing and mailing address",
            "Payment-related details (processed securely through authorized payment providers)",
            "Travel details, including destinations, travel dates, and preferences",
            "Passport or identification details when required for travel services",
            "Date of birth",
            "Special travel requests, including accessibility requirements or other preferences",
          ],
        },
        {
          type: "p",
          text: "If you provide information on behalf of another traveler, you confirm that you have the necessary permission to share that information with us.",
        },
        { type: "h3", text: "B. Automatically Collected Information" },
        {
          type: "p",
          text: "When you browse or interact with our website, we may automatically collect certain technical information, including:",
        },
        {
          type: "ul",
          items: [
            "IP address",
            "Browser type and version",
            "Device information",
            "Operating system details",
            "Pages visited and time spent on the website",
            "Website usage patterns and navigation details",
          ],
        },
        {
          type: "p",
          text: "This information helps us improve website performance, security, and overall user experience.",
        },
      ],
    },
    {
      id: "how-we-collect",
      title: "3. How We Collect Information",
      blocks: [
        {
          type: "p",
          text: "We may collect your information through different interactions, including:",
        },
        {
          type: "ul",
          items: [
            "When you search for or request travel services",
            "When you submit booking inquiries",
            "When you contact our customer support team",
            "When you complete forms on our website",
            "When you subscribe to updates or promotional communications",
            "Through cookies and similar tracking technologies",
            "Through trusted travel partners and service providers involved in fulfilling your requests",
          ],
        },
      ],
    },
    {
      id: "cookies",
      title: "4. Cookies and Tracking Technologies",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} may use cookies and similar tracking technologies to improve your browsing experience. Cookies help us:`,
        },
        {
          type: "ul",
          items: [
            "Remember user preferences",
            "Improve website functionality",
            "Understand website traffic and usage trends",
            "Provide relevant travel information and offers",
          ],
        },
        {
          type: "p",
          text: "You may manage or disable cookies through your browser settings. However, disabling cookies may affect certain features and functionality of our website.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "5. How We Use Your Information",
      blocks: [
        {
          type: "p",
          text: "We may use your information for purposes including:",
        },
        {
          type: "ul",
          items: [
            "Processing travel inquiries and reservations",
            "Providing booking confirmations and updates",
            "Responding to customer requests",
            "Improving our website and services",
            "Personalizing your travel experience",
            "Sending promotional communications where permitted",
            "Detecting and preventing fraud or unauthorized activities",
            "Meeting legal and regulatory obligations",
          ],
        },
        {
          type: "note",
          text: `${COMPANY_NAME} does not sell or trade your personal information to third parties.`,
        },
      ],
    },
    {
      id: "sharing",
      title: "6. Sharing of Information",
      blocks: [
        {
          type: "p",
          text: "We may share your information with trusted parties when necessary to provide our services.",
        },
        { type: "h3", text: "Travel Service Providers" },
        {
          type: "p",
          text: "Your information may be shared with airlines, hotels, transportation providers, and other travel partners required to complete your booking or travel request.",
        },
        { type: "h3", text: "Service Providers" },
        {
          type: "p",
          text: "We may work with third-party providers that support our operations, including:",
        },
        {
          type: "ul",
          items: [
            "Payment processing services",
            "Website hosting providers",
            "Analytics providers",
            "Communication platforms",
            "Customer support services",
          ],
        },
        { type: "h3", text: "Legal Requirements" },
        {
          type: "p",
          text: "We may disclose information when required by applicable laws, legal processes, or government authorities.",
        },
        { type: "h3", text: "Business Changes" },
        {
          type: "p",
          text: "In the event of a merger, acquisition, restructuring, or transfer of business assets, your information may be transferred as part of that process while maintaining appropriate privacy protections.",
        },
      ],
    },
    {
      id: "security",
      title: "7. Data Security",
      blocks: [
        {
          type: "p",
          text: "We implement reasonable technical and organizational measures to help protect your personal information from unauthorized access, misuse, alteration, or disclosure.",
        },
        {
          type: "p",
          text: "While we take appropriate steps to safeguard your information, no online platform can guarantee complete security. If you believe your information has been compromised, please contact us promptly.",
        },
      ],
    },
    {
      id: "rights",
      title: "8. Your Privacy Rights",
      blocks: [
        {
          type: "p",
          text: "Depending on applicable laws, you may have rights regarding your personal information, including:",
        },
        {
          type: "ul",
          items: [
            "Requesting access to your personal data",
            "Requesting corrections to inaccurate information",
            "Requesting deletion of information where applicable",
            "Choosing not to receive marketing communications",
          ],
        },
        {
          type: "p",
          text: "To exercise these rights, you may contact us using the information provided below.",
        },
      ],
    },
    {
      id: "marketing",
      title: "9. Marketing Communications",
      blocks: [
        {
          type: "p",
          text: `From time to time, ${COMPANY_NAME} may send updates, offers, or travel-related information. You may unsubscribe from marketing communications by:`,
        },
        {
          type: "ul",
          items: [
            "Using the unsubscribe option provided in the email",
            "Contacting our support team directly",
          ],
        },
        {
          type: "p",
          text: "Please note that essential service communications, including booking confirmations and important updates, may still be sent.",
        },
      ],
    },
    {
      id: "retention",
      title: "10. Data Retention",
      blocks: [
        {
          type: "p",
          text: "We retain personal information only for as long as necessary to:",
        },
        {
          type: "ul",
          items: [
            "Provide requested travel services",
            "Maintain business records",
            "Meet legal and regulatory requirements",
            "Resolve disputes",
            "Enforce agreements",
          ],
        },
      ],
    },
    {
      id: "children",
      title: "11. Children’s Privacy",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} does not knowingly collect personal information from individuals under the age of 18. Our services are intended for users who can legally provide personal information and make travel arrangements.`,
        },
      ],
    },
    {
      id: "international",
      title: "12. International Data Processing",
      blocks: [
        {
          type: "p",
          text: "As a travel service provider, your information may be processed or stored in locations where our service providers operate. By using our website and services, you consent to the processing of your information according to applicable privacy regulations.",
        },
      ],
    },
    {
      id: "updates",
      title: "13. Updates To This Privacy Policy",
      blocks: [
        {
          type: "p",
          text: `${COMPANY_NAME} may update this Privacy Policy periodically to reflect changes in our services, business practices, technology, or legal requirements. Any updates will be posted on this page along with the revised effective date.`,
        },
        {
          type: "p",
          text: "We encourage users to review this Privacy Policy periodically to stay informed about how we protect and manage information.",
        },
      ],
    },
    {
      id: "contact",
      title: "14. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have questions, concerns, or requests regarding this Privacy Policy, please contact us using the details below. We use the same phone number, email, and address published across this website.",
        },
        { type: "contact" },
      ],
    },
  ],
}
