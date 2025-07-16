# Storybook Guide

This guide explains how to use Storybook in this React project for component development and documentation.

## 🚀 Getting Started

### Running Storybook

```bash
npm run storybook
```

This starts the Storybook development server at `http://localhost:6006`.

### Building Storybook

To build a static version of Storybook for deployment:

```bash
npm run build-storybook
```

## 📖 Writing Stories

### Basic Story Structure

Stories are written in `.stories.tsx` files alongside your components:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "./MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "UI/MyComponent", // Organize in the sidebar
  component: MyComponent,
  parameters: {
    layout: "centered", // or 'fullscreen', 'padded'
  },
  tags: ["autodocs"], // Enable auto-generated docs
  argTypes: {
    // Define controls for props
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};
```

### Advanced Story Features

#### Multiple Variants

```tsx
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};
```

#### Custom Render Function

```tsx
export const WithIcon: Story = {
  render: (args) => (
    <MyComponent {...args}>
      <Icon />
      Click me
    </MyComponent>
  ),
};
```

#### Decorators for Context

```tsx
import { BrowserRouter } from "react-router";

const meta: Meta<typeof MyComponent> = {
  // ... other config
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
```

## 🎨 Styling in Storybook

### Tailwind CSS Integration

Tailwind CSS is automatically included in Storybook through the preview configuration in `.storybook/preview.ts`:

```ts
import "../src/index.css";
```

This ensures all your Tailwind styles are available in Storybook.

### Theme Provider

If you're using a theme provider, add it as a decorator:

```tsx
import { ThemeProvider } from "../src/components/theme-provider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
```

## 🧪 Testing with Storybook

### Accessibility Testing

The `@storybook/addon-a11y` addon is configured to help catch accessibility issues:

- View a11y panel in Storybook
- Violations show in the "Accessibility" tab
- Configure in `.storybook/preview.ts`:

```ts
const preview: Preview = {
  parameters: {
    a11y: {
      test: "todo", // 'todo', 'error', or 'off'
    },
  },
};
```

### Controls and Args

Use controls to test different prop combinations:

```tsx
argTypes: {
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
  },
  disabled: {
    control: { type: 'boolean' },
  },
  label: {
    control: { type: 'text' },
  },
}
```

## 📁 Organization

### Story Organization

Organize stories with the `title` property:

```tsx
title: "Design System/Components/Button";
title: "Pages/Homepage";
title: "Features/Authentication/LoginForm";
```

### File Structure

```
src/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── button.stories.tsx
│       ├── card.tsx
│       └── card.stories.tsx
├── pages/
│   ├── HomePage.tsx
│   └── HomePage.stories.tsx
└── stories/
    └── example.stories.tsx
```

## 🔧 Configuration

### Main Configuration (`.storybook/main.ts`)

- **Stories**: Defines where to find story files
- **Addons**: Additional functionality (docs, a11y, etc.)
- **Framework**: React with Vite
- **Static dirs**: Public assets

### Preview Configuration (`.storybook/preview.ts`)

- **Global decorators**: Wrap all stories
- **Global parameters**: Default settings
- **Styles**: Import global CSS

## 🎯 Best Practices

### 1. Story Naming

- Use descriptive names: `Primary`, `WithIcon`, `Loading`
- Follow consistent patterns across components

### 2. Args and Controls

- Provide meaningful defaults
- Include all important props
- Use appropriate control types

### 3. Documentation

- Add JSDoc comments to components
- Use the `autodocs` tag for automatic documentation
- Write custom MDX documentation when needed

### 4. Visual Testing

- Create stories for all visual states
- Include edge cases (long text, empty states)
- Test responsive behavior

## 🚀 Deployment

To deploy Storybook:

1. Build the static version:

   ```bash
   npm run build-storybook
   ```

2. Deploy the `storybook-static` folder to your hosting service.

## 📚 Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [React Storybook Examples](https://storybook.js.org/docs/react/get-started/introduction)
- [Addon Documentation](https://storybook.js.org/docs/react/addons/introduction)
