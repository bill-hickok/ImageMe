import type { Meta, StoryObj } from "@storybook/react";
import { withFormik } from "@bbbtech/storybook-formik";
import AppTextInput from "~/components/common/form/AppTextInput";

// import AppTextFields from "src/components/common/form/AppSubmitButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Forms/Text-Field",
  component: AppTextInput,
  decorators: [withFormik],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof AppTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const TextField: Story = {
  args: {
    type: "text",
    label: "Text Field",
    name: "text",
  },
  parameters: {
    formik: {
      initialValues: {
        text: "",
      },
    },
  },
};

export const PasswordField: Story = {
  args: {
    type: "password",
    label: "Password Field",
    name: "text",
  },
  parameters: {
    formik: {
      initialValues: {
        text: "",
      },
    },
  },
};

export const DisabledField: Story = {
  args: {
    type: "text",
    disabled: true,
    label: "Disabled Field",
    name: "text",
  },
  parameters: {
    formik: {
      initialValues: {
        text: "",
      },
    },
  },
};
