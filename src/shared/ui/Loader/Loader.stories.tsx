import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    args: {
        className: '',
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Dark: Story = {
    args: {
        className: '',
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
