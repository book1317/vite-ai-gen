# React Project Structure

This project follows standard React application conventions with a clean separation of concerns.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (Header, Footer, etc.)
│   ├── layout/          # Layout components
│   ├── ui/              # UI library components (shadcn/ui)
│   │   ├── *.tsx        # Component files
│   │   └── *.stories.tsx # Storybook stories
│   ├── App.tsx          # Main app component
│   └── index.ts         # Component exports
├── pages/               # Page components (route components)
│   ├── HomePage.tsx     # Home page component
│   ├── LoginPage.tsx    # Login page component
│   ├── *.stories.tsx    # Storybook stories for pages
│   └── index.ts         # Page exports
├── hooks/               # Custom React hooks
│   ├── useAuth.ts       # Authentication hook
│   └── index.ts         # Hook exports
├── types/               # TypeScript type definitions
│   └── index.ts         # Type exports
├── utils/               # Utility functions
│   └── utils.ts         # Common utilities
├── stories/             # Example Storybook stories
└── main.tsx             # Application entry point
.storybook/              # Storybook configuration
├── main.ts              # Storybook main config
├── preview.ts           # Global story decorators and parameters
└── vitest.setup.ts      # Vitest setup for testing
```

## 🏗️ Architecture Overview

### Components (`/src/components/`)

- **UI Components** (`/ui/`): Reusable UI components from shadcn/ui
- **Common Components** (`/common/`): Shared components like Header, Footer
- **Layout Components** (`/layout/`): Layout wrapper components

### Pages (`/src/pages/`)

Contains page-level components that represent different routes in your application:

- `HomePage.tsx` - Landing/home page
- `LoginPage.tsx` - User authentication page

### Hooks (`/src/hooks/`)

Custom React hooks for managing state and side effects:

- `useAuth.ts` - Authentication state and actions

### Types (`/src/types/`)

TypeScript type definitions for better type safety:

- User interfaces
- API response types
- Form state types

### Utils (`/src/utils/`)

Utility functions and helpers used across the application.

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📋 Conventions

### File Naming

- Components: PascalCase (e.g., `HomePage.tsx`, `UserProfile.tsx`)
- Hooks: camelCase starting with "use" (e.g., `useAuth.ts`, `useLocalStorage.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- Types: PascalCase for interfaces (e.g., `User`, `ApiResponse`)

### Import/Export Patterns

- Use named exports from index files for cleaner imports
- Components export as default, then re-export from index files
- Import from index files when possible:
  ```tsx
  import { HomePage, LoginPage } from "../pages";
  import { useAuth } from "../hooks";
  ```

### Component Structure

```tsx
import React from 'react';
import type { ComponentProps } from '../types';

interface ComponentNameProps {
  // prop definitions
}

const ComponentName: React.FC<ComponentNameProps> = ({ ...props }) => {
  // component logic

  return (
    // JSX
  );
};

export default ComponentName;
```

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Vite** - Build tool and dev server
- **Storybook** - Component development and documentation

## 📚 Storybook Integration

Storybook is integrated for component development and documentation:

### Running Storybook

```bash
npm run storybook
```

This will start the Storybook development server at `http://localhost:6006`.

### Building Storybook

```bash
npm run build-storybook
```

### Creating Stories

Stories are created alongside components using the `.stories.tsx` extension:

```tsx
// src/components/ui/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
```

### Features Included

- **Component Development**: Isolated component development environment
- **Documentation**: Auto-generated documentation with controls
- **Accessibility Testing**: Built-in a11y addon for accessibility checks
- **Visual Testing**: Integration with Chromatic for visual regression testing

## 📖 Best Practices

1. **Separation of Concerns**: Keep pages, components, and business logic separate
2. **Reusability**: Create reusable components in the `/components` directory
3. **Type Safety**: Use TypeScript interfaces and types consistently
4. **Custom Hooks**: Extract complex logic into custom hooks
5. **Clean Imports**: Use index files for cleaner import statements
6. **Consistent Naming**: Follow established naming conventions
