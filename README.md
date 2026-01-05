# Resume Website - Varun G

A modern, visually stunning resume website built with React and Vite, featuring glassmorphism design and smooth animations. Showcases GenAI development experience and projects.

🔗 **Live Site:** [https://varun-g-12.github.io/ResumeWebsite/](https://varun-g-12.github.io/ResumeWebsite/)

## ✨ Features

- **Modern Glassmorphism Design** - Semi-transparent cards with backdrop blur effects
- **Gradient Accents** - Purple-blue gradient theme throughout
- **Smooth Animations** - Hover effects and transitions with cubic-bezier easing
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Emphasized Sections** - Projects and Experience sections stand out prominently
- **Interactive Elements** - Hover states on cards, buttons, and tags
- **Automatic Deployment** - GitHub Actions workflow for seamless updates

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite 5** - Lightning-fast build tool
- **CSS3** - Pure CSS with glassmorphism and gradients
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automated deployment

## 📁 Project Structure

```
ResumeWebsite/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with avatar and links
│   │   ├── About.jsx           # Summary section
│   │   ├── Experience.jsx      # Work experience (emphasized)
│   │   ├── Projects.jsx        # Projects showcase (emphasized)
│   │   ├── Skills.jsx          # Technical skills
│   │   ├── Education.jsx       # Educational background
│   │   ├── Awards.jsx          # Awards and recognition
│   │   └── Languages.jsx       # Language proficiency
│   ├── data/
│   │   └── resume.js           # Central data file for all content
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # All styling with glassmorphism
│   └── index.css               # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
└── vite.config.js              # Vite configuration
```

## 🎨 Design Features

### Glassmorphism Cards
- Semi-transparent backgrounds with `backdrop-filter: blur()`
- Subtle borders and shadows
- Hover effects with elevation and glow

### Emphasized Sections
- **Projects & Experience**: Larger cards, prominent hover effects
- **Supporting Sections**: Skills, Education, Awards, Languages with cohesive styling

### Responsive Breakpoints
- **Desktop**: 1200px max-width container
- **Tablet**: 768px-1024px optimized layouts
- **Mobile**: <768px single-column layouts

### Color Scheme
- **Primary Gradient**: Purple (#667eea) to Pink (#764ba2)
- **Background**: Dark gradient (navy to black tones)
- **Text**: White with varying opacity levels
- **Accents**: Blue and purple badges

## 🚀 Development

### Prerequisites
- Node.js 16+ and npm

### Setup
```bash
# Clone the repository
git clone https://github.com/varun-g-12/ResumeWebsite.git
cd ResumeWebsite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Update Content
All content is centralized in `src/data/resume.js`. Edit this file to update:
- Personal information (name, email, phone, LinkedIn)
- Summary
- Work experience
- Projects
- Skills
- Education
- Awards
- Languages

## 📦 Build Output

Optimized production build:
- **CSS**: ~14 KB (2.76 KB gzipped)
- **JS**: ~155 KB (50 KB gzipped)
- **Total**: Lightweight and fast-loading

## 🔄 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

Deployment workflow:
1. Push changes to `main` branch
2. GitHub Actions builds the site
3. Deploys to `gh-pages` branch
4. Live at: https://varun-g-12.github.io/ResumeWebsite/

## 📝 License

This is a personal portfolio project.

## 👤 Author

**Varun G** - GenAI Developer specializing in enterprise AI solutions

- LinkedIn: [varun-g-1b6757343](https://www.linkedin.com/in/varun-g-1b6757343)
- Medium: [@varungangu1](https://medium.com/@varungangu1)
- Email: varungangu1@gmail.com
