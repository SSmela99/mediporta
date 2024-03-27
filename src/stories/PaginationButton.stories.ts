import type { Meta, StoryObj } from "@storybook/react";

import PaginationButton from "@/components/Pagination/PaginationButton";

const meta: Meta<typeof PaginationButton> = {
  component: PaginationButton,
};

export default meta;
type Story = StoryObj<typeof PaginationButton>;

export const Prev: Story = {
  args: {
    text: "Prev",
    style: {
      maxWidth: "70px",
    },
  },
};

export const Next: Story = {
  args: {
    text: "Next",
    isSecond: true,
    style: {
      maxWidth: "70px",
    },
  },
};
