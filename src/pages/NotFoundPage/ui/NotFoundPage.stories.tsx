import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Dark: Story = {
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
