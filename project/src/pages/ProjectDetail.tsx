import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Cpu,
  Layers,
  ExternalLink,
  Lightbulb,
  Target,
  ArrowLeft,
  Globe
} from "lucide-react";

interface Project {
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

const PROJECT_DB: Record<string, Project> = {
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
  "clinic-appointment-system": {
    title: "Clinic Appointment System",
    industry: "Healthcare",
    tagline: "Streamlining Patient Care with AI",
    challenge: "Patients faced long wait times on calls to book appointments, and no-show rates were high.",
    solution: "An automated booking system with WhatsApp remainders and an AI chatbot to answer common queries 24/7.",
    results: ["60% Reduction in No-Shows", "24/7 Booking Availability", "90% Automation of Routine Queries"],
    images: ["/DentalFull.webp"],
    video: "/dentalvid.webm",
    stack: ["React", "OpenAI API", "Twilio", "MongoDB"],
    liveLink: "https://dental-clinic-website-murex-rho.vercel.app/",
    isConcept: true,
    vision: "Automating the patient journey from first query to post-appointment follow-up using conversational AI.",
    highlights: [
      "Natural Language Query Processing",
      "Real-time Calendar Synchronization",
      "Automated WhatsApp Reminders",
      "Secure Patient Data Storage"
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
  "gym-management-app": {
    title: "Gym Management App",
    industry: "Fitness",
    tagline: "Digitizing Fitness Operations",
    challenge: "The gym faced difficulties in member tracking, fee collection, and class scheduling using manual registers.",
    solution: "A comprehensive management suite with member portals, automated billing, and QR-based attendance tracking.",
    results: ["100% Automated Billing", "30% Increase in Member Retention", "Simplified Class Scheduling"],
    images: ["/GymFull.webp"],
    video: null,
    stack: ["React Native", "Firebase", "Node.js"],
    liveLink: "https://gym-subscription-platform.vercel.app/",
    isConcept: true,
    vision: "Empowering fitness business owners with data-driven insights and streamlined member management tools.",
    highlights: [
      "Automated Membership Renewals",
      "QR Code Attendance System",
      "Personalized Trainer Dashboards",
      "Integrated Payment Gateways"
    ]
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? PROJECT_DB[slug] : null;

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold dark:text-white">Project Not Found</h2>
        <Link to="/projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-slate-950 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> All Projects
              </Link>
              <div className="w-full"></div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs md:text-sm font-bold tracking-wide border border-blue-100 dark:border-blue-800">
                <Globe className="w-3 h-3 md:w-4 md:h-4" /> {project.industry} Case Study
              </span>
              {project.isConcept && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs md:text-sm font-bold tracking-wide border border-amber-100 dark:border-amber-800">
                  <Lightbulb className="w-3 h-3 md:w-4 md:h-4" /> Innovation Concept
                </span>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 break-words">
                {project.title}
              </h1>
              <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl">
                {project.tagline}
              </p>
            </motion.div>

            {/* KEY RESULTS BADGES */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {project.results.slice(0, 2).map((res, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400 shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-sm leading-snug">{res}</span>
                </div>
              ))}
            </motion.div>

            {project.liveLink && (
              <motion.div variants={fadeInUp} className="pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
                >
                  Visit Live Site <ExternalLink className="w-5 h-5" />
                </a>
              </motion.div>
            )}
          </motion.div>

          {/* VISUAL PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-slate-900/50 border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800 aspect-video md:aspect-[4/3] flex items-center justify-center group">
              {project.video ? (
                <video autoPlay loop muted playsInline className="w-full h-full object-contain">
                  <source src={project.video} />
                </video>
              ) : (
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
              )}
            </div>

            {/* Tech Stack - Directly Below Video (All Devices) */}
            <div className="mt-0 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-b-3xl -mt-4 shadow-lg border-x-4 border-b-4 border-white dark:border-slate-800">
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6 font-extrabold uppercase tracking-widest">Technologies Used</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </section>



      {/* PROBLEM & SOLUTION */}
      <section className="py-24 bg-white dark:bg-slate-950 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-xl text-red-600 dark:text-red-400">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white">The Challenge</h3>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-xl text-green-600 dark:text-green-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white">The Solution</h3>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section >

      {/* IMPACT / RESULTS LIST */}
      < section className="py-24 bg-slate-50 dark:bg-slate-900/50" >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white">Measurable Impact</h2>
            <p className="text-slate-600 dark:text-slate-400">Real results delivered for the client</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {project.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-900 dark:text-white text-lg leading-snug">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* CLIENT TESTIMONIAL & ABOUT OR CONCEPT HIGHLIGHTS */}
      < section className="py-24 bg-white dark:bg-slate-950" >
        <div className="max-w-7xl mx-auto px-6">
          {!project.isConcept ? (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* About the Client */}
              {project.clientAbout && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-1 space-y-6"
                >
                  <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-slate-400" /> About the Client
                  </h3>
                  <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.clientAbout}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2"
                >
                  <h3 className="text-xl font-bold mb-6 dark:text-white">Client Feedback</h3>
                  <div className="relative p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] shadow-xl overflow-hidden text-white">
                    {/* Decorative Quote Mark */}
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V15M10.017 21L10.017 18C10.017 16.8954 9.12157 16 8.017 16H5.017C4.46472 16 4.017 15.5523 4.017 15V9C4.017 8.44772 4.46472 8 5.017 8H9.017C9.56928 8 10.017 8.44772 10.017 9V15" />
                      </svg>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                      <img
                        src={project.testimonial.image}
                        alt={project.testimonial.author}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-lg"
                      />
                      <div>
                        <p className="text-xl md:text-2xl font-medium italic mb-6 leading-relaxed text-blue-50">
                          "{project.testimonial.quote}"
                        </p>
                        <div>
                          <h4 className="font-bold text-white text-lg">{project.testimonial.author}</h4>
                          <p className="text-blue-200 font-medium">{project.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Project Vision */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                <h3 className="flex items-center gap-2 text-xl font-bold dark:text-white">
                  <Target className="w-5 h-5 text-amber-500" /> Project Vision
                </h3>
                <div className="p-8 bg-amber-50 dark:bg-amber-900/10 rounded-3xl border border-amber-100 dark:border-amber-900/30">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {project.vision}
                  </p>
                </div>
              </motion.div>

              {/* Innovation Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h3 className="flex items-center gap-2 text-xl font-bold mb-6 dark:text-white">
                  <Lightbulb className="w-5 h-5 text-amber-500" /> Innovation Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.highlights?.map((highlight, idx) => (
                    <div key={idx} className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 pt-1">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section >

      {/* CTA SECTION */}
      < section className="py-24 bg-slate-900 text-white relative overflow-hidden" >
        <div className="absolute inset-0 bg-blue-600/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Need a {project.industry} Solution?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            We can build a similar custom solution for your business in less than 4 weeks. Let's talk about your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-blue-50 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold border border-slate-700 hover:bg-slate-800 text-white transition-all">
              View More Projects
            </Link>
          </div>
        </div>
      </section >


    </div >
  );
};

export default ProjectDetail;
