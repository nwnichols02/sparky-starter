import { Meta, StoryObj } from '@storybook/react';

import { MuiAutoComplete } from './mui-auto-complete';

const meta: Meta<typeof MuiAutoComplete> = {
  component: MuiAutoComplete,
};

export default meta;

type Story = StoryObj<typeof MuiAutoComplete>;

export const Default: Story = {
  args: {}
};
