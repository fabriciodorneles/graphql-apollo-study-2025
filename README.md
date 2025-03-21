# GraphQL Apollo Study 2025

A full-stack application demonstrating GraphQL implementation with Apollo Server and Apollo Client.

## Project Structure

```
├── backend/           # Node.js GraphQL server
│   ├── src/
│   │   ├── models/   # GraphQL type definitions
│   │   └── resolvers/# GraphQL resolvers
│   └── index.ts      # Server entry point
└── frontend/         # React application
    ├── src/
    │   ├── components/# React components
    │   ├── lib/      # Apollo client setup
    │   └── services/ # GraphQL queries/mutations
    └── index.html    # Entry HTML file
```

## Technologies Used

### Backend
- Apollo Server
- Type-GraphQL
- TypeScript
- Node.js

### Frontend
- React
- Apollo Client
- TypeScript
- Vite

## Features

- GraphQL API with Type-GraphQL decorators
- User management with in-memory storage
- React frontend with Apollo Client integration
- Real-time cache updates after mutations

## Getting Started

1. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

2. Start the backend server:
```bash
cd backend
npm run dev
```
The GraphQL server will be available at http://localhost:4000/graphql

3. Start the frontend development server:
```bash
cd frontend
npm run dev
```
The frontend application will be available at http://localhost:5173

