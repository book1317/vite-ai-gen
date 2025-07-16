import type { Meta, StoryObj } from "@storybook/react";
import Datepicker from "./datepicker";

const meta = {
  title: "UI/Datepicker",
  component: Datepicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: false,
      description: "The selected date value",
    },
    onChange: {
      action: "date changed",
      description: "Callback function when date is selected",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Select date",
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Choose your date",
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: "Select date",
    className: "w-full",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPreselectedDate: Story = {
  args: {
    value: new Date(),
    placeholder: "Select date",
  },
};
