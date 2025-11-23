import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input/Input",
  component: Input,
  args: {
    clearable: false,
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "text",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "number",
  },
};
