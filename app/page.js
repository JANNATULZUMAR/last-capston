"use client";

export default function Home() {
const handleSubmit = (e) => {
e.preventDefault();


const name = e.target.name.value;
const email = e.target.email.value;
const message = e.target.message.value;

const subject = "Portfolio Contact from " + name;

const body =
  "Name: " +
  name +
  "\nEmail: " +
  email +
  "\n\nMessage:\n" +
  message;

window.location.href =
  "mailto:zummarzummar681@gmail.com?subject=" +
  encodeURIComponent(subject) +
  "&body=" +
  encodeURIComponent(body);


};

return ( <main> <nav className="navbar"> <div className="logo">Portfolio.</div>

```
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

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

  <section id="about" className="section">
    <p className="section-title">ABOUT ME</p>

    <h2>Who I Am</h2>

    <p className="section-text">
      I am a passionate frontend developer who loves creating
      beautiful and functional websites. I enjoy learning new
      technologies and turning ideas into real projects.
    </p>
  </section>

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

  <section id="projects" className="section">
    <p className="section-title">MY WORK</p>

    <h2>Recent Projects</h2>

    <div className="projects">
      <div className="project-card">
        <h3>Rizumi Glam Hub</h3>

        <p>Fashion e-commerce website.</p>

        <a
          href="https://jannatulzumar.github.io/rizumi-e-commerce-web/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Project
        </a>
      </div>

      <div className="project-card">
        <h3>TicTacToe</h3>

        <p>A fun and interactive Tic Tac Toe game.</p>

        <a
          href="https://jannatulzumar.github.io/Tictactoe/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Project
        </a>
      </div>

      <div className="project-card">
        <h3>Currency Converter</h3>

        <p>A simple currency conversion application.</p>

        <a
          href="https://jannatulzumar.github.io/currency-convertor/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Project
        </a>
      </div>
    </div>
  </section>

  <section id="contact" className="section contact-section">
    <p className="section-title">CONTACT ME</p>

    <h2>Let's Work Together</h2>

    <p className="section-text">
      Have a project in mind? Send me a message and I will get
      back to you.
    </p>

    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
      ></textarea>

      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  </section>

  <footer>
    <p>© 2026 My Portfolio. All Rights Reserved.</p>
  </footer>
</main>

);
}
