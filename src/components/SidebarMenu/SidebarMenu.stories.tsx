import type { Meta, StoryObj } from "@storybook/react";
import SidebarMenu from "./SidebarMenu.tsx";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/Navigation/SidebarMenu",
  component: SidebarMenu,
  args: {
    open: true,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SidebarMenu>;

export const Open: Story = {
  args: {
    open: true,
  },
};
