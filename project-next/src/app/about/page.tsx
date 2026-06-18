"use client";

import ContactSection from "@/components/ContactSection";


const About = () => {

  const techStack = [
    { name: "React", slug: "react" },
    { name: "Tailwind", slug: "tailwindcss" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Firebase", slug: "firebase" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "OpenAI", slug: "openai" },
    { name: "Framer", slug: "framer" },
    { name: "Supabase", slug: "supabase" },
    { name: "Twilio", slug: "twilio" },
    { name: "Mapbox", slug: "mapbox" },
    { name: "Stripe", slug: "stripe" },
    { name: "Docker", slug: "docker" },
    { name: "AWS", slug: "amazonaws" }
  ];

  const team = [
    { name: "InnVox Strategy Team", role: "Client discovery, project planning, and growth systems" },
    { name: "InnVox Build Team", role: "Web development, automation, integrations, and QA" },
    { name: "InnVox AI Team", role: "Chatbots, voice agents, and workflow automation" },
  ];

  const values = [
    { title: "Ship fast", desc: "We keep projects moving with clear timelines and focused execution." },
    { title: "Stay honest", desc: "No vague promises. We tell you what is useful, realistic, and worth building." },
    { title: "Measure everything", desc: "Websites, ads, and automation should connect back to leads, revenue, or saved time." },
  ];



  return (
    <>
      {/* Hero Section with ABOUT US */}
      <section className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">

          {/* Main ABOUT US Title */}
          <div className="relative mb-12 md:mb-20">
            <h1 className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 text-6xl sm:text-8xl md:text-[12rem] lg:text-[16rem] font-black leading-none tracking-tighter">
              <span className="text-gray-900">ABOUT</span>
              <div className="hidden md:flex flex-col items-center mt-8">
                <div className="w-1 h-16 md:h-32 bg-gradient-to-b from-blue-500 to-transparent"></div>
                <div className="w-1 h-16 md:h-32 bg-gradient-to-b from-blue-500 to-blue-600"></div>
              </div>
              <span className="text-blue-600 md:text-gray-900">US</span>
            </h1>
          </div>

          {/* Company Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Left: Brand panel */}
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center p-10">
                <div className="text-center">
                  <p className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
                    India + GCC
                  </p>
                  <p className="text-5xl md:text-6xl font-black text-gray-900 leading-none">
                    Web.
                    <br />
                    AI.
                    <br />
                    Growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Description */}
            <div className="flex flex-col justify-center">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                We started InnVox in 2025 because we kept seeing the same problem: good businesses running on outdated digital tools. Websites that weren&apos;t converting. Leads falling through the cracks. Teams doing manually what a bot could handle in seconds.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Our team has 5+ years of combined experience across web development, AI, and digital marketing. We work with clients across India and the GCC - including UAE, Saudi Arabia, Qatar, and Bahrain.
              </p>
            </div>
          </div>

          {/* Tagline with blue highlights */}
          <div className="text-center mb-20">
            <p className="text-2xl md:text-4xl font-light text-gray-700 leading-relaxed">
              We bring together the perfect blend of deep technical{" "}
              <span className="text-blue-600 font-bold">expertise</span>, beautiful{" "}
              <span className="text-blue-600 font-bold">design</span> and optimised{" "}
              <span className="text-blue-600 font-bold">usability</span>
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
            {/* Teams */}
            <div className="relative p-8 border border-gray-200 hover:border-blue-500 transition-colors duration-300 group bg-white">
              <p className="text-gray-500 text-xs uppercase mb-2">Teams</p>
              <p className="text-7xl md:text-8xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                5+
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Hackathons */}
            <div className="relative p-8 bg-blue-600 text-white group overflow-hidden">
              <p className="text-blue-100 text-xs uppercase mb-2 relative z-10">Hackathons</p>
              <p className="text-7xl md:text-8xl font-black relative z-10 group-hover:scale-110 transition-transform duration-500 origin-left">
                12+
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Certifications */}
            <div className="relative p-8 border border-gray-200 hover:border-blue-500 transition-colors duration-300 group bg-white">
              <p className="text-gray-500 text-xs uppercase mb-2">Certifications</p>
              <p className="text-7xl md:text-8xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                8+
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Projects */}
            <div className="relative p-8 border border-gray-200 hover:border-blue-500 transition-colors duration-300 group bg-white">
              <p className="text-gray-500 text-xs uppercase mb-2">Projects</p>
              <p className="text-7xl md:text-8xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                50+
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Clients */}
            <div className="relative p-8 border border-gray-200 hover:border-blue-500 transition-colors duration-300 group bg-white">
              <p className="text-gray-500 text-xs uppercase mb-2">Clients</p>
              <p className="text-7xl md:text-8xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                10+
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* "You Could Be Next" Visual Card */}
          <div className="relative mb-20 group cursor-pointer">
            <div className="relative p-16 border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all duration-500 bg-gradient-to-br from-blue-50 to-white group-hover:from-blue-100 group-hover:to-blue-50 rounded-lg overflow-hidden">

              {/* Pulsing background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-blue-500 rounded-full opacity-5 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-blue-600 rounded-full opacity-10 animate-pulse delay-150"></div>
              </div>

              {/* Main content */}
              <div className="relative z-10 flex items-center justify-center gap-12">
                {/* Large Plus Icon */}
                <div className="flex items-center justify-center w-32 h-32 border-4 border-blue-500 rounded-full group-hover:rotate-90 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                  </svg>
                </div>

                {/* "You?" Text with animation */}
                <div className="text-center">
                  <p className="text-8xl md:text-9xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-500 relative">
                    Will you be next?
                    <span className="absolute -top-4 -right-8 text-4xl animate-bounce">✨</span>
                  </p>
                  <div className="mt-4 flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping delay-75"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping delay-150"></div>
                  </div>
                </div>
              </div>

              {/* Arrow pointing at viewer */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2">
                <svg className="w-12 h-12 text-blue-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">The people behind the systems</p>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900">
                Built by focused teams
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {team.map((person) => (
                <div key={person.name} className="p-8 border border-gray-200 bg-white rounded-lg hover:border-blue-500 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xl mb-6">
                    {person.name.split(" ")[1]?.[0] || "I"}
                  </div>
                  <h3 className="font-black text-xl text-gray-900 mb-2">{person.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{person.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">WE&apos;VE WORKED WITH</p>
              <h2 className="text-4xl md:text-6xl font-black">
                <span className="text-blue-600">AMAZING</span>{" "}
                <span className="text-gray-900">Tech Stack</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="aspect-square border border-gray-200 flex flex-col items-center justify-center p-6 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group bg-white"
                >
                  <div className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}`}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://cdn.simpleicons.org/react`;
                        (e.target as HTMLImageElement).style.filter = "grayscale(100%)"
                      }}
                    />
                  </div>
                  <span className="text-gray-900 font-bold text-sm text-center group-hover:text-blue-600 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Decorative circular elements */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-gray-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 border border-gray-100 rounded-full opacity-20"></div>
      </section>

      <ContactSection />

    </>
  );
};

export default About;

