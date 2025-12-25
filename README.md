# JS4All - Your Complete JavaScript Learning Hub

<div align="center">
  <img src="./public/js4all.jpg" alt="JS4All Logo" width="500" />
  
  <h3>Master JavaScript with curated resources, interactive quizzes, and comprehensive roadmaps</h3>
  
  <p>
    <a href="https://js4all.site">🌐 Live Website</a> •
    <a href="https://github.com/pratik20gb/quiz-bright-mind-main">📖 Documentation</a> •
    <a href="https://x.com/sage_pratik">🐦 Twitter</a>
  </p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Website](https://img.shields.io/badge/Website-js4all.site-blue)](https://js4all.site)
</div>

## 🚀 Overview

JS4All is a comprehensive JavaScript learning platform designed to help developers master JavaScript from fundamentals to advanced topics. The platform combines curated resources, interactive quizzes, and structured learning roadmaps to provide an all-in-one learning experience.

**🌐 Live at:** [https://js4all.site](https://js4all.site)

## ⚡ Quick Start

1. **Visit the live site:** [js4all.site](https://js4all.site)
2. **Explore resources:** Browse curated documentation, books, and courses
3. **Take a quiz:** Test your knowledge with interactive quizzes
4. **Follow the roadmap:** Learn step-by-step from basics to advanced

Or clone and run locally:
```bash
git clone https://github.com/pratik20gb/quiz-bright-mind-main.git
cd quiz-bright-mind-main
npm install
npm run dev
```

## ✨ Features

### 📚 **Curated Resources**
- **Best-in-class documentation** - Direct links to MDN Web Docs and other authoritative sources
- **Recommended books** - Carefully selected JavaScript books for all skill levels
- **Video courses** - Top-rated courses from leading platforms
- **Tools & utilities** - Essential development tools and libraries
- **Bento grid layout** - Beautiful, modern presentation of resources

### 🧩 **Interactive Quizzes**
- **Multiple difficulty levels** - Easy, Medium, and Hard questions
- **Flexible question sets** - Choose from 10, 20, or 30 questions
- **Detailed explanations** - Comprehensive explanations for every answer
- **Real-time feedback** - Instant results and performance tracking

### 🗺️ **Learning Roadmap**
- **Structured learning path** - Step-by-step guide from basics to advanced
- **Career paths** - Specialized tracks for different JavaScript careers
- **Library recommendations** - Popular libraries and frameworks
- **Prerequisites & next steps** - Clear learning dependencies

### 🎨 **Modern UI/UX**
- **Responsive design** - Works seamlessly on all devices
- **Smooth animations** - Powered by Framer Motion
- **Dark mode support** - Easy on the eyes
- **Loading screen** - Professional loading experience

## 🛠️ Technologies

This project is built with modern web technologies:

- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[React 18](https://react.dev/)** - Modern UI library with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library

## 📦 Installation

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Setup

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd quiz-bright-mind-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
quiz-bright-mind-main/
├── public/
│   ├── js4all.jpg          # Project logo
│   ├── sagelogo.png        # Favicon
│   └── robots.txt          # SEO configuration
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   ├── LoadingScreen.tsx  # Loading animation
│   │   └── ...
│   ├── data/              # Static data
│   │   ├── quizQuestions.ts
│   │   ├── resources.ts
│   │   └── roadmap.ts
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── Quiz.tsx       # Quiz page
│   │   ├── Roadmap.tsx    # Roadmap page
│   │   └── NotFound.tsx   # 404 page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite configuration
└── tailwind.config.ts     # Tailwind CSS config
```

## 🚢 Deployment

The project is deployed and live at **[js4all.site](https://js4all.site)** using Vercel with a custom domain.

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

**Custom Domain Setup:**
- Domain: `js4all.site`
- Configured via Vercel dashboard
- Automatic HTTPS enabled
- See `DOMAIN_SETUP.md` for detailed setup instructions

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### GitHub Pages
```bash
npm run build
# Deploy the `dist` folder to gh-pages branch
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pratik Raj** (sage)

- 🌐 Website: [js4all.site](https://js4all.site)
- X (Twitter): [@sage_pratik](https://x.com/sage_pratik)
- GitHub: [@pratik20gb](https://github.com/pratik20gb/)

## 🙏 Acknowledgments

- [MDN Web Docs](https://developer.mozilla.org/) - For comprehensive JavaScript documentation
- [shadcn](https://ui.shadcn.com/) - For the beautiful component library
- All the contributors and maintainers of the open-source libraries used in this project

---

---

<div align="center">
  <p>
    <strong>Made with ❤️ by <a href="https://github.com/pratik20gb">Pratik Raj</a></strong>
  </p>
  <p>
    <a href="https://js4all.site">Visit JS4All</a> •
    <a href="https://x.com/sage_pratik">Follow on X</a> •
    <a href="https://github.com/pratik20gb/quiz-bright-mind-main">Star on GitHub</a>
  </p>
</div>
