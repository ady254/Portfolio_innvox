"use client";

import Image from "next/image";
import Link from "next/link";
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
import { PROJECT_DB, Project } from "./projectData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ProjectSlugClient({ slug }: { slug: string }) {
  const project: Project | undefined = PROJECT_DB[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold dark:text-white">Project Not Found</h2>
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 text-sm font-semibold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                  {project.industry}
                </span>
                {project.isConcept ? (
                  <span className="px-3.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                    Internal Concept
                  </span>
                ) : (
                  <span className="px-3.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                    Live Client Project
                  </span>
                )}
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-black tracking-tight leading-none"
              >
                {project.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed"
              >
                {project.tagline}
              </motion.p>

              {/* Tech Stack Pills */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {project.liveLink && (
                <motion.div variants={fadeInUp} className="pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
                  >
                    Visit Live Project <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              )}
            </motion.div>

            {/* Main Media Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover max-h-[450px]"
                  />
                ) : (
                  <Image
                    src={project.images[0] || "/Ecom.webp"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover max-h-[450px]"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS & RESULTS BAR */}
      <section className="bg-blue-600 text-white py-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
            {project.results.map((result, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-4 space-y-2">
                <div className="flex justify-center mb-2">
                  <BarChart3 className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-xl md:text-2xl font-black tracking-tight">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Story: Challenge & Solution */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">The Challenge</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light">
                {project.challenge}
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Engineering Solution</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light">
                {project.solution}
              </p>
            </motion.div>

            {/* Showcase Gallery */}
            {project.images.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-6 pt-6"
              >
                <h3 className="text-xl font-bold">Platform Preview</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar Info & Testimonial */}
          <div className="lg:col-span-4 space-y-10">
            {/* Tech Stack Card */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-500" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Info / Concept Vision */}
            {project.clientAbout && (
              <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-500" /> About the Client
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.clientAbout}
                </p>
              </div>
            )}

            {/* Testimonial Card */}
            {project.testimonial && (
              <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
                <div className="text-6xl font-serif opacity-20 absolute -top-4 -left-2">&ldquo;</div>
                <p className="text-base italic leading-relaxed relative z-10">
                  &quot;{project.testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4 pt-2 border-t border-white/20">
                  {project.testimonial.image && (
                    <Image
                      src={project.testimonial.image}
                      alt={project.testimonial.author}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white/30"
                    />
                  )}
                  <div>
                    <h4 className="font-bold text-white text-sm">{project.testimonial.author}</h4>
                    <p className="text-xs text-blue-200">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Need a {project.industry} Solution?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            We can build a similar custom solution for your business in less than 4 weeks. Let&apos;s talk about your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-blue-50 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold border border-slate-700 hover:bg-slate-800 text-white transition-all">
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
