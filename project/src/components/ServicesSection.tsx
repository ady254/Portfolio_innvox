import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Website as a Service",
      points: ["Modern UI/UX", "Mobile-friendly", "Fast & secure"],
      link: "/services#website",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Meta Ads Management",
      points: ["Campaign setup", "Creatives", "Lead tracking"],
      link: "/services#ads",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "WhatsApp Automation",
      points: ["Broadcasts", "Automation", "API setup"],
      link: "/services#whatsapp",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Maintenance & Support",
      points: ["Monthly updates", "Bug fixes", "Hosting support"],
      link: "/services#maintenance",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Custom Development",
      points: ["Backend systems", "Dashboard", "APIs"],
      link: "/services#development",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "AI Chatbots",
      points: ["Lead qualification", "FAQ answers", "24/7 support"],
      link: "/services#chatbots",
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white leading-tight"
        >
          Everything Your Business Needs—<br />Under One Roof
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              onClick={() => navigate(service.link)}
              className="cursor-pointer relative group rounded-2xl p-[2px] transition-all duration-500"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-70 blur-xl group-hover:opacity-100 transition-all duration-500`}
              ></div>

              {/* Card Content */}
              <div
                className="
                  relative bg-white dark:bg-gray-800 
                  rounded-2xl p-6 md:p-8 shadow-lg 
                  group-hover:shadow-2xl 
                  transition-all duration-300 h-full
                "
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                  {service.title}
                </h3>

                <ul className="space-y-4">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="mt-5 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-all">
                  Learn more →
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
