# EEE Viva Board ⚡

A comprehensive, interactive web platform designed for B.Sc. Electrical and Electronic Engineering (EEE) students to prepare for viva exams and quizzes. The platform features a premium dark glassmorphism UI, interactive SVG pin diagrams, and over 760 questions covering fundamental and advanced EEE topics.

## 🚀 Features

- **Interactive Quiz Engine**: Beautiful 2x2 grid interface with animated progress tracking and detailed explanations for answers.
- **Viva Q&A Cards**: Expandable Q&A sections with smooth animations, search functionality, and topic-based filtering.
- **Component Pin Diagrams**: Interactive, programmatic SVG diagrams for essential electronic components (Op-Amp, 555 Timer, BJT, MOSFET, FET).
- **Comprehensive Topics**: Covers Basic EEE, Filters (Active/Passive), and 15 distinct B.Sc. EEE subjects including Power Systems, Machines, Control Systems, VLSI, and more.
- **Dynamic Particles Background**: Subtle floating particles that enhance the dark mode aesthetic.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.

## 📂 Project Structure

```text
├── public/
│   ├── data/
│   │   ├── intro-questions.js     # 30 MCQ - Electronic Components
│   │   ├── basic-viva.js          # 300 Q&A - Basic EEE
│   │   ├── basic-quiz.js          # 100 MCQ - Basic EEE
│   │   ├── filter-viva.js         # 50 Q&A - Filters
│   │   ├── filter-quiz.js         # 20 MCQ - Filters
│   │   ├── subjects-viva.js       # 200 Q&A - 15 EEE Subjects
│   │   └── subjects-quiz.js       # 60 MCQ - EEE Subjects
│   ├── diagrams.js                # SVG logic for component diagrams
│   ├── index.html                 # Main SPA shell and structure
│   ├── script.js                  # Core application logic (Tabs, Quiz, Viva)
│   └── style.css                  # Custom design system and animations
├── package.json                   # Node dependencies
├── render.yaml                    # Deployment configuration for Render
└── server.js                      # Express server for serving static files
```

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (No heavy frameworks, ensuring fast load times).
- **Styling**: Custom CSS with CSS Variables, Flexbox, CSS Grid, and Keyframe Animations.
- **Backend**: Node.js with Express (to serve the static assets).
- **Hosting Config**: Pre-configured `render.yaml` for instant deployment on Render.

## 🏃 Getting Started (Local Development)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

3. **View the app**:
   Open `http://localhost:3000` in your web browser.

## 🚢 Deployment

This repository is ready to be deployed on [Render](https://render.com/). 
1. Push this code to a GitHub repository.
2. Connect the repository to your Render account.
3. Render will automatically detect the `render.yaml` configuration and deploy the Node web service.

## 📝 License
This project is created for educational purposes.
