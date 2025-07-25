import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage', 
    component: AboutPage,
    tags: [ 'autodocs' ],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Dark: Story = {
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
