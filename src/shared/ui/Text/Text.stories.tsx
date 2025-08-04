import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
        title: {
            control: 'text',
        },
        text: {
            control: 'text',
        },
        theme: {
            control: 'select',
            options: [ 'PRIMARY', 'ERROR' ],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TitleAndText: Story = {
    args: {
        title: 'Title',
        text: 'This is a text',
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const OnlyText: Story = {
    args: {
        text: 'This is a text',
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const DarkTheme: Story = {
    args: {
        title: 'Title',
        text: 'This is a text',
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
