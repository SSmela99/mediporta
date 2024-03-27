import type { Meta, StoryObj } from "@storybook/react";

import TableRow from "@/components/Table/TableRow";

const meta: Meta<typeof TableRow> = {
  component: TableRow,
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    count: 1337,
    name: "Test",
  },
};
