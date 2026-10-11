# Uttaran Special School Website (Berhampore)

> **"Empowering Every Child to Learn, Grow & Flourish"**  
> A clean, accessible, mobile-first static website for **Uttaran Special School For Differently Able**, located near Laldighi / Raninagar, Berhampore, Murshidabad.

---

## 🌟 Key Features & Layout Flow

1. **Top Notice & Advisory Banner**: Clear instructions for parents regarding assessment appointments and visit verification.
2. **Hero Section**: Welcoming banner, school name, core philosophy, and direct one-click *"Call Us"* (`tel:`) and *"Locate on Map"* actions.
3. **About & Mission**: Explains why milestone-based learning is chosen over rigid grade divisions (Class 1–10) to prioritize child dignity and emotional well-being.
4. **4 Developmental Milestone Wings**:
   - **Level 1**: Early Intervention & Sensory Stimulation (Ages 3–7)
   - **Level 2**: Functional Literacy & Alternative Communication (AAC) (Ages 7–12)
   - **Level 3**: Secondary / Pre-Vocational & Daily Living Skills (ADL) (Ages 12–16)
   - **Level 4**: Vocational & Life Skills Training (Handicrafts, Pottery, Computing) (Ages 16+)
5. **Alumni & Success Stories ("Our Pride")**:
   - Milestone cards showcasing former students (Suman D., Riya M., Anik B., Priyanshi S.)
   - Built-in video modal player (YouTube embed support) and photo gallery modal
   - Consent & child dignity safeguards
6. **Campus & Activity Gallery**: Categorized photo grid (Classroom spaces, Sensory therapy, Handicrafts, Festivals) with interactive preview.
7. **Contact & Location**:
   - Full address in Raninagar / Dhupghati (near Laldighi)
   - Direct clickable phone calls & email
   - Interactive embedded Google Maps iframe
   - Static-ready inquiry form with instant feedback (ready for Web3Forms or Formspree)
8. **Accessible & Calming Design**:
   - Soft pastel palette (calm sage greens, gentle slates, warm ambers)
   - Mobile-first responsiveness and high-contrast typography

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Architecture**: **100% Static** (Zero backend servers, zero database costs, fast mobile loading)

---

## 📁 Project Structure & Content Management

All site data is modularly decoupled into readable TypeScript/JSON data files so updates can be made without touching the layout code:

```
uttaran-special-school/
├── public/
│   └── favicon.svg           # Custom school brand favicon
├── src/
│   ├── components/
│   │   ├── About.tsx         # Philosophy & developmental approach
│   │   ├── AlumniSection.tsx # Success stories & modal triggers
│   │   ├── ContactSection.tsx# Inquiry form, contact details & Google Map
│   │   ├── Footer.tsx        # School summary, dignity statement & links
│   │   ├── GallerySection.tsx# Photo grid with category filters
│   │   ├── Hero.tsx          # Main banner, stats & CTAs
│   │   ├── Modals.tsx        # Video & Photo lightboxes
│   │   ├── Navbar.tsx        # Responsive header with mobile menu
│   │   ├── NoticeBanner.tsx  # Top alert banner
│   │   └── Programs.tsx      # 4 Developmental milestone wings
│   ├── data/
│   │   ├── alumni.ts         # Alumni stories, milestones, video & photo links
│   │   ├── gallery.ts        # Campus photo items and categories
│   │   ├── programs.ts       # Curriculum, goals, and methodologies
│   │   └── schoolInfo.ts     # Phone numbers, address, map link & hours
│   ├── App.tsx               # Main page layout
│   ├── index.css             # Tailwind CSS base and theme rules
│   └── main.tsx              # React mounting root
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🚀 Running Locally

```bash
# 1. Open the project directory
cd uttaran-special-school

# 2. Start the local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 📦 Building for Production

```bash
npm run build
```

This generates optimized static files inside the `dist/` directory.

---

## 🌐 Free Zero-Cost Deployment (Annual Cost = ₹0)

You can host this website completely free of cost on any of these platforms:

### Option A: Vercel (Recommended)
1. Push the code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel auto-detects Vite and provides a free HTTPS domain.
4. (Optional) Connect your custom `.org` or `.org.in` domain in Project Settings.

### Option B: Netlify
1. Sign in to [Netlify](https://netlify.com).
2. Drag and drop the `dist/` folder, or connect to your GitHub repo.
3. Your site goes live instantly with free SSL.

### Option C: GitHub Pages
1. In `vite.config.ts`, set `base: '/<repo-name>/'`.
2. Push to GitHub and enable GitHub Pages in repository settings under **Actions / Pages**.

---

## 📩 Setting Up Free Contact Form Emails

The contact form is pre-configured to work with **Web3Forms** or **Formspree** (both have free tiers):
1. Sign up at [Web3Forms](https://web3forms.com) with the school's Gmail address to get an Access Key.
2. Replace the submission handler in `src/components/ContactSection.tsx` with a simple `fetch('https://api.web3forms.com/submit', ...)` post call.
3. Inquiries will immediately arrive in the school's inbox without needing a backend server!
