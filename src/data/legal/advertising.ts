import { BRAND_NAME, COMPANY_NAME } from "./brand"
import type { LegalDoc } from "./types"

export const advertisingDoc: LegalDoc = {
  slug: "advertising",
  title: "Advertisement Disclosure",
  intro: `At ${BRAND_NAME}, operated by ${COMPANY_NAME}, we are committed to maintaining transparency with our users. This Advertisement Disclosure explains how advertisements, promotional content, and third-party partnerships may appear on our website.`,
  sections: [
    {
      id: "agreement",
      title: "Using this Website",
      blocks: [
        {
          type: "p",
          text: "By accessing or using our website, you acknowledge and agree to the practices described in this disclosure.",
        },
      ],
    },
    {
      id: "promotional",
      title: "1. Advertising and Promotional Content",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} may display advertisements, promotional offers, or travel-related content from third-party companies, service providers, affiliates, or business partners. These advertisements may include:`,
        },
        {
          type: "ul",
          items: [
            "Flight-related offers",
            "Hotel and holiday package offers",
            "Travel services",
            "Partner promotions",
            "Special deals and offers",
            "Other relevant travel-related information",
          ],
        },
        {
          type: "p",
          text: "The appearance of advertisements on our website does not represent an endorsement, recommendation, or guarantee of the products, services, or offers being promoted.",
        },
      ],
    },
    {
      id: "partners",
      title: "2. Third-Party Advertisers and Partners",
      blocks: [
        {
          type: "p",
          text: "We may collaborate with third-party advertising partners, affiliate networks, and travel service providers to display relevant advertisements and promotional content. These third parties may use technologies such as cookies, pixels, or similar tracking tools to:",
        },
        {
          type: "ul",
          items: [
            "Display relevant advertisements",
            "Measure advertising performance",
            "Understand user interactions",
            "Improve advertising experiences",
          ],
        },
        {
          type: "p",
          text: "Third-party advertisers and partners may have their own privacy policies, terms, and practices. We encourage users to review their policies before interacting with their services.",
        },
      ],
    },
    {
      id: "affiliates",
      title: "3. Affiliate Relationships",
      blocks: [
        {
          type: "p",
          text: `Some links, advertisements, or promotional content displayed on ${BRAND_NAME} may be connected with affiliate partnerships. This means we may receive compensation if users interact with specific links, offers, or services.`,
        },
        {
          type: "p",
          text: "Any affiliate relationship does not influence the information, services, recommendations, or options provided to users.",
        },
      ],
    },
    {
      id: "accuracy",
      title: "4. Accuracy of Advertised Information",
      blocks: [
        {
          type: "p",
          text: "While we aim to provide useful and accurate information, advertisements and promotional offers may be provided by external companies or third-party providers.",
        },
        {
          type: "p",
          text: `${COMPANY_NAME} does not guarantee:`,
        },
        {
          type: "ul",
          items: [
            "Availability of advertised products or services",
            "Accuracy of third-party offers",
            "Pricing provided by external providers",
            "Terms, conditions, or restrictions applied by advertisers",
          ],
        },
        {
          type: "p",
          text: "Users are advised to verify all details, limitations, pricing, and applicable policies directly with the relevant provider before making any purchase or travel decision.",
        },
      ],
    },
    {
      id: "third-party-sites",
      title: "5. Third-Party Websites",
      blocks: [
        {
          type: "p",
          text: "Our website may contain advertisements, links, or references that direct users to external third-party websites.",
        },
        {
          type: "p",
          text: `${BRAND_NAME} is not responsible for:`,
        },
        {
          type: "ul",
          items: [
            "The content of third-party websites",
            "Their privacy practices",
            "Their products, services, or offers",
            "Transactions completed outside our platform",
          ],
        },
        {
          type: "p",
          text: "Users should review the terms, conditions, and privacy policies of third-party websites before engaging with them.",
        },
      ],
    },
    {
      id: "endorsement",
      title: "6. No Guarantee or Endorsement",
      blocks: [
        {
          type: "p",
          text: `Advertisements displayed on ${BRAND_NAME} are provided for informational and convenience purposes only. The presence of an advertisement does not mean that ${COMPANY_NAME}:`,
        },
        {
          type: "ul",
          items: [
            "Endorses the advertiser or its services",
            "Guarantees the quality or reliability of the service",
            "Confirms pricing or availability",
            "Accepts responsibility for third-party products or services",
          ],
        },
        {
          type: "p",
          text: "Users are responsible for evaluating and verifying any advertised products, services, or offers before proceeding.",
        },
      ],
    },
    {
      id: "updates",
      title: "7. Changes to This Advertisement Disclosure",
      blocks: [
        {
          type: "p",
          text: `${COMPANY_NAME} may update this Advertisement Disclosure from time to time to reflect changes in advertising practices, partnerships, technology, or applicable requirements. Any updates will be published on this page with the revised effective date.`,
        },
        {
          type: "p",
          text: "We encourage users to review this disclosure periodically to stay informed about our advertising practices.",
        },
      ],
    },
    {
      id: "contact",
      title: "8. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have any questions, concerns, or requests regarding this Advertisement Disclosure, please contact us using the same phone number, email, and address published on this website.",
        },
        { type: "contact" },
      ],
    },
  ],
}
