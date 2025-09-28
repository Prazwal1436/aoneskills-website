# Digital Extra - Next.js Version

This is a Next.js conversion of the original HTML/CSS/JS digital agency website.

## Features

- **Responsive Design**: Built with Bootstrap 4 for mobile-first responsive design
- **Modern React**: Converted to Next.js with React components
- **Optimized Images**: Using Next.js Image component for better performance
- **Smooth Scrolling**: Custom smooth scroll implementation
- **Font Awesome Icons**: Social media and UI icons
- **Google Fonts**: Merriweather and Crimson Text fonts

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd digitalextra-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
digitalextra-nextjs/
├── pages/
│   ├── _app.js          # App component with global styles
│   └── index.js         # Main homepage
├── styles/
│   └── globals.css      # Global CSS styles
├── public/
│   └── img/             # Image assets
├── components/          # Reusable React components (future use)
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
└── README.md           # This file
```

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint for code quality

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Bootstrap 4** - CSS framework
- **Font Awesome 4.7** - Icons
- **Google Fonts** - Typography

## Sections

1. **Navigation Bar** - Sticky navigation with smooth scroll links
2. **Banner** - Hero section with call-to-action
3. **Services** - Three main service offerings
4. **About Us** - Company information and values
5. **Testimonials** - Client feedback
6. **Social Media** - Social media links
7. **Footer** - Contact information and newsletter signup

## Customization

The website can be easily customized by:

- Modifying the content in `pages/index.js`
- Updating styles in `styles/globals.css`
- Adding new images to `public/img/`
- Creating new components in the `components/` directory

## Deployment

The app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Heroku**

For production deployment:

```bash
npm run build
npm run start
```
