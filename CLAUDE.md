# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Kindwijs Kindercoaching** website - a Dutch child coaching service website built with Nuxt.js 2. The site provides information about child coaching services and JaMara mathematics methodology for children aged 5-16.

## Architecture & Technology Stack

- **Framework**: Nuxt.js 2.15.8 (Vue.js-based)
- **Target**: Static site generation (`target: 'static'`)
- **UI Framework**: Bootstrap 4.6.0 + Bootstrap-Vue 2.21.2
- **Language**: Dutch (nl)
- **Testing**: Jest with Vue Test Utils
- **Linting**: ESLint with Nuxt/Vue configurations
- **Analytics**: Google Analytics integration

## Key Development Commands

### Development & Build
```bash
# Start development server (with Node.js legacy OpenSSL provider)
yarn dev

# Build for production
yarn build

# Start production server
yarn start-build

# Generate static files
yarn generate
```

### Quality Assurance
```bash
# Run linting
yarn lint

# Run tests
yarn test

# Run tests with coverage (already configured)
yarn test
```

## Project Structure

### Pages (`pages/`)
- `index.vue` - Homepage with service overview
- `contact.vue` - Contact information
- `onderwijs.vue` - Education/teaching services
- `over-mij.vue` - About page
- `tarieven.vue` - Pricing information
- `wanneer.vue` - When to seek coaching
- `werkwijze.vue` - Working methodology

### Components (`components/`)
- `Container.vue` - Main layout wrapper
- `Header.vue` - Site header with jumbotron
- `Footer.vue` - Site footer
- `NavBar.vue` - Navigation component
- `Logo.vue` - Logo component
- `ImageLink.vue` - Reusable image-based navigation links

### Assets (`assets/`)
- Custom fonts (Kirsten font family)
- CSS files (styles.css, timeline.css)
- Images (WebP format preferred for optimization)

## Development Notes

### Node.js Configuration
- Uses `NODE_OPTIONS=--openssl-legacy-provider` in dev script for compatibility
- Required for older Nuxt.js version with newer Node.js versions

### Testing Setup
- Jest configured with Vue Test Utils
- Coverage collection enabled for components and pages
- Snapshots tests available in `test/__snapshots__/`
- All major components have corresponding test files

### Styling Approach
- Bootstrap 4 + Bootstrap-Vue for UI components
- Custom CSS for branding (Kirsten font, custom colors)
- Scoped styles in Vue components
- Timeline-specific styles in separate CSS file

### Image Optimization
- WebP images used throughout for performance
- Fallback images available (JPG/PNG)
- Images stored in `assets/` directory

### Google Analytics
- Configured with ID: UA-76519903-5
- Integrated via @nuxtjs/google-analytics module