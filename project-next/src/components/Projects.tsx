"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Layout, Cpu, Globe, Rocket } from "lucide-react";

const Projects = () => {
  const items = [
    {
      title: "Coaching Institute Website",
      industry: "Education",
      image: "/Alharmain.webp",
      video: "/Alharmain.webm",
      slug: "coaching-institute-website",
      icon: <Globe className="w-5 h-5" />,
      color: "blue",
      liveLink: "https://alharmainislamicinstitute.com/"
    },
    {
      title: "Real Estate Landing Page",
      industry: "Real Estate",
      image: "/ConstFull.webp",
      video: null,
      slug: "real-estate-landing",
      icon: <Layout className="w-5 h-5" />,
      color: "emerald",
      liveLink: "https://constrealstate.vercel.app/"
    },
    {
      title: "Dental Platform System",
      industry: "Healthcare",
      image: "/DentalFull.webp",
      video: null,
      slug: "clinic-appointment-system",
      icon: <Cpu className="w-5 h-5" />,
      color: "rose",
      liveLink: "https://clinic-appointment-system.vercel.app/"
    },
    {
      title: "Mobility & Rental Platform",
      industry: "Transportation",
      image: "/RentalFull.webp",
      video: null,
      slug: "mobility-transportation-rentals",
      icon: <Rocket className="w-5 h-5" />,
      color: "amber",
      liveLink: "https://vehicle-rental-booking-platform.vercel.app/"
    },
    {
      title: "E-commerce Platform",
      industry: "E-commerce",
      image: "/Ecom.webp",
      video: null,
      slug: "e-commerce-platform",
      icon: <Globe className="w-5 h-5" />,
      color: "indigo",
      liveLink: "https://hygienaofficial.com/"
    },
    {
      title: "Gym Management App",
      industry: "Fitness",
      image: "/GymFull.webp",
      video: null,
      slug: "gym-management-app",
      icon: <Rocket className="w-5 h-5" />,
      color: "orange",
      liveLink: "https://gym-subscription-platform.vercel.app/"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-4">Case Studies</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Serve</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Education", "Healthcare", "Real Estate", "E-commerce", "Consulting", "Fitness"].map(
              (i, idx) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  {i}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {items.map((p) => (
            <motion.div
              key={p.slug}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 transition-all flex flex-col h-full"
            >
              {/* Image Reveal Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={p.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={p.title}
                />

                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    {p.video ? (
                      <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        <Play className="w-3 h-3 fill-current" /> Demo Available
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg`}>
                    <span className={`text-blue-600 dark:text-blue-400`}>
                      {p.icon}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">{p.industry}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h4>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-700">
                  <a
                    href={`/projects/${p.slug}`}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    View Case Study <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 font-bold text-xs uppercase tracking-widest transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center p-12 rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4">Have a Vision?</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto font-medium">
              We specialize in turning complex ideas into seamless digital experiences. Let's discuss your next project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 font-black rounded-2xl shadow-xl hover:scale-105 transition-transform"
            >
              Start Your Journey <Rocket className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
