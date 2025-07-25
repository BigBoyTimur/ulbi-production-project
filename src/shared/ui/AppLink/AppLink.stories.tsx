import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: [ 'autodocs' ],
    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(AppLinkTheme),
        },
        children: {
            control: 'text',
        },
        to: {
            control: 'text',
            defaultValue: '/',
        },
    },
    args: {
        to: '/',
        children: 'Link Text',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const SecondaryLight: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const RedLight: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const RedDark: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
