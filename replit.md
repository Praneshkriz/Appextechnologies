# Appex Technologies - Training Institute Website

## Overview

This is a modern full-stack web application for Appex Technologies, a software training institute based in Coimbatore. The application showcases course offerings, provides information about the institute, and includes a contact form for potential students to inquire about courses.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend components:

- **Frontend**: React-based SPA built with Vite
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM (ready for setup)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend bundling, esbuild for backend compilation

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme matching brand identity
- **Icons**: Font Awesome for consistent iconography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API structure
- **Middleware**: Custom logging and error handling
- **Development**: Hot reload with Vite integration

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured but not yet connected)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless driver

### UI/UX Features
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Library**: Comprehensive shadcn/ui components
- **Color Scheme**: Custom brand colors (yellow/gold primary with neutral grays)
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Radix UI primitives ensure accessibility compliance

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express server handles requests with validation using Zod schemas
3. **Data Persistence**: Contact form submissions are logged (database integration pending)
4. **Response Handling**: API responses are cached and managed by TanStack Query
5. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **zod**: Runtime type validation and schema validation

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: Local PostgreSQL or Neon Database connection

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript to single ESM bundle in `dist`
- **Deployment**: Single Node.js process serves both API and static files

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production/development mode switching via `NODE_ENV`
- Replit-specific optimizations for cloud deployment

## Changelog
- June 30, 2025: Initial setup
- June 30, 2025: Major design transformation - Updated website to match new specification with black background, yellow highlights, and expanded course offerings (13 courses total including C/C++, Java, Python, .NET, UI/UX, Frontend, Fullstack, AI, Data Science, Data Analytics, SAP FICO, Digital Marketing, Testing)
- June 30, 2025: Added floating social media buttons, updated hero section with "Build Your Future with Appex Technologies" messaging, integrated Google Maps, and enhanced contact functionality

## User Preferences

Preferred communication style: Simple, everyday language.