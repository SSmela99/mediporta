import Entity from "@/components/Table/Entity";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Entity> = {
  component: Entity,
};

export default meta;
type Story = StoryObj<typeof Entity>;

export const Default: Story = {
  args: {
    width: 50,
    children: "Test",
  },
};
