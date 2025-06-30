# 🎓 Parul University — React Web App

A fully responsive, single-page university web application built with React, Tailwind CSS, and Material UI. It showcases the institution’s vision, programs, leadership, facilities, and contact details — all within a dynamic, modern UI.

---

## 🚀 Features

- Smooth client-side routing with `react-router-dom`
- Animated page sections with AOS
- Fully responsive design using Tailwind CSS & Material UI
- Multi-step login/signup form with field validation logic
- Dropdowns for Courses & Admissions with contextual info display
- Scrollable Contact section + SweetAlert2 feedback handling

---

## 📦 Tech Stack

| Tech             | Purpose                                  |
|------------------|------------------------------------------|
| React            | Component-based architecture             |
| React Router DOM | SPA navigation (without page reloads)    |
| Tailwind CSS     | Utility-first responsive styling         |
| Material UI      | UI components (AppBar, Popper, Grid...)  |
| AOS              | Scroll-triggered animations              |
| SweetAlert2      | Clean alert dialogs on form submission   |

---

## 📁 Folder Structure

parul-university/
│
├── public/
│   └── index.html               # HTML root
│
├── src/
│   ├── App.jsx                  # App entry point with routes and layout
│   ├── index.js                 # React DOM renderer
│   ├── App.css                  # Global styles (if needed)
│
│   ├── Component/               # Shared, reusable components
│   │   ├── Navbar.jsx           # Main navigation with dropdowns
│   │   └── Footer.jsx           # Contact form and links
│
│   ├── pages/                   # Route-rendered page components
│   │   ├── Home.jsx             # Landing page with hero, stats, FAQs
│   │   ├── AboutUs.jsx          # About section with leadership and facilities
│   │   └── LoginSignup.jsx      # Multi-step login/registration form
│
│   └── assets/ (optional)       # Static assets like logos, images
│
├── package.json                # NPM package config
├── tailwind.config.js          # Tailwind CSS config
└── README.md                   # Project documentation





---

## 🧭 Routes

| Route       | Component        | Description                               |
|-------------|------------------|-------------------------------------------|
| `/`         | `Home.jsx`       | Welcome section with slider & FAQs        |
| `/about`    | `AboutUs.jsx`    | University info, leadership, facilities   |
| `/login`    | `LoginSignup.jsx`| User login and registration form          |
| `/contact`  | `Footer.jsx`     | Scrollable contact section fallback       |

---

## 📞 Contact Us Integration

- Inline form handled inside `Footer.jsx`
- Custom success alert using SweetAlert2
- Integrated scroll behavior on "Contact Us" click


##Live link : https://institute-clone.vercel.app/


