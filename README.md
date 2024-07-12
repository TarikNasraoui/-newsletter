# Features

• App Router: Utilizes the App Router feature of Next.js for improved routing and organization.

• Responsive Design: The application is styled using Material-UI and is responsive to different screen sizes.

• Atomic Design: The project is structured using the Atomic Design methodology, promoting reusability and maintainability.

• Server-Side Rendering (SSR): Data is fetched on the server side to ensure faster load times.

• User Context: The current user’s subscription rights are managed through React Context.

• Mock Data: Uses mock data for newsletters and user profiles.

• API Simulation: Next.js API routes and Axios are used to simulate real API calls.

• TypeScript: The entire codebase is written in TypeScript for better type safety and developer experience.

# Prerequisites

Before running the application, you need to create a .env file to configure the environment variables. This is important for setting up the base URL for your local development environment.
Add the following variable to your .env file:

BASE_URL_LOCAL = http://localhost:3000

```bash

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
```
