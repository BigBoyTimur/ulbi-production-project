import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

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
