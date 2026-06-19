import { useState } from "react";
import { Link } from "react-router-dom";
import benignityLogo from "../assets/benignity-logo.png";
import "./ApplyPage.css";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TERMS = `By submitting this application, I acknowledge and agree to the following:

Medical Clearance: I confirm that the patient is medically cleared to travel and participate in a vacation stay. Benignity, Inc. is not responsible for any medical decisions or outcomes related to travel.

Transportation: I understand that Benignity, Inc. does not provide transportation to or from the lodging. All travel arrangements and associated costs are the sole responsibility of the applicant and their party.

Lodging: I understand that lodging is provided as-is through Benignity, Inc.'s partners and donors. Benignity, Inc. makes no guarantees regarding specific property features, locations, or availability.

Conduct: I agree that all members of my travel party will treat the provided lodging and property with respect. Any damage caused during our stay may result in disqualification from future programs.

Liability Release: I release Benignity, Inc., its officers, volunteers, and partners from any and all liability for injury, illness, loss, or damage that may occur during or related to the vacation stay.

Photography & Media: I consent to Benignity, Inc. using anonymized information about my stay for marketing, fundraising, and awareness purposes unless I notify them otherwise in writing.

Data Collection: I authorize Benignity, Inc. to collect, store, and use the personal information provided in this application solely for the purpose of administering the Compassionate Vacation Program.`;

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [applicantType, setApplicantType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target);
    try {
      await fetch("/", { method: "POST", body: data });
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
              Thank you for applying to the Compassionate Vacation Program. Your
              application has been submitted and will be entered into our next
              monthly drawing. We will be in touch if you are selected.
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
          <h1>Compassionate Vacation Program Entry Form</h1>
          <p className="ap-hero-sub">
            Benignity, Inc. provides free vacation lodging to individuals with
            life-limiting illnesses and their unpaid caregivers. Applications are
            entered into a monthly lottery drawing. <strong>All fields must be completed.</strong>
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
              <p>Fill out all required fields accurately and completely.</p>
            </div>
          </div>
          <div className="ap-step">
            <div className="ap-step-num">2</div>
            <div>
              <strong>Upload physician statement</strong>
              <p>A signed statement on official letterhead confirming the diagnosis is required.</p>
            </div>
          </div>
          <div className="ap-step">
            <div className="ap-step-num">3</div>
            <div>
              <strong>Monthly lottery drawing</strong>
              <p>Complete applications are entered into a monthly drawing. Selected applicants are contacted directly.</p>
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

          <div className="ap-card">

            {/* NAME */}
            <div className="ap-group">
              <label className="ap-label">Name <span>*</span></label>
              <div className="ap-grid-2">
                <div className="ap-field">
                  <input name="first-name" type="text" required placeholder="First Name" />
                </div>
                <div className="ap-field">
                  <input name="last-name" type="text" required placeholder="Last Name" />
                </div>
              </div>
            </div>

            {/* DOB */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="dob">Date of Birth <span>*</span></label>
              <input id="dob" name="date-of-birth" type="date" required className="ap-input" />
            </div>

            {/* PHONE */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="phone">Phone Number <span>*</span></label>
              <input id="phone" name="phone" type="tel" required placeholder="(000) 000-0000" className="ap-input" />
              <p className="ap-hint">Format: (000) 000-0000</p>
            </div>

            {/* EMAIL */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="email">Email <span>*</span></label>
              <input id="email" name="email" type="email" required placeholder="example@example.com" className="ap-input" />
            </div>

            {/* ADDRESS */}
            <div className="ap-group">
              <label className="ap-label">Address <span>*</span></label>
              <div className="ap-field-stack">
                <input name="street-address" type="text" required placeholder="Street Address" className="ap-input" />
                <input name="street-address-2" type="text" placeholder="Street Address Line 2" className="ap-input" />
                <div className="ap-grid-3">
                  <input name="city" type="text" required placeholder="City" className="ap-input" />
                  <input name="state" type="text" required placeholder="State" className="ap-input" />
                  <input name="zip" type="text" required placeholder="ZIP Code" className="ap-input" />
                </div>
              </div>
            </div>

            {/* APPLICANT TYPE */}
            <div className="ap-group">
              <label className="ap-label">Are you applying as <span>*</span></label>
              <div className="ap-radio-group">
                <label className="ap-radio">
                  <input
                    type="radio"
                    name="applicant-type"
                    value="Patient with a life-limiting illness"
                    required
                    onChange={() => setApplicantType("patient")}
                  />
                  <span>Patient with a life-limiting illness</span>
                </label>
                <label className="ap-radio">
                  <input
                    type="radio"
                    name="applicant-type"
                    value="Unpaid caregiver of a patient with a life-limiting illness"
                    onChange={() => setApplicantType("caregiver")}
                  />
                  <span>Unpaid caregiver of a patient with a life-limiting illness</span>
                </label>
              </div>
            </div>

            {/* CAREGIVER-SPECIFIC FIELDS */}
            {applicantType === "caregiver" && (
              <>
                <div className="ap-group">
                  <label className="ap-label" htmlFor="patient-name">Name of person receiving care <span>*</span></label>
                  <input id="patient-name" name="patient-name" type="text" required className="ap-input" placeholder="Patient's full name" />
                </div>
                <div className="ap-group">
                  <label className="ap-label" htmlFor="relationship">Relationship to patient <span>*</span></label>
                  <input id="relationship" name="relationship-to-patient" type="text" required className="ap-input" placeholder="e.g. Spouse, Parent, Sibling, Friend" />
                </div>
              </>
            )}

            {/* DIAGNOSIS */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="diagnosis">Diagnosis or condition <span>*</span></label>
              <input id="diagnosis" name="diagnosis" type="text" required className="ap-input" placeholder="e.g. Stage IV cancer, ALS, end-stage heart failure" />
            </div>

            {/* HEALTHCARE PROVIDER */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="provider">Healthcare provider name and contact <span>*</span></label>
              <input id="provider" name="healthcare-provider" type="text" required className="ap-input" placeholder="Dr. Name — Practice Name — Phone or Email" />
            </div>

            {/* NUMBER OF GUESTS */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="guests">Number of guests <span>*</span></label>
              <select id="guests" name="number-of-guests" required className="ap-input">
                <option value="">Please select</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>

            {/* ACCESSIBILITY NEEDS */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="accessibility">Accessibility needs</label>
              <input id="accessibility" name="accessibility-needs" type="text" className="ap-input" placeholder="e.g. Wheelchair accessible, ground floor, etc." />
            </div>

            {/* SPECIAL ACCOMMODATIONS */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="accommodations">Special accommodations</label>
              <input id="accommodations" name="special-accommodations" type="text" className="ap-input" placeholder="Any other accommodations we should know about" />
            </div>

            {/* WHY MEANINGFUL */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="meaningful">Why would this vacation be meaningful to you or your loved one? <span>*</span></label>
              <textarea
                id="meaningful"
                name="why-meaningful"
                required
                rows={6}
                className="ap-input ap-textarea"
                placeholder="Please share in your own words... (limit to 300 words)"
              />
              <p className="ap-hint">Limit to 300 words</p>
            </div>

            {/* PHYSICIAN STATEMENT UPLOAD */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="physician-statement">
                Upload signed physician statement on official letterhead <span>*</span>
              </label>
              <div className="ap-upload-box">
                <input
                  id="physician-statement"
                  name="physician-statement"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="ap-file-input"
                />
                <p className="ap-hint">Accepted formats: PDF, DOC, or image — max 10MB</p>
              </div>
            </div>

            {/* TERMS */}
            <div className="ap-group">
              <label className="ap-label">Terms and Conditions <span>*</span></label>
              <div className="ap-terms-box">
                <pre className="ap-terms-text">{TERMS}</pre>
              </div>
              <label className="ap-checkbox">
                <input type="checkbox" name="terms-accepted" required />
                <span>I have read and acknowledge these statements. I agree to the terms and conditions listed above.</span>
              </label>
            </div>

            {/* SIGNATURE */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="signature">Signature <span>*</span></label>
              <input
                id="signature"
                name="signature"
                type="text"
                required
                className="ap-input ap-signature-input"
                placeholder="Type your full legal name"
              />
              <p className="ap-hint">Typing your full name constitutes your electronic signature.</p>
            </div>

            {/* DATE */}
            <div className="ap-group">
              <label className="ap-label" htmlFor="sign-date">Date <span>*</span></label>
              <input id="sign-date" name="signature-date" type="date" required className="ap-input" />
            </div>

            {/* SUBMIT */}
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
