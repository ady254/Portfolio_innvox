"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Loader2, 
  AlertCircle, 
  MessageCircle, 
  User, 
  Sparkles, 
  Globe2, 
  ChevronDown, 
  Send,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    country: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', service: '', country: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formSteps = [
    {
      step: "01",
      title: "Submit Requirements",
      description: "Fill the form with your project details and goals.",
      icon: Send,
      color: "text-blue-500 bg-blue-500/10"
    },
    {
      step: "02",
      title: "Discovery Call",
      description: "We schedule a 15-minute quick call to align on expectations.",
      icon: Calendar,
      color: "text-indigo-500 bg-indigo-500/10"
    },
    {
      step: "03",
      title: "Tailored Proposal",
      description: "Get a clear roadmap, timeline, and pricing within 48 hours.",
      icon: Clock,
      color: "text-emerald-500 bg-emerald-500/10"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" /> Let's Collaborate
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight"
          >
            Tell Us What You're{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Building.
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-gray-800/80 p-8 md:p-12 rounded-[32px] shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8">
              Start Your Project
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="relative group">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 transition-colors group-focus-within:text-blue-600">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-medium text-sm"
                  />
                </div>
              </div>

              {/* Grid for Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email field */}
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 transition-colors group-focus-within:text-blue-600">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="hello@company.com"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-medium text-sm"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 transition-colors group-focus-within:text-blue-600">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-medium text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="relative group">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 transition-colors group-focus-within:text-blue-600">
                  Service Interested In
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors pointer-events-none" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-10 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all appearance-none font-medium text-sm cursor-pointer"
                  >
                    <option value="" className="dark:bg-gray-900">Select a service</option>
                    <option value="website" className="dark:bg-gray-900">Website as a Service</option>
                    <option value="ads" className="dark:bg-gray-900">Meta Ads Management</option>
                    <option value="whatsapp" className="dark:bg-gray-900">WhatsApp Marketing & Automation</option>
                    <option value="development" className="dark:bg-gray-900">Custom Development</option>
                    <option value="chatbot" className="dark:bg-gray-900">AI Chatbots & Voice Agents</option>
                    <option value="maintenance" className="dark:bg-gray-900">Maintenance & Support</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-focus-within:text-blue-600 transition-colors" />
                </div>
              </div>

              {/* Country Selection */}
              <div className="relative group">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 transition-colors group-focus-within:text-blue-600">
                  Your Location
                </label>
                <div className="relative">
                  <Globe2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors pointer-events-none" />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-10 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all appearance-none font-medium text-sm cursor-pointer"
                  >
                    <option value="" className="dark:bg-gray-900">Select your country</option>
                    <option value="india" className="dark:bg-gray-900">India 🇮🇳</option>
                    <option value="uae" className="dark:bg-gray-900">UAE 🇦🇪</option>
                    <option value="saudi-arabia" className="dark:bg-gray-900">Saudi Arabia 🇸🇦</option>
                    <option value="qatar" className="dark:bg-gray-900">Qatar 🇶🇦</option>
                    <option value="bahrain" className="dark:bg-gray-900">Bahrain 🇧🇭</option>
                    <option value="other" className="dark:bg-gray-900">Other Region</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-focus-within:text-blue-600 transition-colors" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative group overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 w-1/2 bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    Submit Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Success Alert */}
              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-2xl flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-green-800 dark:text-green-300 text-sm">Success!</p>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-0.5 leading-relaxed">
                      Thank you for contacting us! We've received your query and sent a confirmation email.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Alert */}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-2xl flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 dark:text-red-300 text-sm">Error Submitting Form</p>
                    <p className="text-xs text-red-700 dark:text-red-400 mt-0.5">{error}</p>
                  </div>
                </motion.div>
              )}

              <p className="text-center text-xs text-gray-400 dark:text-gray-500 font-medium">
                🔒 Your data is fully secured. We respond to every inquiry within 24 hours.
              </p>
            </form>
          </motion.div>

          {/* Right Column: Steps & Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Value card / description */}
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
                Let's Build Something Meaningful.
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                Tell us your goals, requirements, and challenges. We turn ideas into scalable digital products that deliver real business impact.
              </p>
            </div>

            {/* Micro-timeline steps */}
            <div className="space-y-6">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                What happens next?
              </h4>
              <div className="relative pl-1 space-y-8 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800">
                {formSteps.map((step, idx) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div 
                      key={step.step}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative flex gap-4 items-start group"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 flex-shrink-0 font-bold text-xs ring-4 ring-white dark:ring-gray-950 ${step.color}`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
                          {step.title}
                          <span className="text-gray-300 dark:text-gray-700 text-xs font-bold font-mono">
                            {step.step}
                          </span>
                        </h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-[24px]" />
              <div className="bg-white dark:bg-gray-900/90 rounded-[23px] p-6 relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    Fast Response
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                    Prefer direct chat?
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Usually replies in under 15 minutes.
                  </p>
                </div>
                <a
                  href="https://wa.me/919939711942?text=Hi%20InnVox%2C%20I%27d%20like%20to%20start%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-all w-full sm:w-auto justify-center cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Direct Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/20 backdrop-blur-sm flex items-start gap-4 hover:border-blue-500/50 transition-colors">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Us</p>
                  <a href="mailto:connect@innvox.in" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-colors mt-0.5 block">
                    connect@innvox.in
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/20 backdrop-blur-sm flex items-start gap-4 hover:border-blue-500/50 transition-colors">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Call Us</p>
                  <a href="tel:+919939711942" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-colors mt-0.5 block">
                    +91 9939 711942
                  </a>
                  <a href="tel:+918873355385" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors block">
                    +91 8873 355385
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/20 backdrop-blur-sm flex items-start gap-4 sm:col-span-2 hover:border-blue-500/50 transition-colors">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Headquarters & Service Area</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-0.5">
                    New Delhi, India
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    Delivering modern systems across India, UAE, Saudi Arabia, Qatar & Bahrain.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
