import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router";
import HomePage from "./HomePage";

const meta: Meta<typeof HomePage> = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
