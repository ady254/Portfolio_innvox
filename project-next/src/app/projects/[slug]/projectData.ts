export interface Project {
  title: string;
  industry: string;
  tagline: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  video: string | null;
  stack: string[];
  liveLink?: string;
  isConcept?: boolean;
  clientAbout?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  highlights?: string[];
  vision?: string;
}

export const PROJECT_DB: Record<string, Project> = {
  "sangat-motor-centre": {
    title: "Sangat Motor Centre",
    industry: "Automotive",
    tagline: "Premium Car Care & Performance — Digitally Reimagined",
    challenge:
      "Sangat Motor Centre, an established premium auto service centre in Patna, Bihar, relied on phone calls and walk-ins for bookings. They lacked a modern digital presence that reflected the high-end quality of their workshop and made it easy for customers to discover services or book online.",
    solution:
      "We designed and developed a premium automotive website with an interactive 3D car configurator, slide-to-book service UX, QR-based instant scheduling, service galleries, and a mobile-first experience optimized for local search and conversions.",
    results: [
      "4.9/5 Customer Rating Showcased Online",
      "Book Service in Under 15 Seconds",
      "5000+ Happy Customers Highlighted",
    ],
    images: ["/SangatMotor.webp"],
    video: null,
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "3D Web"],
    liveLink: "https://seashell-lion-595208.hostingersite.com/",
    isConcept: false,
    clientAbout:
      "Sangat Motor Centre is a top-rated premium car care and performance workshop in Patna, Bihar — established in 2012. They specialize in diagnostics, repairs, detailing, and OEM-grade servicing for high-performance vehicles, trusted by thousands of customers across the region.",
    testimonial: {
      quote:
        "Innvox built a stunning website for our premium car care centre — complete with a 3D configurator, slide-to-book service flow, and mobile-first design. Customers can schedule appointments in seconds and our brand finally matches the quality of service we deliver.",
      author: "Sangat Motor Centre",
      role: "Premium Car Care • Patna, Bihar",
      image: "/SangatMotor.webp",
    },
  },
  "coaching-institute-website": {
    title: "Coaching Institute Website",
    industry: "Education",
    tagline: "Boosting Enrollment with a Digital-First Approach",
    challenge: "The institute relied on offline forms and phone calls, leading to lost leads and high manual workload for staff.",
    solution: "We built a responsive student portal with online inquiry forms, automated email follow-ups, and course showcases.",
    results: ["40% Increase in Online Enquiries", "20hrs/week Saved on Admin Work", "Zero Lost Leads due to Automation"],
    images: ["/Edu1.webp"],
    video: "/Alharmain.webm",
    stack: ["React", "Tailwind", "Node.js"],
    liveLink: "https://alharmaininstitute.com",
    isConcept: false,
    clientAbout: "Al-Harmain Islamic Institute is a premier educational center providing modern and religious education to students, focusing on accessibility and digital growth.",
    testimonial: {
      quote: "The student portal transformed how we handle inquiries. We haven't lost a single lead since the automation went live.",
      author: "Maulana Zaid",
      role: "Director, Al-Harmain",
      image: "/alharmainlogo.jpeg"
    }
  },
  "real-estate-landing": {
    title: "Real Estate Landing Page",
    industry: "Real Estate",
    tagline: "High-Converting Landings for Premium Properties",
    challenge: "Low conversion rates from existing ads because the landing page was slow and not mobile-optimized.",
    solution: "A lightning-fast, mobile-first landing page with virtual tour integration and instant WhatsApp connection.",
    results: ["3x Higher Conversion Rate", "Sub-second Page Load Speed", "50+ Qualified Leads in Week 1"],
    images: ["/ConstFull.webp"],
    video: "/Construction.webm",
    stack: ["React", "Framer Motion", "Firebase"],
    liveLink: "https://realestate-project-delta.vercel.app/",
    isConcept: true,
    vision: "To create the fastest possible property exploration experience, reducing friction between discovery and lead generation.",
    highlights: [
      "Sub-500ms Page Load Speed",
      "Dynamic Virtual Tour Integration",
      "Seamless Lead Capture Flow",
      "High-Conversion Mobile Layout"
    ]
  },
  "mobility-transportation-rentals": {
    title: "Mobility & Rental Platform",
    industry: "Transportation",
    tagline: "Simplifying Vehicle Rentals",
    challenge: "Manual tracking of vehicle availability and messy paper contracts caused booking conflicts.",
    solution: "A centralized dashboard for fleet management, real-time availability tracking, and digital contract signing.",
    results: ["100% Elimination of Double Bookings", "Paperless Operations", "Real-time Fleet Tracking"],
    images: ["/RentalFull.webp"],
    video: "/rental.webm",
    stack: ["React", "Mapbox", "Supabase"],
    liveLink: "https://vehicle-rental-booking-platform.vercel.app/",
    isConcept: true,
    vision: "A centralized operating system for vehicle rental fleets that replaces paper-based messy workflows with real-time data.",
    highlights: [
      "Interactive map-based fleet tracking",
      "Automated digital contract generation",
      "Real-time availability conflicts detection",
      "Paperless customer onboarding"
    ]
  },
  "e-commerce-platform": {
    title: "E-commerce Platform",
    industry: "E-commerce",
    tagline: "Scalable Online Shopping Experience",
    challenge: "Existing platform was slow, not mobile-friendly, and had a high cart abandonment rate.",
    solution: "A modern, React-based e-commerce store with lightning-fast performance, seamless checkout, and integrated inventory management.",
    results: ["50% Reduction in Cart Abandonment", "2x Increase in Mobile Conversions", "Sub-second Page Load times"],
    images: ["/Ecom.webp"],
    video: "/Ecom.webm",
    stack: ["React", "Tailwind", "Node.js", "Stripe"],
    liveLink: "https://ecommerce-web-platform.vercel.app/",
    isConcept: false,
    clientAbout: "Innvox clearly understood our requirements and delivered the project on time with great attention to detail. Their technical expertise, communication, and support throughout the project were excellent. We highly recommend Innvox for professional e-commerce and web development services.",
    testimonial: {
      quote: "We are very satisfied with the e-commerce website delivered by Innvox. The design is clean, user-friendly, and all features like product pages, checkout, and order tracking work smoothly across devices. Innvox delivered the project on time with great professionalism. Highly recommended.",
      author: "Hygienaofficial.com",
      role: "Director, Altamash Nasim",
      image: "/hygienalogo.webp"
    }
  },
  "minara-gifting-ecommerce": {
    title: "Minara Gifting Store",
    industry: "E-commerce",
    tagline: "From Instagram Selling to a Complete Automated E-Commerce Web Platform",
    challenge: "Minara Gifting previously operated and sold custom gifting products primarily through Instagram DMs, making order management, payment tracking, and scaling operational processes highly manual.",
    solution: "We built a full e-commerce web application complete with a modern online storefront, integrated online payment processing, and a robust admin management portal for inventory, orders, and fulfillment.",
    results: ["100% Automated Storefront & Payment Processing", "Full Admin Portal for Inventory & Order Management", "Seamless Transition from Instagram Selling to Web Store"],
    images: ["/minara.webp"],
    video: null,
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Payment Gateways"],
    liveLink: "https://www.minaragifting.com/",
    isConcept: false,
    clientAbout: "Minara Gifting is a popular online custom gifting store. Innvox built their complete web application from front-end store to back-end administration and payment gateway integrations.",
    testimonial: {
      quote: "Innvox built our full e-commerce web application from store to admin panel to online payment integrations. Transitioning our products from Instagram to a dedicated online store has transformed our business.",
      author: "Minara Gifting",
      role: "E-Commerce • minaragifting.com",
      image: "/innvox-favicon.svg"
    }
  }
};
