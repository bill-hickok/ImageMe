import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Formik, Form } from 'formik';
import AppCheckbox, { CheckboxGroupInputProps } from "~/components/common/form/AppCheckbox";

const meta: Meta = {
  title: 'Forms/AppCheckbox',
  component: AppCheckbox,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    options: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof AppCheckbox>;

export const Checkbox: Story = (args: CheckboxGroupInputProps) => (
  <Formik initialValues={{ checkboxField: [] }} onSubmit={(values) => console.log(values)}>
    <Form>
      <AppCheckbox {...args} />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

Checkbox.args = {
  label: 'Checkbox Group',
  name: 'checkboxField',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};
