import { useEffect } from "react";
import { Link } from "react-router-dom";
import benignityLogo from "../assets/benignity-logo.png";
import "./DonatePage.css";

// ─── Swap this in once the Donorbox campaign is live ───────────────────────
// Full URL: https://donorbox.org/your-campaign-slug
const DONORBOX_CAMPAIGN_SLUG = null;
// ──────────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TRUST_ITEMS = [
  "501(c)(3) registered nonprofit",
  "Automatic tax receipt via email",
  "One-time or recurring giving",
  "Secure & encrypted checkout",
  "100% goes to those we serve",
  "Donor records maintained",
];

export default function DonatePage() {
  useEffect(() => {
    if (!DONORBOX_CAMPAIGN_SLUG) return;
    const existing = document.getElementById("donorbox-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "donorbox-script";
    script.src = "https://donorbox.org/widget.js";
    script.setAttribute("paypalExpress", "false");
    document.body.appendChild(script);
    return () => {
      const el = document.getElementById("donorbox-script");
      if (el) document.body.removeChild(el);
    };
  }, []);

  return (
    <div className="dp">
      {/* NAV */}
      <nav className="dp-nav">
        <Link to="/" className="logo">
          <img src={benignityLogo} alt="Benignity, Inc." className="logo-img" />
        </Link>
        <Link to="/" className="dp-back">← Back to site</Link>
      </nav>

      <div className="dp-body">
        {/* ── LEFT: branded intro ── */}
        <div className="dp-form-col">
          <p className="eyebrow">Make a Gift</p>
          <h1 className="dp-headline">Give someone room to breathe.</h1>
          <p className="dp-sub">
            Your gift provides free vacation lodging for individuals facing
            life-limiting illness and their unpaid caregivers — creating space
            to step away, rest, and simply be present with each other.
          </p>

          <div className="dp-trust-list">
            {TRUST_ITEMS.map(item => (
              <div key={item} className="dp-trust-row">
                <span className="dp-trust-check"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Donorbox embed or placeholder ── */}
        <div className="dp-embed-col">
          {DONORBOX_CAMPAIGN_SLUG ? (
            <iframe
              src={`https://donorbox.org/embed/${DONORBOX_CAMPAIGN_SLUG}`}
              name="donorbox"
              allowPaymentRequest
              seamless
              frameBorder="0"
              scrolling="no"
              title="Donate to Benignity, Inc."
              className="dp-embed"
            />
          ) : (
            <div className="dp-placeholder">
              <div className="dp-placeholder-inner">
                <div className="dp-placeholder-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3>Donations Coming Soon</h3>
                <p>
                  We&apos;re finishing up our secure donation setup. Check back
                  shortly — or reach out directly to give today.
                </p>
                <a
                  href="mailto:compassionateprogram@benignity.org"
                  className="btn btn-primary"
                >
                  Contact Us to Give
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
