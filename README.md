# Benignity, Inc. — Website

Official website for **Benignity, Inc.**, a 501(c)(3) nonprofit organization providing free vacation lodging for patients with life-limiting illness and unpaid caregivers — creating opportunities for rest, dignity, and meaningful family memories.

## Tech Stack

- **React 19** + **Vite**
- **React Router v7** — client-side routing
- **CSS Custom Properties** — design token system (no CSS framework)
- **Google Fonts** — Playfair Display (headings) + Inter (body)
- **Eventbrite Widget** — embedded checkout on the event page

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, mission, program, impact, get involved, events, contact |
| `/donate` | Donation page — amount selector, impact tiers, donor form |
| `/events/gala` | Event page — 1st Annual First Responders Dating Auction & Gala |

## Project Structure

```
src/
├── assets/
│   └── benignity-logo.png
├── pages/
│   ├── DonatePage.jsx      # Donation flow
│   ├── DonatePage.css
│   ├── EventPage.jsx       # Gala event page w/ Eventbrite embed
│   └── EventPage.css
├── App.jsx                 # Router + HomePage component
├── index.css               # Global design system & styles
└── main.jsx                # React entry point w/ BrowserRouter
```

## Design System

The site uses a consistent set of CSS custom properties defined in `index.css`:

| Token | Value | Usage |
|---|---|---|
| `--cream` | `#f7f1e8` | Page background |
| `--teal` | `#1d5b61` | Primary brand color |
| `--teal-dark` | `#123b41` | Impact section, cards |
| `--gold` | `#b17834` | Eyebrow labels, accents |
| `--text` | `#172c33` | Body text |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features

- **Donation page** with preset amounts ($25–$500), one-time/monthly toggle, dynamic impact messaging, and donor information form
- **Event page** for the 1st Annual First Responders Dating Auction & Gala with Eventbrite embedded checkout modal — users purchase tickets without leaving the site
- **Sticky nav** with frosted-glass effect and animated mobile hamburger menu
- **Mobile-first** responsive design with breakpoints at 900px and 600px
- All external links include `rel="noopener noreferrer"`

## Contact

**Benignity, Inc.**
- Email: compassionateprogram@benignity.org
- Phone: 1-855-717-KIND
- Website: [benignity.org](https://benignity.org)
