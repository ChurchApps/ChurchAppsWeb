# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm start` - Start development server on port 3400
- `npm run build` - Build production bundle  
- `npm test` - Run tests with react-scripts
- `npm run lint:only` - Run ESLint on TypeScript/JavaScript files
- `npm run lint:fix` - Run ESLint with automatic fixes

## Environment Setup

1. Copy `dotenv.sample.txt` to `.env` and configure API endpoints
2. Install dependencies: `npm install`
3. Start development: `npm start`

## Architecture Overview

This is a React TypeScript brochure site for ChurchApps that serves multiple branded homepages based on hostname detection.

### Multi-Brand Routing
The app uses hostname-based routing in `src/Routing.tsx:19-26` to serve different branded homepages:
- `chums.org` → ChumsHome component
- `b1.church` → B1Home component  
- `streaminglive.church` → StreamingLiveHome component
- Default → Home component (main ChurchApps site)

### Project Structure
- `/src/components/` - Shared components across all brands
- `/src/chums/` - CHUMS-specific components, styles, and assets
- `/src/b1/` - B1-specific components, styles, and assets
- `/src/streamingLive/` - StreamingLive-specific components, styles, and assets
- `/src/contribute/` - Contribution and developer onboarding pages
- `/src/environment/` - Development environment setup guidance

### Key Dependencies
- Material-UI for theming and components
- `@churchapps/apphelper` for shared utilities, themes, and analytics
- React Router for client-side routing
- React Cookies for cookie management

### Styling Approach
Each brand has its own CSS variables and styles:
- CHUMS: `ChumsStyles.css` + `ChumsVariables.css`
- B1: `B1Styles.css` + `B1Variables.css`
- StreamingLive: `StreamingLive.css`

Shared styles use Material-UI's theme system via `@churchapps/apphelper`.

## Deployment

The project has automated deployment scripts for staging and production environments using AWS S3 and CloudFront. Use `npm run deploy-staging` or `npm run deploy-prod`.