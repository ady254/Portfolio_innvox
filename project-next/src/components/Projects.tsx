"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Play, Layout, Cpu, Globe, Rocket, Car } from "lucide-react";
import DepthBlurCarousel from "./DepthBlurCarousel";

interface ProjectsProps {
  variant?: "home" | "full";
}

const Projects = ({ variant = "full" }: ProjectsProps) => {
  const isHome = variant === "home";
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Sangat Motor Centre",
      industry: "Automotive",
      tagline: "Premium car care brand with 3D configurator & instant booking",
      image: "/SangatMotor.webp",
      video: null,
      slug: "sangat-motor-centre",
      icon: <Car className="w-5 h-5" />,
      liveLink: "https://sangatmotocentre.innvox.in/",
    },
    {
      title: "Coaching Institute Website",
      industry: "Education",
      tagline: "40% more online enquiries with a digital-first portal",
      image: "/Alharmain.webp",
      video: "/Alharmain.webm",
      slug: "coaching-institute-website",
      icon: <Globe className="w-5 h-5" />,
      liveLink: "https://alharmainislamicinstitute.com/",
    },
    {
      title: "Real Estate Landing Page",
      industry: "Real Estate",
      tagline: "3x higher conversion with mobile-first landings",
      image: "/ConstFull.webp",
      video: "/Construction.webm",
      slug: "real-estate-landing",
      icon: <Layout className="w-5 h-5" />,
      liveLink: "https://constrealstate.vercel.app/",
    },
    {
      title: "Dental Platform System",
      industry: "Healthcare",
      tagline: "60% fewer no-shows with automated booking",
      image: "/DentalFull.webp",
      video: "/dentalvid.webm",
      slug: "clinic-appointment-system",
      icon: <Cpu className="w-5 h-5" />,
      liveLink: "https://clinic-appointment-system.vercel.app/",
    },
    {
      title: "Mobility & Rental Platform",
      industry: "Transportation",
      tagline: "Paperless fleet management with real-time tracking",
      image: "/RentalFull.webp",
      video: "/rental.webm",
      slug: "mobility-transportation-rentals",
      icon: <Rocket className="w-5 h-5" />,
      liveLink: "https://vehicle-rental-booking-platform.vercel.app/",
    },
    {
      title: "E-commerce Platform",
      industry: "E-commerce",
      tagline: "50% less cart abandonment on a blazing-fast store",
      image: "/Ecom.webp",
      video: "/Ecom.webm",
      slug: "e-commerce-platform",
      icon: <Globe className="w-5 h-5" />,
      liveLink: "https://hygienaofficial.com/",
    },
    {
      title: "Gym Management App",
      industry: "Fitness",
      tagline: "100% automated billing and member retention",
      image: "/GymFull.webp",
      video: null,
      slug: "gym-management-app",
      icon: <Rocket className="w-5 h-5" />,
      liveLink: "https://gym-subscription-platform.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-4">
            Case Studies
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Serve
            </span>
          </h3>
          {isHome && (
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Real projects, real results. Preview our work here—open any case
              study to see the full story, tech stack, and outcomes.
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Automotive",
              "Education",
              "Healthcare",
              "Real Estate",
              "E-commerce",
              "Fitness",
            ].map((industry, idx) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-bold shadow-sm"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {isHome ? (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative -mx-2 sm:mx-0"
            >
              <DepthBlurCarousel
                images={items.map((p) => p.image)}
                onActiveIndexChange={setActiveIndex}
                onCenterClick={(idx) =>
                  router.push(`/projects/${items[idx].slug}`)
                }
              />
              <p className="text-center text-xs text-slate-400 mt-4 md:hidden">
                Swipe to browse • Double-tap center to open
              </p>
              <p className="hidden md:block text-center text-xs text-slate-400 mt-4">
                Scroll or drag to browse • Double-tap center card to open case study
              </p>
            </motion.div>

            <motion.div
              key={items[activeIndex].slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl mx-auto text-center bg-white rounded-3xl border border-slate-200 shadow-lg p-6 md:p-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                {items[activeIndex].icon}
                {items[activeIndex].industry}
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                {items[activeIndex].title}
              </h4>
              <p className="text-slate-600 text-sm md:text-base mb-6">
                {items[activeIndex].tagline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/projects/${items[activeIndex].slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors"
                >
                  Learn more <ArrowUpRight className="w-5 h-5" />
                </Link>
                {items[activeIndex].liveLink && (
                  <a
                    href={items[activeIndex].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 font-bold text-sm uppercase tracking-wider transition-colors"
                  >
                    Live demo
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all"
              >
                View All Case Studies <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {items.map((project) => (
            <motion.article
              key={project.slug}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 transition-all flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  {project.video && (
                    <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white font-bold text-sm">
                      <Play className="w-3 h-3 fill-current" /> Demo Available
                    </span>
                  )}
                </div>

                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg">
                    <span className="text-blue-600 dark:text-blue-400">
                      {project.icon}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      {project.industry}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h4 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {project.tagline}
                </p>

                <div className="mt-auto pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-100 dark:border-slate-700">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    Learn more <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 font-bold text-xs uppercase tracking-widest transition-colors"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        )}

        {!isHome ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center p-12 rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">Have a Vision?</h3>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto font-medium">
                We specialize in turning complex ideas into seamless digital
                experiences. Let&apos;s discuss your next project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 font-black rounded-2xl shadow-xl hover:scale-105 transition-transform"
              >
                Start Your Journey <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
