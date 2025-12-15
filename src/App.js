import "./App.css";

function App() {
  const downloadCV = () => {
  window.open(
    "https://drive.google.com/file/d/1Lt73YgIyFYbTQ3jTWBhXu_UM-oWr34C3/view?usp=drive_link",
    "_blank"
  );
};

  return (
    <>
      {/* HOME */}
      <header className="main-header">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark">
      
      {/* LOGO */}
      <a className="navbar-brand fw-bold" href="#home">
        Manoj<span className="text-orange">.</span>
      </a>

      {/* TOGGLER */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* LINKS */}
      <div className="collapse navbar-collapse justify-content-end" id="mainNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-orange ms-2 px-3" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

    </nav>
  </div>
</header>

     <section id="home" className="hero-section">
  <div className="container">
    <div className="row align-items-center min-vh-100">

      {/* LEFT CONTENT */}
      <div className="col-md-6 text-white">
        <h1 className="hero-title">
          Hi, I’m <br />
          <span className="text-orange">Manoj Yadav</span>
        </h1>

        <h4 className="hero-subtitle">
          React & Full Stack Developer
        </h4>

        <p className="hero-text">
          I design and develop modern, fast and scalable web applications
          using React, Next.js, Node.js and MongoDB.
        </p>

        <div className="hero-buttons mt-4">
          <a href="#contact" className="btn btn-orange me-3">
            Hire Me
          </a>

         <button onClick={downloadCV} className="btn btn-outline-light">
  Download CV
</button>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="col-md-6 text-center">
        <img
          src="/developer.jpg"
          alt="Developer"
          className="hero-img"
        />
      </div>

    </div>
  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="section-dark">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <p className="about-text">
                I am a dedicated and detail-oriented
                <span className="text-orange"> Full Stack Developer</span> with
                hands-on experience in building scalable and responsive web
                applications. I specialize in
                <span className="text-orange"> React.js</span>,
                <span className="text-orange"> Next.js</span>,
                <span className="text-orange"> Node.js</span> and
                <span className="text-orange"> MongoDB</span>.
              </p>

              <p className="about-text">
                Currently, I am pursuing my
                <span className="text-orange">
                  {" "}
                  MCA from Vivekananda Global University
                </span>
                , where I am strengthening my foundation in software
                development, system design and modern web technologies.
              </p>

              <p className="about-text">
                I enjoy solving real-world problems, writing clean and
                maintainable code, and continuously improving my skills by
                working on practical projects. I am always eager to learn new
                technologies and contribute to impactful products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section-light">
        <div className="container">
          <h2 className="section-title">Education</h2>

          <div className="row g-4">
            {/* College Education */}
            <div className="col-md-6">
              <div className="edu-box">
                <h4 className="edu-title">College Education</h4>

                <ul className="edu-list">
                  <li>
                    <strong>MCA</strong> – Vivekananda Global University
                    <span className="edu-status">(Pursuing)</span>
                  </li>
                  <li>
                    <strong>PGDCA</strong> – Post Graduate Diploma in Computer
                    Applications
                    <span className="edu-status">(Completed)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Computer Education */}
            <div className="col-md-6">
              <div className="edu-box">
                <h4 className="edu-title">Computer Education</h4>

                <ul className="edu-list">
                  <li>Web Development</li>
                  <li>Computer Fundamentals</li>
                  <li>Internet & Software Tools</li>
                </ul>
              </div>
            </div>

            {/* Professional Courses */}
            <div className="col-md-6">
              <div className="edu-box">
                <h4 className="edu-title">Professional Courses</h4>

                <ul className="edu-list">
                  <li>RACIT</li>
                  <li>Tally ERP</li>
                </ul>
              </div>
            </div>

            {/* School Education */}
            <div className="col-md-6">
              <div className="edu-box">
                <h4 className="edu-title">School Education</h4>

                <ul className="edu-list">
                  <li>12th (Senior Secondary)</li>
                  <li>10th (Secondary School)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-dark">
        <div className="container">
          <h2 className="section-title">Skills & Knowledge</h2>

          <div className="row g-4">
            {/* Frontend */}
            <div className="col-md-6">
              <div className="skill-box">
                <h4 className="skill-title">Frontend Development</h4>

                <ul className="skill-list">
                  <li>
                    <span className="skill-label">Frameworks:</span> React.js,
                    Next.js
                  </li>
                  <li>
                    <span className="skill-label">Styling:</span> CSS3,
                    Bootstrap
                  </li>
                  <li>
                    <span className="skill-label">Utility CSS:</span> Tailwind
                    CSS
                  </li>
                  <li>
                    <span className="skill-label">Language:</span> JavaScript
                    (ES6+)
                  </li>
                </ul>
              </div>
            </div>

            {/* Backend */}
            <div className="col-md-6">
              <div className="skill-box">
                <h4 className="skill-title">Backend Development</h4>

                <ul className="skill-list">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>NestJS</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
            </div>

            {/* Database */}
            <div className="col-md-6">
              <div className="skill-box">
                <h4 className="skill-title">Databases</h4>

                <ul className="skill-list">
                  <li>MongoDB (Compass & Atlas)</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>

            {/* Mobile */}
            <div className="col-md-6">
              <div className="skill-box">
                <h4 className="skill-title">Mobile App Development</h4>

                <ul className="skill-list">
                  <li>React Native</li>
                </ul>
              </div>
            </div>

            {/* Desktop */}
            <div className="col-md-6">
              <div className="skill-box">
                <h4 className="skill-title">Desktop Application Development</h4>

                <ul className="skill-list">
                  <li>Electron.js</li>
                </ul>
              </div>
            </div>

            {/* Version Control */}
            <div className="col-md-6">
              <div className="skill-box">
                <h4 className="skill-title">Version Control</h4>

                <ul className="skill-list">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>GitLab</li>
                </ul>
              </div>
            </div>

            {/* Operating Systems */}
            <div className="col-md-6">
              <div className="skill-box">
                <h4 className="skill-title">Operating Systems</h4>

                <ul className="skill-list">
                  <li>Windows</li>
                  <li>macOS</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WORK EXPERIENCE */}
      <section id="experience" className="section-light">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>

          <div className="row g-4">
            {/* Company 1 */}
            <div className="col-md-6">
              <div className="exp-box">
                <h4 className="exp-role">Frontend Developer</h4>
                <p className="exp-company">
                  WebNWare Info Solutions Private Limited
                </p>

                <p className="exp-duration">Oct 2024 – Jan 2025</p>

                <ul className="exp-list">
                  <li>Worked on frontend development using React.js</li>
                  <li>Developed responsive UI using Bootstrap & CSS</li>
                  <li>Integrated REST APIs and handled state management</li>
                  <li>Collaborated with backend team to deliver features</li>
                </ul>
              </div>
            </div>

            {/* Company 2 */}
            <div className="col-md-6">
              <div className="exp-box">
                <h4 className="exp-role">React Developer</h4>
                <p className="exp-company">ARJ TECHNOLOGIES</p>

                <p className="exp-duration">March 2025 – Present</p>

                <ul className="exp-list">
                  <li>Building scalable React & Next.js applications</li>
                  <li>
                    Worked on reusable components & performance optimization
                  </li>
                  <li>Implemented authentication and role-based access</li>
                  <li>Collaborated in Agile development environment</li>
                  <li>Building a school management software (Scai)</li>
                  <li>
                    Software Review :{" "}
                    <a
                      href="https://arjtechnologies.com/scai-erp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Scai ERP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-light">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="row g-4">
            {[
              "Voice Translator App",
              "Language Translator",
              "Face Verification System",
              "Voice Assistant",
            ].map((project, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card project-card">
                  <div className="card-body">
                    <h5 className="card-title text-orange">{project}</h5>
                    <p className="card-text">
                      React-based project with real-world functionality.
                    </p>
                    <a href="#" className="btn btn-sm btn-orange">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section id="social" className="section-dark text-center">
        <div className="container">
          <h2 className="section-title">Connect With Me</h2>
          <a href="#" className="btn btn-outline-light me-3">
            GitHub
          </a>
          <a href="#" className="btn btn-outline-light">
            LinkedIn
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-light">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>

          <div className="row justify-content-center text-center g-4">
            {/* Phone */}
            <div className="col-md-4 col-6">
              <a href="tel:9306487930" className="contact-card">
                <i className="fas fa-phone-alt"></i>
                <p>Call Me</p>
                <span>9306487930</span>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="col-md-4 col-6">
              <a
                href="https://wa.me/919306487930"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <i className="fab fa-whatsapp"></i>
                <p>WhatsApp</p>
                <span>Chat Now</span>
              </a>
            </div>

            {/* Email */}
            <div className="col-md-4 col-6">
              <a href="mailto:monuyadav4772@gmail.com" className="contact-card">
                <i className="fas fa-envelope"></i>
                <p>Email</p>
                <span>monuyadav4772@gmail.com</span>
              </a>
            </div>

            {/* Instagram */}
            {/* <div className="col-md-3 col-6">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <i className="fab fa-instagram"></i>
          <p>Instagram</p>
          <span>@yourusername</span>
        </a>
      </div> */}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-center text-white py-3">
        © 2025 Manoj Yadav | All Rights Reserved
      </footer>
    </>
  );
}

export default App;
