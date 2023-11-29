import type { Meta, StoryObj } from "@storybook/react";

import AppSubmitButton from "src/components/common/form/AppSubmitButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Forms/CustomButton",
  component: AppSubmitButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof AppSubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryAdd: Story = {
  args: {
    primary: true,
    label: "Button",
    addIcon: true,
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const PrimaryHover: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const SecondaryAdd: Story = {
  args: {
    label: "Button",
    addIcon: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
