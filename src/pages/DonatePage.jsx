import { useState } from "react";
import { Link } from "react-router-dom";
import benignityLogo from "../assets/benignity-logo.png";
import "./DonatePage.css";

const PRESET_AMOUNTS = [25, 50, 100, 250, 500];

const IMPACT = {
  25:  "Covers essential supplies — linens, toiletries, and comfort items — for a family's stay.",
  50:  "Funds a full day of peaceful vacation lodging for a patient or caregiver.",
  100: "Sponsors two nights of restorative lodging for a family in need.",
  250: "Funds nearly half a week away — real rest, real relief for a caregiver.",
  500: "Provides a full week of compassionate vacation lodging for a family facing life-limiting illness.",
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default function DonatePage() {
  const [frequency, setFrequency] = useState("once");
  const [selected, setSelected] = useState(100);
  const [custom, setCustom] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isCustom = selected === "custom";
  const displayAmount = isCustom ? custom : selected;
  const impactText = isCustom ? null : IMPACT[selected];

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="dp-thankyou">
        <Link to="/" className="dp-logo">
          <img src={benignityLogo} alt="Benignity, Inc." className="logo-img" />
        </Link>
        <div className="dp-thankyou-card">
          <div className="dp-thankyou-check">
            <CheckIcon />
          </div>
          <h2>Thank you for your generosity.</h2>
          <p>
            Your gift of <strong>${displayAmount || "—"}</strong> makes it possible for a
            family to rest, recover, and create lasting memories. We&apos;ll send a
            confirmation and tax receipt to your email.
          </p>
          <Link className="btn btn-primary" to="/">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dp">
      {/* NAV */}
      <nav className="dp-nav">
        <Link to="/" className="logo">
          <img src={benignityLogo} alt="Benignity, Inc." className="logo-img" />
        </Link>
        <Link to="/" className="dp-back">
          ← Back to site
        </Link>
      </nav>

      <div className="dp-body">
        {/* ── LEFT: donation form ── */}
        <div className="dp-form-col">
          <p className="eyebrow">Make a Gift</p>
          <h1 className="dp-headline">Give a family room to breathe.</h1>
          <p className="dp-sub">
            Your gift provides free vacation lodging for patients with
            life-limiting illness and unpaid caregivers — creating moments of
            rest, dignity, and connection that money can&apos;t buy.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Frequency toggle */}
            <div className="dp-freq">
              <button
                type="button"
                className={`dp-freq-btn${frequency === "once" ? " dp-freq-btn--on" : ""}`}
                onClick={() => setFrequency("once")}
              >
                Give Once
              </button>
              <button
                type="button"
                className={`dp-freq-btn${frequency === "monthly" ? " dp-freq-btn--on" : ""}`}
                onClick={() => setFrequency("monthly")}
              >
                Give Monthly
              </button>
            </div>

            {/* Amount grid */}
            <div className="dp-amounts">
              {PRESET_AMOUNTS.map(amt => (
                <button
                  key={amt}
                  type="button"
                  className={`dp-amt-btn${selected === amt ? " dp-amt-btn--on" : ""}`}
                  onClick={() => { setSelected(amt); setCustom(""); }}
                >
                  ${amt}
                </button>
              ))}
              <div className={`dp-custom${isCustom ? " dp-custom--on" : ""}`}>
                <span>$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Custom"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); setSelected("custom"); }}
                  onFocus={() => setSelected("custom")}
                />
              </div>
            </div>

            {/* Impact message */}
            {impactText && (
              <div className="dp-impact-msg">
                <span className="dp-impact-dot" />
                <p>{impactText}</p>
              </div>
            )}

            {/* Donor info */}
            <div className="dp-section-label">Your Information</div>
            <div className="dp-fields">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dp-first">First Name</label>
                  <input id="dp-first" type="text" placeholder="Jane" required />
                </div>
                <div className="form-group">
                  <label htmlFor="dp-last">Last Name</label>
                  <input id="dp-last" type="text" placeholder="Doe" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="dp-email">Email</label>
                <input id="dp-email" type="email" placeholder="jane@example.com" required />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary dp-submit">
              {frequency === "monthly"
                ? `Give $${displayAmount || "—"} / month`
                : `Donate $${displayAmount || "—"}`}
            </button>

            <div className="dp-secure">
              <span className="dp-lock"><LockIcon /></span>
              Secure &amp; encrypted — Benignity, Inc. is a 501(c)(3) nonprofit.
              Your gift is tax-deductible.
            </div>
          </form>
        </div>

        {/* ── RIGHT: impact panel ── */}
        <div className="dp-impact-col">
          <div className="dp-impact-panel">
            <p className="eyebrow eyebrow--light">Your Impact</p>
            <h2>Every dollar goes directly to families.</h2>
            <p className="dp-impact-intro">
              Benignity covers 100% of lodging costs for every family we serve.
              No fees, no hidden charges — just compassionate care.
            </p>

            <div className="dp-tiers">
              {PRESET_AMOUNTS.map(amt => (
                <button
                  key={amt}
                  type="button"
                  className={`dp-tier${selected === amt ? " dp-tier--on" : ""}`}
                  onClick={() => { setSelected(amt); setCustom(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                  <strong>${amt}</strong>
                  <span>{IMPACT[amt]}</span>
                </button>
              ))}
            </div>

            <div className="dp-trust">
              {[
                "501(c)(3) Nonprofit",
                "Tax-deductible gift",
                "Secure & encrypted",
                "100% goes to families",
              ].map(label => (
                <div key={label} className="dp-trust-item">
                  <span className="dp-trust-check"><CheckIcon /></span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
