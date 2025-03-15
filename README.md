# Segwise Frontend Assignment

This project is a frontend implementation for the Segwise Frontend Intern Assignment. It features a data dashboard with filters, a data table, and an interactive preview feature.

## Features

- **Pixel-perfect Filter Implementation**: Based on the provided Figma design
- **Data Table**: With search, sorting, and pagination functionality
- **Interactive Preview**: Click on any row to see a preview in the bottom-right corner
- **Expandable Preview**: Click the expand icon to see full details in a modal
- **Responsive Design**: Works on various screen sizes

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Table for table functionality
- Heroicons for icons

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd segwise-frontend-assignment
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Build and Deploy

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: React components organized by feature
  - `/Filters`: Filter-related components
  - `/Table`: Table-related components
  - `/Preview`: Preview-related components
- `/src/data`: Mock data and data utilities
- `/src/types`: TypeScript type definitions

## Implementation Details

### Filters

The filter implementation follows the Figma design, allowing users to:
- Select multiple values for each filter category
- See active filters as tags
- Clear individual filters or all filters at once

### Data Table

The table implementation includes:
- Column sorting (click on column headers)
- Global search (searches across all fields)
- Pagination with adjustable page size
- Formatted display of numeric values

### Preview Feature

The preview feature allows users to:
- Click on any row to see a small preview in the bottom-right corner
- Expand the preview to see full details in a modal
- Close the preview when done

## Deployment

This project can be deployed on Vercel or Netlify with minimal configuration.

## License

This project is created for the Segwise Frontend Intern Assignment and is not licensed for public use.