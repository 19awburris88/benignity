import { Link } from "react-router-dom";
import benignityLogo from "../assets/benignity-logo.png";
import "./EventPage.css";

const EVENTBRITE_URL = "https://www.eventbrite.com/e/1st-annual-first-responders-dating-auction-and-gala-tickets-1988595120537";

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const ParkingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const MusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
  </svg>
);
const GavelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m14 13-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10"/>
    <path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/>
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function EventPage() {
  return (
    <div className="ep">
      {/* NAV */}
      <nav className="dp-nav">
        <Link to="/" className="logo">
          <img src={benignityLogo} alt="Benignity, Inc." className="logo-img" />
        </Link>
        <Link to="/" className="dp-back">← Back to site</Link>
      </nav>

      {/* HERO */}
      <section className="ep-hero">
        <div className="ep-hero-inner">
          <div className="ep-hero-tags">
            <span>Indianapolis, IN</span>
            <span>21+</span>
            <span>Benefiting Benignity, Inc.</span>
          </div>
          <h1>1st Annual First Responders Dating Auction & Gala</h1>
          <p className="ep-hero-sub">
            Mix, mingle, and maybe find a spark — all while supporting free
            vacation lodging for families facing life-limiting illness.
          </p>

          <div className="ep-hero-meta">
            <div className="ep-meta-item">
              <CalendarIcon />
              <span>Saturday, August 1, 2025</span>
            </div>
            <div className="ep-meta-item">
              <ClockIcon />
              <span>5:00 PM – 8:00 PM</span>
            </div>
            <div className="ep-meta-item">
              <MapPinIcon />
              <span>Industry &mdash; 545 Kentucky Ave., Indianapolis, IN</span>
            </div>
          </div>

          <div className="ep-hero-actions">
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white ep-ticket-btn">
              Get Tickets
            </a>
            <a className="btn btn-outline-light" href="#details">Event Details</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ep-about">
        <div className="ep-section-inner">
          <div className="ep-about-grid">
            <div>
              <p className="eyebrow">About the Evening</p>
              <h2>An unforgettable night for a meaningful cause.</h2>
              <p>
                Join us for an inaugural evening celebrating the brave first
                responders in our community — firefighters, police officers,
                paramedics, and more — while raising funds for Benignity, Inc.&apos;s
                mission to provide free vacation lodging for patients and
                caregivers facing life-limiting illness.
              </p>
              <p>
                Whether you&apos;re bidding in the dating auction, dancing the night
                away, or simply connecting with incredible people, this is one
                evening you won&apos;t forget.
              </p>
              <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginTop: "8px"}}>
                Get Tickets
              </a>
            </div>
            <div className="ep-about-card">
              <div className="ep-about-mission">
                <p className="eyebrow">Benefiting</p>
                <h3>Benignity, Inc.</h3>
                <p>
                  Every ticket sold helps fund free weeklong vacation stays for
                  patients with life-limiting illness and their unpaid caregivers
                  — giving families the gift of rest, dignity, and meaningful
                  memories.
                </p>
                <div className="ep-about-stat">
                  <strong>100%</strong>
                  <span>of lodging costs covered for every family</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="ep-expect">
        <div className="ep-section-inner">
          <div className="ep-expect-header">
            <p className="eyebrow">What to Expect</p>
            <h2>A night of connection and community.</h2>
          </div>
          <div className="ep-expect-grid">
            <div className="ep-expect-card">
              <div className="ep-expect-icon"><GavelIcon /></div>
              <h3>The Dating Auction</h3>
              <p>
                Bid on curated dates with Indianapolis&apos;s finest first
                responders. Each auction package goes toward supporting families
                through Benignity, Inc.
              </p>
            </div>
            <div className="ep-expect-card ep-expect-card--featured">
              <div className="ep-expect-icon"><HeartIcon /></div>
              <h3>Mix & Mingle</h3>
              <p>
                Meet first responders and fellow attendees in a relaxed, fun
                atmosphere. This is an evening designed for real connection.
              </p>
            </div>
            <div className="ep-expect-card">
              <div className="ep-expect-icon"><MusicIcon /></div>
              <h3>Celebrate</h3>
              <p>
                Dance, laugh, and celebrate with a community that shows up for
                each other — all in support of a mission that matters.
              </p>
            </div>
            <div className="ep-expect-card">
              <div className="ep-expect-icon"><StarIcon /></div>
              <h3>Make an Impact</h3>
              <p>
                Your presence directly funds compassionate vacation lodging for
                families navigating illness. A fun night with a real purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section id="details" className="ep-details">
        <div className="ep-section-inner">
          <div className="ep-details-grid">
            <div>
              <p className="eyebrow">Event Details</p>
              <h2>Everything you need to know.</h2>
              <div className="ep-detail-list">
                <div className="ep-detail-item">
                  <div className="ep-detail-icon"><CalendarIcon /></div>
                  <div>
                    <strong>Date & Time</strong>
                    <p>Saturday, August 1, 2025</p>
                    <p>5:00 PM – 8:00 PM (Doors open at 5:00 PM)</p>
                  </div>
                </div>
                <div className="ep-detail-item">
                  <div className="ep-detail-icon"><MapPinIcon /></div>
                  <div>
                    <strong>Venue</strong>
                    <p>Industry</p>
                    <p>545 Kentucky Ave., Indianapolis, IN 46225</p>
                    <a
                      href="https://maps.google.com/?q=545+Kentucky+Ave+Indianapolis+IN+46225"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ep-map-link"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
                <div className="ep-detail-item">
                  <div className="ep-detail-icon"><ParkingIcon /></div>
                  <div>
                    <strong>Parking</strong>
                    <p>Free parking available at the venue.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ep-faq">
              <p className="eyebrow">FAQ</p>
              <h2>Questions & Answers</h2>
              <div className="ep-faq-list">
                {[
                  {
                    q: "Who can attend?",
                    a: "This is a 21+ event. Valid photo ID required at the door.",
                  },
                  {
                    q: "What is the dress code?",
                    a: "Cocktail attire is encouraged. Come looking your best for a gala-style evening.",
                  },
                  {
                    q: "Will I go on a date with a first responder?",
                    a: "The dating auction gives attendees the chance to bid on curated dates with first responders — but all guests are welcome to attend regardless of whether they bid.",
                  },
                  {
                    q: "What is the refund policy?",
                    a: "All ticket sales are final. No refunds will be issued.",
                  },
                  {
                    q: "More questions?",
                    a: "Reach us at compassionateprogram@benignity.org or call 1-855-717-KIND.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="ep-faq-item">
                    <strong>{q}</strong>
                    <p>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSOR BANNER */}
      <section className="ep-sponsor">
        <div className="ep-section-inner">
          <div className="ep-sponsor-card">
            <div>
              <p className="eyebrow eyebrow--light">Get Involved</p>
              <h2>Interested in sponsoring the event?</h2>
              <p>
                Corporate and community sponsors help make this evening possible
                and amplify the impact for families across Indiana.
              </p>
            </div>
            <Link className="btn btn-white" to="/#contact">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER TICKET CTA */}
      <div className="ep-footer-cta">
        <div className="ep-footer-cta-inner">
          <div>
            <p className="ep-footer-cta-label">1st Annual First Responders Dating Auction & Gala</p>
            <p className="ep-footer-cta-meta">Aug 1 · 5 PM · Industry, Indianapolis</p>
          </div>
          <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Get Tickets
          </a>
        </div>
      </div>
    </div>
  );
}
