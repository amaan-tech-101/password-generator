# Password Generator Pro 🔐

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://password--generator.vercel.app/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

> A modern, secure, and beautiful password generator built with React. Generate strong passwords, memorable passphrases, and secure PINs—all 100% client-side.

## ✨ Features

- 🔒 **Three Generation Modes** - Random passwords, memorable passphrases, and numeric PINs
- 🎨 **Neumorphic Design** - Beautiful, modern UI with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices (320px to 4K)
- ⚡ **Instant Generation** - Cryptographically secure, generated in your browser
- 🔐 **100% Client-Side** - Your passwords never leave your device
- 📊 **Strength Meter** - Real-time password strength analysis
- 📜 **Password History** - Quick access to recently generated passwords
- 🌐 **SEO Optimized** - Meta tags, structured data, and sitemap included

## 🚀 Live Demo

<a href="https://password--generator.vercel.app/" target="_blank"><strong>Try it now →</strong></a>

## 🛠️ Tech Stack

| Technology     | Purpose                     |
| -------------- | --------------------------- |
| React 19       | UI Framework                |
| Vite 7         | Build Tool                  |
| Lucide React   | Icons                       |
| CSS3           | Styling (Neumorphic design) |
| Web Crypto API | Secure random generation    |

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── index.js         # Barrel export
│   ├── PasswordDisplay.jsx
│   ├── Options.jsx
│   ├── ModeTabs.jsx
│   └── ...
├── constants/           # Centralized configuration
│   ├── modes.js         # Generation mode definitions
│   └── passwordOptions.js
├── hooks/               # Custom React hooks
│   └── usePasswordGenerator.js
├── utils/               # Pure utility functions
│   ├── generatePassword.js
│   ├── generateMemorable.js
│   └── checkStrength.js
└── App.jsx              # Root component
```

## 🏃 Run Locally

```bash
# Clone the repository
git clone https://github.com/amaan-tech-101/password-generator.git

# Navigate to the project
cd password-generator

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📄 License

MIT © <a href="https://x.com/dev_amaan" target="_blank">Mohammad Amaan</a>

---

<p align="center">
  Built with ❤️ using React & CSS
</p>
