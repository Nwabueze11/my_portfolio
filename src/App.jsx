import React, { useState, useEffect } from "react";
import DownloadCV from './components/DownloadCV';
import './App.css';

// Social Icons (SVG)
const LinkedInIcon = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.62z" />
  </svg>
);
const GitHubIcon = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.384 0-6.63-5.37-12-12-12z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.896 6.994c-.003 5.456-4.438 9.891-9.893 9.891zm8.413-18.306a11.815 11.815 0 00-8.413-3.49c-6.627 0-12 5.373-12 12 0 2.121.555 4.199 1.607 6.032l-1.693 6.179a1 1 0 001.262 1.262l6.18-1.693a11.934 11.934 0 006.031 1.606h.005c6.627 0 12-5.373 12-12 0-3.182-1.243-6.174-3.49-8.416z" />
  </svg>
);

// Animated Gradient Background
const AnimatedBackground = ({ dark }) => (
  <div
    className={`fixed inset-0 -z-10 animate-gradient bg-gradient-to-br ${
      dark
        ? "from-gray-900 via-gray-800 to-gray-700"
        : "from-blue-300 via-purple-300 to-pink-300"
    } opacity-60`}
  ></div>
);

// Animation CSS
const animationStyles = `
@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradientBG 10s ease-in-out infinite;
  transition: background 0.3s ease-in-out;
}
.animate-name {
  display: inline-block;
  background: linear-gradient(90deg, #2563eb, #a21caf, #f59e42, #2563eb);
  background-size: 200% 200%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: gradientBG 4s linear infinite;
}
.animate-link {
  transition: transform 0.2s, color 0.2s;
}
.animate-link:hover {
  transform: scale(1.15) rotate(-3deg);
  color: #a21caf;
}
.switch-toggle {
  width: 48px;
  height: 28px;
  background: #e5e7eb;
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
}
.switch-toggle.dark {
  background: #22223b;
}
.switch-knob {
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  top: 2px;
  transition: left 0.3s, background 0.3s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}
.switch-toggle.dark .switch-knob {
  left: 22px;
  background: #333;
  color: #fbbf24;
}
.switch-toggle .switch-knob {
  color: #f59e42;
}
@media (max-width: 360px) {
  .animate-name {
    font-size: 0.8rem;
  }
}
`;

// Projects Data
const projects = [
  {
    img: "/talos.png",
    title: "Talos Shopping Site",
    desc: "Responsive e-commerce website with cart functionality.",
    tech: "HTML, CSS, JavaScript Tailwind CSS",
    demo: "#",
    github: "https://github.com/Nwabueze11/E-comm.git"
  },
  {
    img: "/project.png",
    title: "Chidare Website",
    desc: "Personal Website built with Html and Tailwind CSS.",
    tech: "HTML, Tailwind CSS",
    demo: "https://chideraekechi.com",
    github: "https://github.com/Nwabueze11/chidares.git"
  },
  {
    img: "/Shopflow.png",
    title: "Shopping App",
    desc: "Responsive e-commerce website with cart functionality. This project is for shopping.",
    tech: "React, API",
    demo: "https://nwabueze11.github.io/shoping-more/",
    github: "https://github.com/Nwabueze11/shoping-more.git"
  },
  {
    img: "/kitchen_web.png",
    title: "Kitchen website",
    desc: "Simple website with markdown support.",
    tech: "HTML, CSS, JavaScript Tailwind Css",
    demo: "https://nwabueze11.github.io/Kitchen-Web/",
    github: "https://github.com/Nwabueze11/Kitchen-Web.git"
  },
  {
    img: "/to-do.png",
    title: "Task Manager",
    desc: "To-do app with drag-and-drop and dark mode.",
    tech: "HTML, CSS",
    demo: "#",
    github: "https://github.com/Nwabueze11/To_Do_List.git"
  },
  {
    img: "/travel.png",
    title: "Landing Page",
    desc: "Modern landing page for startups.",
    tech: "HTML, CSS, JavaScript",
    demo: "https://nwabueze11.github.io/Traveling/",
    github: "https://github.com/Nwabueze11/Traveling.git"
  }
];

// Dark/Light Mode Switch
function DarkModeSwitch({ dark, toggle }) {
  return (
    <button
      aria-label="Toggle dark mode"
      className={`switch-toggle${dark ? " dark" : ""} shadow-lg`}
      onClick={toggle}
      style={{ position: "fixed", top: 16, left: 16, zIndex: 30 }}
    >
      <span className="switch-knob">
        {dark ? (
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-5-5a1 1 0 01-1-1H2a1 1 0 110-2h2a1 1 0 011 1zm10 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-7.071 7.071a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 111.414-1.414l1.414 1.414a1 1 0 010 1.414zm9.9-9.9a1 1 0 010-1.414l1.414-1.414a1 1 0 111.414 1.414l-1.414 1.414a1 1 0 01-1.414 0zm-9.9 0a1 1 0 010-1.414L3.515 3.515A1 1 0 114.93 2.1l1.414 1.414a1 1 0 010 1.414zm9.9 9.9a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 111.414-1.414l1.414 1.414a1 1 0 010 1.414zM10 5a5 5 0 100 10A5 5 0 0010 5z" />
          </svg>
        )}
      </span>
    </button>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="scroll-smooth relative text-gray-800 font-sans dark:text-gray-100 transition-colors duration-300">
      <style>{animationStyles}</style>
      <AnimatedBackground dark={dark} />
      <DarkModeSwitch dark={dark} toggle={() => setDark((d) => !d)} />

      {/* Social Links */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 flex flex-col gap-3 z-20">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 animate-link dark:text-blue-300 dark:hover:text-blue-400">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black animate-link dark:text-gray-100 dark:hover:text-white">
          <GitHubIcon />
        </a>
        <a href="https://wa.me/2348145143365" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 animate-link dark:text-green-400 dark:hover:text-green-300">
          <WhatsAppIcon />
        </a>
      </div>

      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 bg-transparent">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-name">Hi, I'm Nwabueze. G. C</h1>
        <p className="text-lg sm:text-2xl md:text-3xl mb-6 font-semibold">Front-End Developer who loves clean and responsive design.</p>
        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
          <a
            href="#projects"
            className="bg-blue-600 text-white text-lg sm:text-xl px-4 py-2 rounded-xl font-bold shadow-lg hover:bg-blue-700 animate-link dark:bg-blue-800 dark:hover:bg-blue-900 w-full sm:w-auto text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 text-lg sm:text-xl px-4 py-2 rounded-xl font-bold shadow-lg hover:bg-blue-600 hover:text-white animate-link dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-700 dark:hover:text-white w-full sm:w-auto text-center"
          >
            Contact Me
          </a>
          <div className="w-full sm:w-auto flex justify-center">
            <DownloadCV />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-name">Skills</h2>
        <div className="flex justify-center flex-wrap gap-6 mb-4">
          <img
            src="/download.jpg"
            alt="Skills Showcase"
            className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl shadow-lg border-4 border-blue-200 dark:border-gray-700"
          />
          <img
            src="/download (1).jpg"
            alt="Skills Showcase"
            className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl shadow-lg border-4 border-blue-200 dark:border-gray-700"
          />
          <img
            src="/download (3).jpg"
            alt="Skills Showcase"
            className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl shadow-lg border-4 border-blue-200 dark:border-gray-700"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-lg sm:text-2xl font-semibold">HTML • Tailwind CSS • CSS • JavaScript • Git • Responsive Design</p>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">Currently learning: <span className="font-bold text-blue-700 dark:text-blue-400">React</span> • <span className="font-bold text-purple-700 dark:text-purple-400">Python</span></p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 animate-name">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl p-4 hover:scale-105 transition-transform duration-300 dark:bg-gray-900">
              <a href={proj.img} data-lightbox="models" data-title={proj.title}>
                <img src={proj.img} alt={proj.title} className="rounded-xl mb-4 w-full h-36 sm:h-48 object-cover" />
              </a>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 animate-name">{proj.title}</h3>
              <p className="mb-3 text-base sm:text-lg">{proj.desc}</p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 dark:text-gray-300">{proj.tech}</p>
              <div className="flex gap-4">
                <a href={proj.demo} className="text-blue-600 text-base sm:text-lg font-semibold hover:underline animate-link dark:text-blue-400" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={proj.github} className="text-blue-600 text-base sm:text-lg font-semibold hover:underline animate-link dark:text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-name">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-2xl font-medium">I'm a self-taught front-end developer based in Nigeria. I enjoy turning designs into functional websites and am currently looking for an internship or remote role. I love clean code and Nigerian jollof rice 🍚.</p>
      </section>

      {/* Certificates Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-name">Certificate</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="/certifies.png" data-lightbox="models" data-title="NWABUEZE GODWIN CHINAZA's Responsive Web Design">
            <img
              src="/certifies.png"
              alt="Skills Showcase"
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl shadow-lg border-4 border-blue-200 dark:border-gray-700"
            />
          </a>
          <a href="/certifies(2).png" data-lightbox="models" data-title="NWABUEZE GODWIN CHINAZA's Front End Development Libraries">
            <img
              src="/certifies(2).png"
              alt="Skills Showcase"
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl shadow-lg border-4 border-blue-200 dark:border-gray-700"
            />
          </a>
          <a href="/certifies(1).png" data-lightbox="models" data-title="NWABUEZE GODWIN CHINAZA's Legacy Front End">
            <img
              src="/certifies(1).png"
              alt="Skills Showcase"
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl shadow-lg border-4 border-blue-200 dark:border-gray-700"
            />
          </a>
          <a href="/certifies.png" data-lightbox="models" data-title="NWABUEZE GODWIN CHINAZA's Scientific Computing with Python">
            <img
              src="/certifies.png"
              alt="Skills Showcase"
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl shadow-lg border-4 border-blue-200 dark:border-gray-700"
            />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-blue-100 text-center dark:bg-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-name">Contact Me</h2>
        <p className="mb-6 text-lg sm:text-2xl font-semibold">Let's work together or just say hi 👋</p>
        <a href="mailto:chinwabueze411@gmail.com" className="text-blue-700 text-lg sm:text-2xl font-bold underline animate-link dark:text-blue-300">chinwabueze411@gmail.com</a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-base sm:text-lg text-gray-500 font-semibold dark:text-gray-400">© 2025 Nwabueze. G. C. Built with React & Tailwind CSS.</footer>
    </div>
  );
}