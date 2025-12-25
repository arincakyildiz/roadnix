# Roadnix - Traffic Safety Education Platform

A bilingual (Turkish/English) web platform that helps learners master traffic safety through interactive content, quizzes, and visual tools.

**🌐 Live Demo:** [https://roadnix.arincakyildiz.com.tr](https://roadnix.arincakyildiz.com.tr)

## 📋 Table of Contents

- [Goal & Objectives](#goal--objectives)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Build & Deployment](#build--deployment)
- [Current Status](#current-status)

## 🎯 Goal & Objectives

**Goal:** Deliver a bilingual (Turkish/English) web platform that helps learners master traffic safety through interactive content, quizzes, and visual tools.

**Objectives:**
- Teach core traffic safety concepts: vehicles, human factors, road environment, and signs
- Provide practice via adaptive quizzes (difficulty-based) and an attention/reaction test
- Ensure full localization (TR/EN) and mobile-responsive UX
- Package for easy deployment on Coolify via Docker; host code on GitHub

## ✨ Key Features

### 🚦 Traffic Signs Library
- Categorized signs with images, captions, and explanations
- Categories include: Additional, Information, Mandatory, Priority, Prohibitory, Road Markings, Signals, and Warning signs

### 🎯 Adaptive Quizzes
Three quiz types with difficulty levels (Easy/Medium/Hard) and customizable question counts (10/20/30):

1. **Signs Quiz**
   - Visual recognition by difficulty grouping
   - 140+ questions available

2. **Traffic Knowledge Quiz**
   - Scenario-based theory questions
   - 90 questions (30 per difficulty level)

3. **Car Parts Quiz**
   - Interactive hotspots on car images
   - 90 questions (30 per difficulty level)
   - Visual identification of car components

### 🧠 Attention Test (Alcohol Awareness)
- Click-the-shape reaction game
- Correctness-based scoring system
- Impairment level indicators
- Tests reaction time and accuracy

### 🌐 Full Localization
- Complete bilingual support (Turkish/English)
- All UI elements, questions, answers, and explanations switchable via TR/EN toggle
- Language selection with flag indicators

### 📱 Responsive Design
- Mobile-friendly layouts and typography
- Large quiz and attention test layouts
- Enhanced car visuals with interactive hotspots
- Optimized grids for all screen sizes

## 📁 Project Structure

```
roadnix/
├── public/
│   ├── flags/              (Language flags: eng.png, tr.png)
│   ├── signs/              (Traffic sign images by category)
│   │   ├── additional/    (Additional signs - 4 images)
│   │   ├── information/    (Information signs - 17 images)
│   │   ├── mandatory/     (Mandatory signs - 13 images)
│   │   ├── priority/      (Priority signs - 9 images)
│   │   ├── prohibitory/   (Prohibitory signs - 34 images)
│   │   ├── road-markings/ (Road markings - 12 images)
│   │   ├── signals/       (Authorized person signals - 7 images)
│   │   └── warning/       (Warning signs - 48 images)
│   ├── roadnix-logo.png
│   └── vite.svg
├── src/
│   ├── components/         (React components)
│   ├── data/
│   │   ├── quizzes.js      (Quiz questions: 90 Knowledge, 140+ Signs, 90 Car Parts)
│   │   ├── signAssets.json (Sign asset data)
│   │   └── signs.js        (Sign data and metadata)
│   ├── App.jsx             (Main application component)
│   ├── main.jsx            (Application entry point)
│   └── index.css           (Global styles with responsive layouts, gradients, animations)
├── scripts/
│   └── generate-sign-assets.js  (Sign asset generator utility)
├── deploy/
│   └── nginx.conf          (Nginx configuration for SPA routing)
├── dist/                   (Build output)
├── Dockerfile              (Docker configuration for Coolify)
├── .dockerignore           (Optimized Docker ignore rules)
├── index.html              (Main HTML file)
├── vite.config.js          (Vite configuration)
├── package.json            (Project dependencies)
└── README.md               (This file)
```

## 🛠️ Technology Stack

- **React 18.3.1** - UI library with hooks for state management
- **Vite 7.2.4** - Build tool and dev server
- **Custom CSS** - Responsive layouts, gradients, animations
- **JSON-driven assets** - Signs data and quizzes stored in JSON/JS files
- **Docker** - Containerization for deployment
- **Nginx** - Web server with SPA routing support (try_files)
- **GitHub** - Version control and code hosting

## 🔧 Requirements

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager
- **Docker** (for containerized deployment)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd roadnix
```

2. Install dependencies:
```bash
npm install
```

or

```bash
yarn install
```

## 🚀 Running the Project

### Development Mode

To start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will typically run at `http://localhost:5173`. Open this address in your browser to view the application.

### Production Preview

To preview the built application:

```bash
npm run build
npm run preview
```

## 🏗️ Build & Deployment

### Production Build

Create a production build:

```bash
npm run build
```

The build output will be created in the `dist/` folder.

### Docker Deployment (Coolify)

The project is configured for easy deployment on Coolify:

1. **Dockerfile** is prepared with optimized build steps
2. **Nginx configuration** (`deploy/nginx.conf`) handles SPA routing via `try_files`
3. **.dockerignore** is optimized to exclude unnecessary files

To build and run with Docker:

```bash
docker build -t roadnix .
docker run -p 80:80 roadnix
```

For Coolify deployment:
- Connect your GitHub repository
- Coolify will automatically detect the Dockerfile
- The Nginx configuration ensures proper SPA routing

### Deployment Notes

- Public assets are included in the build
- SPA routing is handled via Nginx `try_files` directive
- All static assets are optimized during build

## 📊 Current Status

✅ **All features implemented and localized**
- Complete bilingual support (Turkish/English)
- All UI elements, questions, answers, and explanations are localized

✅ **Quizzes fully populated**
- **Traffic Knowledge Quiz:** 90 questions (30 Easy, 30 Medium, 30 Hard)
- **Signs Quiz:** 140+ questions with difficulty-based grouping
- **Car Parts Quiz:** 90 questions (30 Easy, 30 Medium, 30 Hard)

✅ **Attention test logic updated**
- Accurate hit detection and scoring
- Correctness-based scoring system
- Impairment level indicators

✅ **Navigation and UI**
- Header includes all quiz types
- Quiz hub provides quick access to all features
- Interactive modules for signs library, attention test, quizzes, and car parts guide

✅ **Deployment ready**
- Dockerfile and Nginx config prepared for Coolify
- Code synced to GitHub main branch
- Live at: [https://roadnix.arincakyildiz.com.tr](https://roadnix.arincakyildiz.com.tr)

## 📝 Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the built application

## 🌐 Browser Support

Latest versions of modern browsers are supported:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This is a private project.

## 👥 Contributing

Contributions are welcome! Please test your changes before submitting a pull request.

---

**Note:** This project is developed for educational purposes. For official information about traffic rules and signs, please refer to the relevant traffic authorities.
