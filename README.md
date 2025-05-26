# My Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This project automatically fetches and displays your GitHub repositories as portfolio projects.

## Features

- **Dynamic Project Showcase**: Automatically fetches and displays your GitHub repositories
- **Modern UI**: Built with Tailwind CSS for a sleek, responsive design
- **Real-time Updates**: Projects are automatically updated when you add new repositories to GitHub
- **Contact Section**: Easy access to your professional profiles

## Project Structure

```
/portfolio-site
├── public/
│   └── favicon.ico
├── pages/
│   ├── index.tsx      // Main page
│   └── api/
│       └── projects.ts // GitHub API integration
├── styles/
│   └── globals.css    // Global styles and Tailwind imports
├── components/
│   └── ProjectCard.tsx // Project card component
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Xuebawugui/MyPortfolios.git
cd MyPortfolios
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically:
   - Install dependencies
   - Build the project
   - Deploy your portfolio

## Customization

- Update your GitHub username in `pages/api/projects.ts`
- Modify the styling in `styles/globals.css`
- Customize the layout in `pages/index.tsx`

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub API

## License

MIT License 
