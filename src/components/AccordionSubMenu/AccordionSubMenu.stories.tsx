import type { Meta, StoryObj } from "@storybook/react";
import AccordionSubMenu from "./AccordionSubMenu";
import navList from "../../constants/navList";

const meta: Meta<typeof AccordionSubMenu> = {
  title: "Components/Navigation/SidebarMenu/Accordion/AccordionSubMenu",
  component: AccordionSubMenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AccordionSubMenu>;

export const Open: Story = {
  args: {
    isOpenSubMenu: false,
    subMenu: navList[0].subMenu,
  },
};

export const Closed: Story = {
  args: {
    isOpenSubMenu: false,
    subMenu: navList[0].subMenu,
  },
};
