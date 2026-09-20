import { BRAND_NAME, COMPANY_NAME } from "./brand"
import type { LegalDoc } from "./types"

export const cookiesDoc: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  intro: `At ${BRAND_NAME}, operated by ${COMPANY_NAME} (“we,” “our,” or “us”), we use cookies and similar tracking technologies to enhance your browsing experience, improve website functionality, and provide better services. This Cookie Policy explains what cookies are, how we use them, what information they help us collect, and how you can manage your cookie preferences while using our website.`,
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      blocks: [
        {
          type: "p",
          text: "This policy should be read together with our Privacy Policy, which explains how we collect, process, and protect your personal information.",
        },
        {
          type: "p",
          text: "By accessing or continuing to use our website, you acknowledge and agree to the use of cookies as described in this Cookie Policy.",
        },
      ],
    },
    {
      id: "what-are-cookies",
      title: "2. What Are Cookies?",
      blocks: [
        {
          type: "p",
          text: "Cookies are small text files stored on your device, including computers, smartphones, tablets, or other devices, when you visit a website. These cookies allow websites to recognize your device and remember certain details about your interactions, preferences, and activities.",
        },
        {
          type: "p",
          text: "Cookies may collect information such as:",
        },
        {
          type: "ul",
          items: [
            "User preferences and settings",
            "Browsing activity and website interactions",
            "Pages visited",
            "Session information",
            "Browser type and device details",
          ],
        },
        {
          type: "p",
          text: "Cookies help us improve website performance, enhance security, provide a smoother browsing experience, and support personalized website features.",
        },
      ],
    },
    {
      id: "types",
      title: "3. Types of Cookies We Use",
      blocks: [
        { type: "h3", text: "First-Party Cookies" },
        {
          type: "p",
          text: `First-party cookies are placed directly by ${BRAND_NAME} and are used to support the proper functioning of our website. These cookies may help with:`,
        },
        {
          type: "ul",
          items: [
            "Website navigation",
            "Booking-related functionality",
            "Remembering user preferences",
            "Maintaining secure website operations",
          ],
        },
        { type: "h3", text: "Third-Party Cookies" },
        {
          type: "p",
          text: "Third-party cookies may be placed by trusted external service providers, including analytics providers, advertising partners, and other service providers. These cookies help us:",
        },
        {
          type: "ul",
          items: [
            "Understand how visitors use our website",
            "Monitor website performance",
            "Improve our services",
            "Provide relevant travel-related content and offers",
          ],
        },
      ],
    },
    {
      id: "session",
      title: "4. Session and Persistent Cookies",
      blocks: [
        { type: "h3", text: "Session Cookies" },
        {
          type: "p",
          text: "Session cookies are temporary cookies that remain active only during your website visit and are automatically deleted once you close your browser. They help with:",
        },
        {
          type: "ul",
          items: [
            "Website navigation",
            "Maintaining secure sessions",
            "Supporting essential website functions",
          ],
        },
        { type: "h3", text: "Persistent Cookies" },
        {
          type: "p",
          text: "Persistent cookies remain stored on your device for a specific period or until you manually delete them. They help us:",
        },
        {
          type: "ul",
          items: [
            "Recognize returning visitors",
            "Save user preferences",
            "Improve website performance",
            "Provide a more convenient browsing experience",
          ],
        },
      ],
    },
    {
      id: "categories",
      title: "5. Categories of Cookies",
      blocks: [
        { type: "h3", text: "Essential Cookies" },
        {
          type: "p",
          text: "These cookies are necessary for the basic operation and functionality of our website. They support:",
        },
        {
          type: "ul",
          items: [
            "Secure website access",
            "Website stability",
            "Booking and form-related functions",
            "Essential website features",
          ],
        },
        {
          type: "p",
          text: "Without these cookies, certain parts of our website may not operate properly.",
        },
        { type: "h3", text: "Performance and Functional Cookies" },
        {
          type: "p",
          text: "These cookies help us understand how users interact with our website and allow us to improve performance. They may collect information such as:",
        },
        {
          type: "ul",
          items: [
            "Website traffic patterns",
            "Pages visited",
            "Time spent on different pages",
            "Website errors",
            "User preferences",
          ],
        },
        { type: "h3", text: "Analytics and Personalization Cookies" },
        {
          type: "p",
          text: "These cookies help us analyze visitor behavior and improve the services we provide. They allow us to:",
        },
        {
          type: "ul",
          items: [
            "Understand user interactions",
            "Improve website features",
            "Analyze travel-related preferences",
            "Provide a more personalized experience",
          ],
        },
        {
          type: "p",
          text: "Information collected through these cookies is generally analyzed in an aggregated manner.",
        },
        { type: "h3", text: "Advertising and Marketing Cookies" },
        {
          type: "p",
          text: "These cookies may be used to:",
        },
        {
          type: "ul",
          items: [
            "Deliver relevant advertisements",
            "Measure advertising performance",
            "Understand user interests",
            "Provide relevant travel offers and promotions",
          ],
        },
        {
          type: "p",
          text: "They may track browsing activities across different websites through third-party advertising providers.",
        },
        { type: "h3", text: "Social Media Cookies" },
        {
          type: "p",
          text: "These cookies support social media-related features, such as content sharing or interaction with social platforms. These cookies may be managed by third-party platforms and are subject to their respective privacy policies.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "6. How We Use Cookies",
      blocks: [
        {
          type: "p",
          text: `${BRAND_NAME} may use cookies for purposes including:`,
        },
        {
          type: "ul",
          items: [
            "Maintaining website functionality",
            "Improving user experience",
            "Remembering user preferences",
            "Monitoring website performance",
            "Supporting marketing efforts",
            "Providing relevant travel information",
            "Enhancing website security",
            "Preventing fraudulent activities",
          ],
        },
        {
          type: "p",
          text: "Our objective is to provide visitors with a secure, efficient, and personalized browsing experience.",
        },
      ],
    },
    {
      id: "manage",
      title: "7. Managing Your Cookie Preferences",
      blocks: [
        { type: "h3", text: "Browser Settings" },
        {
          type: "p",
          text: "You can manage or control cookies through your browser settings. Most browsers allow you to:",
        },
        {
          type: "ul",
          items: [
            "Delete stored cookies",
            "Block certain types of cookies",
            "Disable all cookies",
            "Receive notifications before cookies are stored",
          ],
        },
        {
          type: "p",
          text: "Please note that disabling cookies may impact certain website features, including booking functions, personalization options, or other services.",
        },
        { type: "h3", text: "Advertising Preferences" },
        {
          type: "p",
          text: "You may manage personalized advertising preferences through available third-party tools or platform settings. Opting out of personalized advertising does not mean you will stop seeing advertisements; it may only affect how relevant those advertisements are to you.",
        },
      ],
    },
    {
      id: "sharing",
      title: "8. Sharing Cookie Information With Third Parties",
      blocks: [
        {
          type: "p",
          text: "We may share limited cookie-related information with trusted third-party providers for purposes such as:",
        },
        {
          type: "ul",
          items: [
            "Website analytics",
            "Performance monitoring",
            "Marketing measurement",
            "Fraud prevention",
            "Service improvement",
          ],
        },
        {
          type: "p",
          text: "We expect third-party providers to handle information responsibly and comply with applicable privacy and data protection requirements.",
        },
      ],
    },
    {
      id: "updates",
      title: "9. Updates to This Cookie Policy",
      blocks: [
        {
          type: "p",
          text: `${COMPANY_NAME} may update this Cookie Policy from time to time to reflect changes in technology, website features, business practices, or legal requirements. Any updates will be posted on this page along with the revised effective date.`,
        },
        {
          type: "p",
          text: "We encourage users to review this Cookie Policy periodically to remain informed about how cookies are used.",
        },
      ],
    },
    {
      id: "contact",
      title: "10. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have any questions, concerns, or requests regarding this Cookie Policy or our use of cookies, please contact us using the same phone number, email, and address published on this website.",
        },
        { type: "contact" },
      ],
    },
  ],
}
