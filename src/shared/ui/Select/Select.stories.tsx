import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: 'Select an option',
        options: [
            { value: '1', content: 'Option 1' },
            { value: '2', content: 'Option 2' },
            { value: '3', content: 'Option 3' },
        ],
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};
