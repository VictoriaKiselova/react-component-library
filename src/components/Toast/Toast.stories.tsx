import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Easy: Story = {
  args: {
    time: 6000,
  },
};

export const Middle: Story = {
  args: {
    time: 3000,
  },
};

export const Fast: Story = {
  args: {
    time: 500,
  },
};
