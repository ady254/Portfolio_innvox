import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, MessageSquare, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

// import Spline from '@splinetool/react-spline';
import AIVoiceDemo from "../components/AIVoiceDemo";

const AISolutions = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen overflow-hidden">

      {/* SECTION 1: HERO - THE VISION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/0 to-gray-900/0 dark:from-blue-900/20 dark:via-gray-950 dark:to-gray-950 -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              The Future Isn't Coming.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">It's Listening.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12 font-light">
              We don't just build chatbots. We create intelligent, empathetic AI agents that live on your website and phone lines, ready to scale your business 24/7.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="animate-bounce"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center pt-2 opacity-50">
              <div className="w-1 h-2 bg-gray-400 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (Story Bridge) */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">The "Human Bottleneck"</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Your team is brilliant, but they can't be everywhere at once.
              <span className="text-red-500 font-semibold"> 60% of leads</span> go cold because of missed calls.
              <span className="text-red-500 font-semibold"> Customer satisfaction</span> drops after 5 minutes of waiting.
              <br /><br />
              It's time to break the bottleneck.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION (Interactive Demo) */}
      <section className="py-20 md:py-32 relative bg-black overflow-hidden">
        {/* Spline Background Removed - Moved to AIVoiceDemo */}
        <div className="absolute inset-0 z-0">
          {/* <Spline scene="https://prod.spline.design/Zg4pQXj0ygKIyp-F/scene.splinecode" /> */}
        </div>

        {/* Parallax Background Overlay (Optional - kept for texture if needed, or remove if Spline is enough) */}
        <motion.div style={{ y }} className="absolute inset-0 opacity-30 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        </motion.div>

        <div className="relative z-10 px-6">
          <AIVoiceDemo />
        </div>
      </section>

      {/* SECTION 4: THE IMPACT (Stats) */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-gray-900 dark:text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-5xl font-black mb-2">0s</div>
              <div className="text-gray-500 font-medium">Wait Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8"
            >
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <div className="text-5xl font-black mb-2">300%</div>
              <div className="text-gray-500 font-medium">Lead Capture</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8"
            >
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-5xl font-black mb-2">24/7</div>
              <div className="text-gray-500 font-medium">Availability</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: APPLICATIONS & CHATBOTS */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Beyond Voice</h2>
            <p className="text-gray-600 dark:text-gray-400">Our ecosystem extends to text, automation, and deep integration.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chatbots Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative"
            >
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Context-Aware Chatbots</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Not just "if/then" scripts. Our bots read context, understand intent, and can even process images or documents in real-time.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full">WhatsApp</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full">Web</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full">Instagram</span>
              </div>
            </motion.div>

            {/* Automation Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Workflow Automation</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Connect your AI agents directly to your CRM. When a lead is qualified, it's instantly instantly booked in your calendar and added to Salesforce.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">Zapier</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">HubSpot</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">Notion</span>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-2"
            >
              Deploy Your Agent Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AISolutions;
