# UnboundByte Public Website

![UnboundByte Banner](https://unboundbytesolution.com/public/assets/img/logo1.png)

> **Enterprise-grade engineering education platform.**  
> A modern, high-performance public website built with Next.js 14, Tailwind CSS, and TypeScript, featuring a premium "Dark Glass" aesthetic.

## 🚀 Features

### core Experience
- **Premium UI/UX**: Custom "Dark Glass" design system with glassmorphism, smooth gradients, and micro-interactions.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop devices.
- **Global Search**: Instant client-side search indexing all pages and courses (`CMD+K` style).
- **SEO Optimized**: Semantic HTML and metadata structure.

### 📚 Course Catalog
- **Dynamic Listing**: Browse 20+ specialized engineering courses.
- **Smart Filtering**: Filter by category (Frontend, System Design, DevOps, etc.).
- **Sorting & Pagination**: Sort by Price, Rating, or Popularity with infinite scroll loading.
- **Rich Detail Pages**: Deep dive into curriculum, schedule, and learning outcomes.

### 💼 Business & Career
- **Services Showcase**: Detailed breakdown of Corporate Training and Consulting.
- **Portfolio**: Masonry-style gallery of completed projects with tech stack filters.
- **Career Portal**: Job listing board with detailed job descriptions and application forms.

### 🛠️ Utilities
- **Lead Generation**: Secure Contact forms with validation and spam protection (honeypot).
- **Authentication**: Role-based login simulation (Student/Instructor/Admin).
- **Resilience**: Custom 404, 500, and component-level error handling states.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: SVG / Raw
- **State Management**: React Hooks (`useState`, `useEffect`, `useReducer`)

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KetanGupta0/unbound_public.git
   cd unbound_public
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📂 Project Structure

```bash
src/
├── app/                 # Next.js App Router Pages
│   ├── about/           # About Us
│   ├── auth/            # Login, Register, Reset Password
│   ├── careers/         # Job Listings
│   ├── contact/         # Contact Form
│   ├── courses/         # Course Catalog & Details
│   ├── jobs/            # Job Details
│   ├── portfolio/       # Projects Gallery
│   ├── services/        # Services Page
│   ├── error.tsx        # Global Error Boundary
│   ├── not-found.tsx    # Custom 404
│   └── page.tsx         # Home Landing Page
├── components/          # Reusable UI Components
│   ├── ui/              # Buttons, Cards, Inputs
│   ├── Navbar.tsx       # Global Navigation & Search
│   ├── Footer.tsx       # Global Footer
│   └── SearchModal.tsx  # Search Logic
├── data/                # Static Data Stores
│   ├── courses.ts       # Course catalog data
│   ├── jobs.ts          # Job listings data
│   └── projects.ts      # Portfolio items
└── styles/              # Global CSS & Tailwind config
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.