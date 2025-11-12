import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const feedback = e.target.feedback.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!email || !phone || !feedback) {
      alert("⚠ Please fill out all fields!");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("❌ Please enter a valid email address!");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("❌ Please enter a valid 10-digit phone number!");
      return;
    }

    alert("✅ Thank you for your feedback!");
    e.target.reset();
  };

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li
            onClick={() => scrollToSection(homeRef)}
            data-hover="Welcome to my Home section!"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection(aboutRef)}
            data-hover="Know more About Me!"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection(projectsRef)}
            data-hover="Check out my Projects!"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection(contactRef)}
            data-hover="Get in touch with me!"
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* ===== Home Section ===== */}
      <section ref={homeRef} id="home" className="section home">
        <h1>Welcome to My Nature-Inspired World 🌿</h1>
        <p>
          Welcome to my portfolio! Here, art blooms from the beauty of nature —
          where every leaf, wave, and breeze tells its own story.
        </p>
        <p>
          I find inspiration in the serenity of landscapes, the rhythm of
          seasons, and the harmony between earth and color. Through my work, I
          bring nature’s calmness and vibrance to life on canvas and screen.
        </p>
        <p>
          Step into a world where imagination meets the wilderness — where
          colors breathe, trees whisper, and light dances across every creation.
          Whether you seek tranquility or inspiration, my art invites you to
          reconnect with nature’s soul.
        </p>
      </section>

      {/* ===== About Section ===== */}
      <section ref={aboutRef} id="about" className="section about">
        <h1>About Me 📸</h1>
        <p>
          I’m a passionate nature and wildlife photographer who finds beauty in
          the simplest moments — a bird taking flight, the golden rays over a
          forest, or the quiet stillness of an early morning landscape.
        </p>
        <p>
          My journey began with a curiosity to capture the world’s natural
          wonders through my lens. Over time, photography became more than a
          hobby — it became my way of connecting with the earth and telling
          untold stories of life in the wild.
        </p>
        <p>
          I specialize in <strong>landscape</strong>, <strong>wildlife</strong>,
          and <strong>macro photography</strong>, focusing on natural light,
          vivid details, and authentic emotion in every shot.
        </p>
        <p>
          Beyond capturing images, I strive to raise awareness about wildlife
          conservation and the importance of preserving our planet’s beauty. My
          mission is to inspire others to see the harmony between humans,
          animals, and nature.
        </p>
      </section>

      {/* ===== Projects Section ===== */}
      <section ref={projectsRef} id="projects" className="section projects">
        <h1>Photography Projects 📸</h1>
        <p>
          Explore some of my favorite captures — moments where nature, light,
          and life come together beautifully.
        </p>

        <h2 className="section-title">🌿 Photography of Nature & Animals 🦁</h2>
        <p className="section-description">
          Explore the breathtaking beauty of wildlife and natural landscapes
          captured through my lens. Each shot tells a story of harmony, strength,
          and the untamed spirit of nature.
        </p>

        <div className="projects-gallery">
          <div className="project-item">
            <img src="../imgs/pic1.jpeg" alt="Matterhorn" />
            <h3>The Majestic Matterhorn Mountains 🏔</h3>
            <p>
              Captured during sunrise, the Matterhorn glows golden under the
              morning light — a symbol of strength and solitude in the Swiss
              Alps.
            </p>
          </div>

          <div className="project-item">
            <img src="../imgs/pic2.jpeg" alt="Falcon" />
            <h3>The Swift Falcon in Flight 🦅</h3>
            <p>
              A breathtaking moment of a falcon soaring gracefully through the
              sky — representing speed, focus, and freedom.
            </p>
          </div>

          <div className="project-item">
            <img src="../imgs/pic3.jpg" alt="Lion" />
            <h3>Scarface — The King of the Savannah 🦁</h3>
            <p>
              This portrait captures the raw power and regal presence of the
              African lion — the undisputed ruler of the wild.
            </p>
          </div>

          <div className="project-item">
            <img src="../imgs/pic4.jpeg" alt="Tiger" />
            <h3>Bengal Tigers in the Wild 🐅</h3>
            <p>
              A rare glimpse into the dense forests of India, showcasing the
              beauty and grace of the Bengal tiger.
            </p>
          </div>

          <div className="project-item">
            <img src="../imgs/pic5.jpeg" alt="Peacock" />
            <h3>The Dazzling Peacock 🦚</h3>
            <p>
              With its vibrant feathers and mesmerizing patterns, the peacock
              stands as a timeless symbol of beauty and pride.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section ref={contactRef} id="contact" className="section contact">
        <h1>Contact</h1>
        <p>Feel free to reach out through email or social media!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Feedback:</label>
            <textarea
              name="feedback"
              placeholder="Write your feedback..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>

      {/* ===== Footer Section ===== */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Nature Photography by Mohd Nadeem
            Hussain 🌿
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
