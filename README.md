# Dhaal Security Services Website

A professional, tactical, and modern multi-page React application for Dhaal Security Services.

## Features

- **Multi-page Architecture**: Home, Services, Gallery, and Contact pages.
- **Tactical Design**: High-contrast, professional aesthetic with modern animations.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Automated Deployment**: Includes GitHub Actions workflow for GitHub Pages.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Lucide React** (Icons)
- **Framer Motion** (Animations)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Important**: Make sure to commit the `package-lock.json` file to your repository:
   ```bash
   git add package-lock.json
   git commit -m "chore: add package-lock.json"
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

### Deployment to GitHub

To deploy this project to GitHub and get it running on GitHub Pages:

1. **Create a new repository** on GitHub.
2. **Initialize Git** locally and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The automated workflow in `.github/workflows/deploy.yml` will now build and deploy your site every time you push to the `main` branch.

## License

© 2024 Dhaal Security Services. All rights reserved.
