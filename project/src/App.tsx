/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import AISolutions from './pages/AISolutions';
import Contact from './pages/Contact';
import Subscription from './pages/Subscription';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const AppContent = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);

    // Persist Dark Mode
    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = (value: boolean) => {
        setDarkMode(value);
        if (value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    if (loading) {
        return <SplashScreen onComplete={() => setLoading(false)} />;
    }

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark bg-[#0f172a] text-white' : 'bg-white text-gray-900'}`}>
            <ScrollToTop />
            <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
            <main className="flex-grow pt-20"> {/* Add padding top for fixed navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/subscription" element={<Subscription />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;
