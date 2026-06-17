"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from "framer-motion";
import Modal from "./Modal";

const Testimonials = () => {
  const [selected, setSelected] = useState<any>(null);

  const originalData = [
    {
      name: "Sangat Motor Centre",
      company: "Automotive • Patna, Bihar",
      text: "Innvox built a stunning website for our premium car care centre — complete with a 3D configurator, slide-to-book service flow, and mobile-first design. Customers can schedule appointments in seconds and our brand finally matches the quality of service we deliver. Bookings and enquiries have grown noticeably since launch.",
      image: "/SangatMotor.webp",
    },
    {
      name: "Al Harmain Islamic Institute",
      company: "Education",
      text: "InnVox built our website and managed our ads. We get 4x more leads.",
      image: "/alharmainlogo.jpeg",
    },
    {
      name: "Altamash Nasim",
      company: "E-Commerce Store",
      text: "We are very satisfied with the e-commerce website delivered by Innvox. The design is clean, user-friendly, and all features like product pages, checkout, and order tracking work smoothly across devices. Innvox delivered the project on time with great professionalism. Highly recommended.",
      image: "/hygienalogo.webp",
    },
    {
      name: "Aaysha International Institute",
      company: "Education",
      text: "“Working with Innvox was a smooth and professional experience. They built a modern education platform for us with all the features we needed—responsive, on time, and with great communication throughout. We’re delighted with the final result.”",
      image: "/aayshalogo.jpeg",
    },

    {
      name: "Kunal Dhingra",
      company: "Electroplating Industry",
      text: "“We truly appreciate the teamwork and dedication of the Innvox team. Thank you for building our online platform.”",
      image: "/metallogo.png",
    },
  ];
  const data = [...originalData, ...originalData, ...originalData];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center dark:text-white"
        >
          Why Businesses Love InnVox
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop={true}
            centeredSlides={false}
            autoplay={{
              delay: 4000,
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
            className="py-6"
          >
            {data.map((t, i) => (
              <SwiperSlide
                key={i}
                className="bg-white dark:bg-gray-800 dark:border-gray-700 border rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-[1.02] transition h-auto"
                onClick={() => setSelected(t)}
              >
                <img
                  src={t.image}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                  alt={t.name}
                />
                <p className="text-gray-600 dark:text-gray-300 italic line-clamp-3 mb-4">
                  "{t.text}"
                </p>
                <h3 className="font-bold dark:text-white">{t.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.company}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <Modal isOpen={!!selected} testimonial={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
};

export default Testimonials;
