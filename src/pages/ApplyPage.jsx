import { useState } from "react";
import { Link } from "react-router-dom";
import benignityLogo from "../assets/benignity-logo.png";
import "./ApplyPage.css";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="ap">
        <nav className="dp-nav">
          <Link to="/" className="logo">
            <img src={benignityLogo} alt="Benignity, Inc." className="logo-img" />
          </Link>
          <Link to="/" className="dp-back">← Back to site</Link>
        </nav>
        <div className="ap-success">
          <div className="ap-success-card">
            <div className="ap-success-icon"><CheckIcon /></div>
            <h2>Application Received</h2>
            <p>
              Thank you for applying. Your application has been submitted and
              will be entered into our next monthly drawing. We will be in touch
              if you are selected.
            </p>
            <p className="ap-success-sub">
              Questions? Reach us at{" "}
              <a href="mailto:compassionateprogram@benignity.org">
                compassionateprogram@benignity.org
              </a>
            </p>
            <Link to="/" className="btn btn-primary">Return Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ap">
      {/* NAV */}
      <nav className="dp-nav">
        <Link to="/" className="logo">
          <img src={benignityLogo} alt="Benignity, Inc." className="logo-img" />
        </Link>
        <Link to="/" className="dp-back">← Back to site</Link>
      </nav>

      {/* HERO */}
      <div className="ap-hero">
        <div className="ap-hero-inner">
          <p className="eyebrow eyebrow--light">Program Application</p>
          <h1>Apply for a Complimentary Stay</h1>
          <p className="ap-hero-sub">
            Benignity, Inc. provides free vacation lodging for individuals
            facing life-limiting illness and their unpaid caregivers. Applications
            are reviewed monthly and recipients are selected through a lottery drawing.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="ap-how">
        <div className="ap-how-inner">
          <div className="ap-step">
            <div className="ap-step-num">1</div>
            <div>
              <strong>Complete this application</strong>
              <p>Fill out all sections below including caregiver and physician information.</p>
            </div>
          </div>
          <div className="ap-step">
            <div className="ap-step-num">2</div>
            <div>
              <strong>Upload physician statement</strong>
              <p>A signed statement from your physician confirming your life-limiting diagnosis is required.</p>
            </div>
          </div>
          <div className="ap-step">
            <div className="ap-step-num">3</div>
            <div>
              <strong>Monthly lottery drawing</strong>
              <p>All complete applications are entered into a monthly drawing. Selected applicants will be contacted directly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="ap-body">
        <form
          name="benignity-application"
          method="POST"
          encType="multipart/form-data"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="ap-form"
        >
          <input type="hidden" name="form-name" value="benignity-application" />
          <input type="hidden" name="bot-field" />

          {/* SECTION 1: APPLICANT */}
          <div className="ap-section">
            <div className="ap-section-header">
              <span className="ap-section-num">01</span>
              <div>
                <h2>Applicant Information</h2>
                <p>The individual facing a life-limiting illness.</p>
              </div>
            </div>

            <div className="ap-grid-2">
              <div className="ap-field">
                <label htmlFor="applicant-first">First Name <span>*</span></label>
                <input id="applicant-first" name="applicant-first" type="text" required placeholder="First name" />
              </div>
              <div className="ap-field">
                <label htmlFor="applicant-last">Last Name <span>*</span></label>
                <input id="applicant-last" name="applicant-last" type="text" required placeholder="Last name" />
              </div>
            </div>

            <div className="ap-grid-2">
              <div className="ap-field">
                <label htmlFor="applicant-dob">Date of Birth <span>*</span></label>
                <input id="applicant-dob" name="applicant-dob" type="date" required />
              </div>
              <div className="ap-field">
                <label htmlFor="applicant-phone">Phone Number <span>*</span></label>
                <input id="applicant-phone" name="applicant-phone" type="tel" required placeholder="(555) 000-0000" />
              </div>
            </div>

            <div className="ap-field">
              <label htmlFor="applicant-email">Email Address <span>*</span></label>
              <input id="applicant-email" name="applicant-email" type="email" required placeholder="you@email.com" />
            </div>

            <div className="ap-field">
              <label htmlFor="applicant-address">Home Address <span>*</span></label>
              <input id="applicant-address" name="applicant-address" type="text" required placeholder="Street address, city, state, ZIP" />
            </div>

            <div className="ap-field">
              <label htmlFor="applicant-diagnosis">Brief Description of Diagnosis <span>*</span></label>
              <textarea id="applicant-diagnosis" name="applicant-diagnosis" required rows={3} placeholder="Please briefly describe your diagnosis..." />
            </div>
          </div>

          {/* SECTION 2: CAREGIVER */}
          <div className="ap-section">
            <div className="ap-section-header">
              <span className="ap-section-num">02</span>
              <div>
                <h2>Primary Caregiver Information</h2>
                <p>The unpaid caregiver who will accompany the applicant.</p>
              </div>
            </div>

            <div className="ap-grid-2">
              <div className="ap-field">
                <label htmlFor="caregiver-first">First Name <span>*</span></label>
                <input id="caregiver-first" name="caregiver-first" type="text" required placeholder="First name" />
              </div>
              <div className="ap-field">
                <label htmlFor="caregiver-last">Last Name <span>*</span></label>
                <input id="caregiver-last" name="caregiver-last" type="text" required placeholder="Last name" />
              </div>
            </div>

            <div className="ap-grid-2">
              <div className="ap-field">
                <label htmlFor="caregiver-relationship">Relationship to Applicant <span>*</span></label>
                <input id="caregiver-relationship" name="caregiver-relationship" type="text" required placeholder="e.g. Spouse, Parent, Sibling" />
              </div>
              <div className="ap-field">
                <label htmlFor="caregiver-phone">Phone Number <span>*</span></label>
                <input id="caregiver-phone" name="caregiver-phone" type="tel" required placeholder="(555) 000-0000" />
              </div>
            </div>

            <div className="ap-field">
              <label htmlFor="caregiver-email">Email Address <span>*</span></label>
              <input id="caregiver-email" name="caregiver-email" type="email" required placeholder="caregiver@email.com" />
            </div>

            <div className="ap-field">
              <label htmlFor="party-size">Total Number of Travelers <span>*</span></label>
              <select id="party-size" name="party-size" required>
                <option value="">Select party size</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6+">6 or more</option>
              </select>
            </div>
          </div>

          {/* SECTION 3: PHYSICIAN */}
          <div className="ap-section">
            <div className="ap-section-header">
              <span className="ap-section-num">03</span>
              <div>
                <h2>Physician Information</h2>
                <p>The physician who will confirm your diagnosis.</p>
              </div>
            </div>

            <div className="ap-grid-2">
              <div className="ap-field">
                <label htmlFor="physician-name">Physician Full Name <span>*</span></label>
                <input id="physician-name" name="physician-name" type="text" required placeholder="Dr. First Last" />
              </div>
              <div className="ap-field">
                <label htmlFor="physician-practice">Practice / Hospital <span>*</span></label>
                <input id="physician-practice" name="physician-practice" type="text" required placeholder="Practice or hospital name" />
              </div>
            </div>

            <div className="ap-grid-2">
              <div className="ap-field">
                <label htmlFor="physician-phone">Physician Phone <span>*</span></label>
                <input id="physician-phone" name="physician-phone" type="tel" required placeholder="(555) 000-0000" />
              </div>
              <div className="ap-field">
                <label htmlFor="physician-email">Physician Email</label>
                <input id="physician-email" name="physician-email" type="email" placeholder="physician@practice.com" />
              </div>
            </div>
          </div>

          {/* SECTION 4: PHYSICIAN STATEMENT UPLOAD */}
          <div className="ap-section">
            <div className="ap-section-header">
              <span className="ap-section-num">04</span>
              <div>
                <h2>Physician Statement</h2>
                <p>Upload a signed statement from your physician confirming your life-limiting diagnosis.</p>
              </div>
            </div>

            <div className="ap-field">
              <label htmlFor="physician-statement">
                Physician Statement Document <span>*</span>
              </label>
              <div className="ap-upload">
                <input
                  id="physician-statement"
                  name="physician-statement"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <p className="ap-upload-hint">PDF, Word document, or image — max 10MB</p>
              </div>
            </div>

            <div className="ap-field">
              <label htmlFor="additional-notes">Additional Notes</label>
              <textarea
                id="additional-notes"
                name="additional-notes"
                rows={4}
                placeholder="Any special accommodations, preferred travel seasons, or anything else you'd like us to know..."
              />
            </div>

            <div className="ap-field">
              <label htmlFor="how-heard">How did you hear about Benignity, Inc.?</label>
              <select id="how-heard" name="how-heard">
                <option value="">Select one</option>
                <option value="physician">My physician / medical team</option>
                <option value="social-media">Social media</option>
                <option value="friend-family">Friend or family member</option>
                <option value="nonprofit">Another nonprofit or organization</option>
                <option value="search">Online search</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* SECTION 5: CONSENT */}
          <div className="ap-section ap-section--last">
            <div className="ap-section-header">
              <span className="ap-section-num">05</span>
              <div>
                <h2>Agreement & Submission</h2>
              </div>
            </div>

            <div className="ap-check-group">
              <label className="ap-checkbox">
                <input type="checkbox" name="consent-accurate" required />
                <span>I confirm that all information provided in this application is accurate and truthful to the best of my knowledge.</span>
              </label>
              <label className="ap-checkbox">
                <input type="checkbox" name="consent-lottery" required />
                <span>I understand that submission of this application does not guarantee a stay, and that recipients are selected through a monthly lottery drawing.</span>
              </label>
              <label className="ap-checkbox">
                <input type="checkbox" name="consent-contact" required />
                <span>I consent to being contacted by Benignity, Inc. regarding my application.</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary ap-submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit Application"}
            </button>

            <p className="ap-privacy">
              Your information is kept private and used only for application review.
              Questions? Email{" "}
              <a href="mailto:compassionateprogram@benignity.org">
                compassionateprogram@benignity.org
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
