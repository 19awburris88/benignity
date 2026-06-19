import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import benignityLogo from "./assets/benignity-logo.png";
import DonatePage from "./pages/DonatePage";
import EventPage from "./pages/EventPage";
import ApplyPage from "./pages/ApplyPage";

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18"/>
    <path d="M9 21V9"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* NAV */}
      <nav className={`nav${menuOpen ? " nav--open" : ""}`}>
        <a href="#top" className="logo" onClick={closeMenu}>
          <img src={benignityLogo} alt="Benignity, Inc." className="logo-img" />
        </a>

        <div className={`nav-links${menuOpen ? " nav-links--open" : ""}`}>
          <a href="#mission" onClick={closeMenu}>Mission</a>
          <a href="#program" onClick={closeMenu}>Program</a>
          <a href="#impact" onClick={closeMenu}>Impact</a>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <div className="nav-right">
          <Link className="nav-btn nav-btn--outline" to="/apply">Apply</Link>
          <Link className="nav-btn" to="/donate">
            Donate
          </Link>
          <button
            className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="eyebrow">Compassionate care beyond the clinical</p>
            <h1>Giving families room to breathe.</h1>
            <p className="hero-text">
              Benignity provides free vacation lodging for individuals facing
              life-limiting illness and their unpaid caregivers — creating space
              to rest, reconnect, and make memories that matter.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/donate">
                Donate Now
              </Link>
              <a className="btn btn-outline" href="#program">
                Explore Our Program
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-badge">Featured Program</div>
            <h3>Compassionate Vacation Lodging</h3>
            <p>
              Free weeklong stays for individuals facing life-limiting illness
              and the unpaid caregivers who walk alongside them — time to rest,
              reconnect, and simply be together.
            </p>
            <div className="hero-card-footer">
              <div className="hero-card-item">
                <span className="check-wrap"><CheckIcon /></span>
                <span>Free for individuals & their unpaid caregivers</span>
              </div>
              <div className="hero-card-item">
                <span className="check-wrap"><CheckIcon /></span>
                <span>Restorative vacation accommodations</span>
              </div>
              <div className="hero-card-item">
                <span className="check-wrap"><CheckIcon /></span>
                <span>No application fees, ever</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <strong>100%</strong>
            <span>Free to Families</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>501(c)(3)</strong>
            <span>Registered Nonprofit</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>Nationwide</strong>
            <span>Partnerships</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>Families</strong>
            <span>At the Center</span>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 2880 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wave 1 — primary, repeated twice for seamless loop */}
          <path className="wave wave-1" d="M0,36 C160,60 320,12 480,36 C640,60 800,12 960,36 C1120,60 1280,12 1440,36 C1600,60 1760,12 1920,36 C2080,60 2240,12 2400,36 C2560,60 2720,12 2880,36" />
          {/* Wave 2 — offset phase */}
          <path className="wave wave-2" d="M0,28 C200,52 400,8 600,32 C800,56 1000,4 1200,28 C1400,52 1600,8 1800,32 C2000,56 2200,4 2400,28 C2600,52 2800,8 2880,28" />
          {/* Wave 3 — slow background */}
          <path className="wave wave-3" d="M0,44 C240,20 480,64 720,40 C960,20 1200,60 1440,40 C1680,20 1920,60 2160,40 C2400,20 2640,60 2880,40" />
        </svg>
      </div>

      {/* MISSION */}
      <section id="mission" className="mission">
        <div className="mission-inner">
          <div className="mission-header">
            <p className="eyebrow">Our Mission</p>
            <h2>Rest for the journey. Care for the caregiver.</h2>
          </div>

          <div className="mission-body">
            <p className="mission-lead">
              Benignity exists for individuals navigating life-limiting illness
              and the unpaid caregivers who love and support them.
            </p>
            <p className="mission-text">
              Through donated lodging, community support, and compassionate
              partnerships, we help both individuals and their caregivers step
              away from the weight of illness and into genuine rest. Because
              everyone touched by a life-limiting diagnosis deserves space to
              breathe.
            </p>

            <div className="mission-pillars">
              <div className="pillar">
                <div className="pillar-icon">
                  <HomeIcon />
                </div>
                <div className="pillar-body">
                  <strong>Donated Lodging</strong>
                  <p>Beautiful vacation accommodations, provided completely free of charge.</p>
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">
                  <HeartIcon />
                </div>
                <div className="pillar-body">
                  <strong>Compassionate Support</strong>
                  <p>Community partners who genuinely care about the whole family.</p>
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">
                  <StarIcon />
                </div>
                <div className="pillar-body">
                  <strong>Lasting Memories</strong>
                  <p>Time and space to reconnect, rest, and simply be present together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="program">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">What We Provide</p>
            <h2>A week away. A lifetime of memories.</h2>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-icon">
                <PersonIcon />
              </div>
              <h3>For Patients</h3>
              <p>
                Providing peaceful accommodations for individuals navigating
                life-limiting illness — a chance to spend meaningful time with
                loved ones outside the hospital.
              </p>
            </div>

            <div className="card card--featured">
              <div className="card-icon">
                <HeartIcon />
              </div>
              <h3>For Caregivers</h3>
              <p>
                Offering rest and genuine relief to unpaid caregivers carrying
                significant emotional and physical burdens, day in and day out,
                without recognition.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <UsersIcon />
              </div>
              <h3>For Families</h3>
              <p>
                Creating opportunities for connection, celebration, and lasting
                memories in a beautiful, comfortable environment that feels like
                home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="impact">
        <div className="impact-inner">
          <div className="impact-text">
            <p className="eyebrow eyebrow--light">Why It Matters</p>
            <h2>Caregiving can be heavy. Compassion can make it lighter.</h2>
            <p>
              Every stay supported through Benignity gives individuals facing
              illness and their unpaid caregivers permission to rest — and a
              reminder that they are seen, valued, and worthy of compassion.
            </p>
            <Link className="btn btn-light" to="/donate">
              Support a Family Today
            </Link>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <strong>Rest</strong>
              <p>A chance to exhale — physically and emotionally — away from daily stress.</p>
            </div>
            <div className="impact-card">
              <strong>Relief</strong>
              <p>Temporary distance from clinical environments and caregiver fatigue.</p>
            </div>
            <div className="impact-card">
              <strong>Dignity</strong>
              <p>Being treated with honor and compassion in a beautiful, peaceful setting.</p>
            </div>
            <div className="impact-card">
              <strong>Memories</strong>
              <p>Moments families will hold onto and treasure for the rest of their lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="donate" className="donate">
        <div className="section-inner">
          <div className="section-header section-header--center">
            <p className="eyebrow">Get Involved</p>
            <h2>Help sponsor a stay for someone in need.</h2>
            <p className="section-lead">
              Your support — in any form — helps provide lodging, comfort, and
              genuine rest for individuals facing life-limiting illness and the
              unpaid caregivers who walk alongside them every day.
            </p>
          </div>

          <div className="involvement-grid">
            <div className="involvement-card involvement-card--primary">
              <div className="involvement-icon">
                <HeartIcon />
              </div>
              <h3>Apply for a Stay</h3>
              <p>
                Facing a life-limiting illness? You and your unpaid caregiver
                may qualify for a free vacation stay through our monthly lottery.
              </p>
              <Link className="btn btn-white" to="/apply">
                Apply Now
              </Link>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">
                <HeartIcon />
              </div>
              <h3>Donate</h3>
              <p>
                Every dollar directly supports free vacation stays for
                individuals facing life-limiting illness and their unpaid caregivers.
              </p>
              <Link className="btn btn-outline-dark" to="/donate">
                Donate Now
              </Link>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">
                <GiftIcon />
              </div>
              <h3>Become a Sponsor</h3>
              <p>
                Corporate and community sponsorships amplify our reach and create
                more opportunities for those who need it most.
              </p>
              <a className="btn btn-outline-dark" href="#contact">Learn More</a>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">
                <PersonIcon />
              </div>
              <h3>Volunteer</h3>
              <p>
                Offer your time, skills, and heart to a mission that changes
                lives across the country.
              </p>
              <a className="btn btn-outline-dark" href="#contact">Get Involved</a>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">
                <BuildingIcon />
              </div>
              <h3>Community Partnership</h3>
              <p>
                Organizations, faith communities, and businesses can partner to
                create real, lasting impact.
              </p>
              <a className="btn btn-outline-dark" href="#contact">Partner With Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="events">
        <div className="events-inner">
          <div className="event-card">
            <div className="event-left">
              <p className="eyebrow">Upcoming Event &mdash; 21+</p>
              <h2>1st Annual First Responders Dating Auction & Gala</h2>
              <p>
                Mix, mingle, and maybe find a spark — all while supporting free
                vacation lodging for patients and caregivers facing life-limiting
                illness. An evening of connection, community, and mission.
              </p>
              <div className="event-details">
                <div className="event-detail">
                  <CalendarIcon />
                  <span>Saturday, August 1 &nbsp;&bull;&nbsp; 5:00 PM – 8:00 PM</span>
                </div>
                <div className="event-detail">
                  <MapPinIcon />
                  <span>Industry &nbsp;&bull;&nbsp; 545 Kentucky Ave., Indianapolis, IN 46225</span>
                </div>
              </div>
              <div className="event-meta">
                <span>Free parking</span>
                <span>In-person</span>
                <span>21+</span>
              </div>
            </div>
            <div className="event-actions">
              <Link className="btn btn-white" to="/events/gala">
                Get Tickets
              </Link>
              <a className="btn btn-outline-light" href="#contact">
                Become an Event Sponsor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <p className="eyebrow">Contact Us</p>
            <h2>Let&apos;s talk about how you can help.</h2>
            <p>
              Whether you&apos;d like to refer a family, volunteer, donate, or
              explore a partnership — we would love to hear from you.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:compassionateprogram@benignity.org">
                  compassionateprogram@benignity.org
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+18557174634">1-855-717-KIND</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website</span>
                <a
                  href="https://benignity.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  benignity.org
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="Jane" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="jane@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="interest">I&apos;m interested in&hellip;</label>
              <select id="interest">
                <option>Donating</option>
                <option>Volunteering</option>
                <option>Becoming a Sponsor</option>
                <option>Community Partnership</option>
                <option>Referring a Family</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell us how you'd like to get involved or how we can help..."
                rows="5"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <img src={benignityLogo} alt="Benignity, Inc." className="logo-img logo-img--footer" />
            </a>
            <p>Compassion. Rest. Relief. Meaningful time away.</p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/benignityinc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Benignity on Instagram"
                className="footer-social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
                <span>@benignityinc</span>
              </a>
            </div>
            <p className="footer-legal">
              Benignity, Inc. is a registered 501(c)(3) nonprofit organization.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navigate</h4>
            <a href="#mission">Mission</a>
            <a href="#program">Program</a>
            <a href="#impact">Impact</a>
            <a href="#events">Events</a>
            <a href="#contact">Contact</a>
            <Link to="/apply" style={{marginTop: "4px"}}>Apply for a Stay</Link>
          </div>

          <div className="footer-contact-col">
            <h4>Contact</h4>
            <a href="mailto:compassionateprogram@benignity.org">
              compassionateprogram@benignity.org
            </a>
            <a href="tel:+18557174634">1-855-717-KIND</a>
            <a
              href="https://benignity.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              benignity.org
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Benignity, Inc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/events/gala" element={<EventPage />} />
    </Routes>
  );
}

export default App;
