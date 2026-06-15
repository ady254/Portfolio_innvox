"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "AI Solutions", link: "/ai-solutions" },
    { label: "Projects", link: "/projects" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="w-full py-5 bg-white dark:bg-gray-900/80 backdrop-blur-xl shadow-sm fixed top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/40">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-600 relative z-50">
          <Link href="/">INN<span className="text-black dark:text-white">VOX</span></Link>
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition relative group"
            >
              {item.label}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
            </Link>
          ))}
        </nav>

        {/* CONTROLS */}
        <div className="flex items-center gap-3 relative z-50">
          {/* DARK MODE */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6 text-gray-900 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white dark:bg-[#0f172a] z-40 flex flex-col pt-32 px-6 pb-10 md:hidden h-screen"
          >
            {/* Menu Items */}
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <Link
                    href={item.link}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500 font-mono pt-2">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-auto border-t border-gray-100 dark:border-gray-800 pt-8"
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition group"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">Start Your Project</span>
                <div className="p-2 rounded-full bg-blue-600 text-white group-hover:bg-blue-700 transition">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>

              <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition">Privacy</Link>
                <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition">Terms</Link>
                <a href="mailto:hello@innvox.in" className="hover:text-gray-900 dark:hover:text-white transition">hello@innvox.in</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
