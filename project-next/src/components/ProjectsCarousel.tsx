"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';
import 'swiper/css';

const ProjectsCarousel = () => {
  const originalItems = [
    {
      title: "Coaching Institute Website",
      industry: "Education",
      image: "/Edu1.webp",
      slug: "coaching-institute-website",
    },
    {
      title: "Real Estate Landing Page",
      industry: "Real Estate",
      image: "/Construction1.webp",
      slug: "real-estate-landing",
    },
    {
      title: "Clinic Appointment System",
      industry: "Healthcare",
      image: "/dentalfront.webp",
      slug: "clinic-appointment-system",
    },
    {
      title: "E-commerce Platform",
      industry: "E-commerce",
      image: "/E-com.webp",
      slug: "ecommerce-platform",
    },
    {
      title: "Fitness Studio Website",
      industry: "Fitness",
      image: "/Gym1.webp",
      slug: "fitness-studio-website",
    },
    {
      title: "Mobility & Transportation (Car & Bike Rentals)",
      industry: "Transportation",
      image: "/Rental1.webp",
      slug: "mobility-transportation-rentals",
    },
  ];
  const items = [...originalItems, ...originalItems, ...originalItems];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="section-title dark:text-white"
        >
          Industries We Serve
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          {["Education", "Healthcare", "Real Estate", "E-commerce", "Consulting", "Fitness"].map(
            (ind) => (
              <motion.span
                key={ind}
                variants={fadeInUp}
                className="px-5 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {ind}
              </motion.span>
            )
          )}
        </motion.div>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl font-bold mb-6 dark:text-white"
        >
          Our Projects
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
            }}
            className="pb-10"
          >
            {items.map((p, i) => (
              <SwiperSlide key={i} className="cursor-pointer">
                <Link href={`/projects/${p.slug}`} className="block h-full">
                <div className="card-compact bg-white dark:bg-gray-800 dark:border-gray-700 h-full hover:scale-[1.03] transition-transform block">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img src={p.image} className="w-full h-full object-cover" alt={p.title} />
                  </div>

                  <div className="mt-4">
                    <h4 className="font-bold text-lg dark:text-white">{p.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {p.industry}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      View Project →
                    </p>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsCarousel;
