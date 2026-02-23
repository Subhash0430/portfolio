import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Subhash</h2>
        <div>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#internship">Internship</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>R. Subhash</h1>
          <h3>Full Stack Developer | IoT Enthusiast</h3>

          <div className="social-icons">
            <a href="mailto:subhashsanju2003@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://github.com/Subhash0430" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/subhash-r-3b725a249" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

          <a href="/resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate Computer Science Engineering student with strong interest 
          in Full Stack Development and IoT-based smart systems. I enjoy building 
          real-time monitoring solutions and scalable web applications that solve 
          real-world problems.
        </p>
        <p>
          I have hands-on experience in HTML, Java, and Python, and I am continuously 
          improving my development skills by working on practical projects and internships.
        </p>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <h2>Education</h2>

        <div className="card">
          <h3>B.E Computer Science Engineering (Pursuing)</h3>
          <p>Excel Engineering College, Namakkal</p>
          <p>2023 – 2027</p>
        </div>

        <div className="card">
          <h3>Diploma in Electrical and Electronics Engineering</h3>
          <p>Government Polytechnic College, Salem</p>
          <p>2019 – 2022 | 65%</p>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section id="internship" className="section">
        <h2>Internship Experience</h2>

        <div className="card">
          <h3>Machine Learning Intern – Oduga Tech Pvt Ltd</h3>
          <ul>
            <li>Worked on real-world machine learning models.</li>
            <li>Performed data preprocessing and model training.</li>
            <li>Improved prediction accuracy using optimization techniques.</li>
            <li>Collaborated with team on ML-based problem solving.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Greenhouse Monitoring & Control System using IoT</h2>

        <div className="card">
          <ul>
            <li>Developed automated greenhouse system using Raspberry Pi.</li>
            <li>Integrated temperature, humidity, soil moisture, and light sensors.</li>
            <li>Implemented real-time monitoring and automatic irrigation control.</li>
            <li>Built IoT dashboard for remote monitoring and alerts.</li>
            <li>Improved plant growth efficiency using smart environment control.</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: subhashsanju2003@gmail.com</p>
        <p>Phone: 9498827025</p>
      </section>

    </div>
  );
}

export default App;