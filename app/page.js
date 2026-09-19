"use client";

import { useState } from "react";

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <main>
{/* Navbar */} <nav className="navbar"> <div className="logo">Portfolio.</div>


    <button
      className="menu-btn"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

    <div className={`nav-links ${menuOpen ? "open" : ""}`}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  {/* Hero */}
  <section id="home" className="hero">
    <div className="hero-text">
      <p className="small-text">HELLO, I'M</p>

      <h1>
        Jannat ul <span>zumar</span>
      </h1>

      <h2>Frontend Developer</h2>

      <p>
        I create modern, responsive and user-friendly websites
        using modern web technologies.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">
          View My Work
        </a>

        <a href="#contact" className="btn secondary">
          Contact Me
        </a>
      </div>
    </div>

    <div className="hero-image">
      <div className="image-circle">
<img
  src="/profile.PNG"
  alt="Profile"
  className="profile-img"
/>

      </div>
    </div>
  </section>

  {/* About */}
  <section id="about" className="section">
    <p className="section-title">ABOUT ME</p>
    <h2>Who I Am</h2>

    <p className="section-text">
      I am a passionate frontend developer who loves creating
      beautiful and functional websites. I enjoy learning new
      technologies and turning ideas into real projects.
    </p>
  </section>

  {/* Skills */}
  <section id="skills" className="section">
    <p className="section-title">MY SKILLS</p>
    <h2>What I Know</h2>

    <div className="skills">
      <div className="skill">HTML</div>
      <div className="skill">CSS</div>
      <div className="skill">JavaScript</div>
      <div className="skill">React</div>
      <div className="skill">Next.js</div>
      <div className="skill">GitHub</div>
    </div>
  </section>

  {/* Projects */}
  <section id="projects" className="section">
    <p className="section-title">MY WORK</p>
    <h2>Recent Projects</h2>

    <div className="projects">
      <div className="project-card">
        <h3>Rizumi Glam Hub</h3>
        <p>Fashion e-commerce website.</p>
      </div>

      <div className="project-card">
        <h3>Movie App</h3>
        <p>A modern movie browsing application.</p>
      </div>

      <div className="project-card">
        <h3>Currency Converter</h3>
        <p>A simple currency conversion application.</p>
      </div>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="section contact">
    <p className="section-title">CONTACT</p>
    <h2>Let's Work Together</h2>

    <p>
      Have a project in mind? Feel free to get in touch with me.
    </p>

    <a href="mailto:your@email.com" className="btn">
      Contact Me
    </a>
  </section>

  {/* Footer */}
  <footer>
    <p>© 2026 My Portfolio. All Rights Reserved.</p>
  </footer>
</main>

);
}



