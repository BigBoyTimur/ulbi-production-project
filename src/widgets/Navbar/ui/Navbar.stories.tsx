import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const LoggedIn: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: {
                authData: {
                    username: 'johnDoe',
                },
            },
        }),
    ],
};

export const LoggedOut: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: {
                authData: undefined,
            },
        }),
    ],
};

export const LoggedInDarkTheme: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {
                    username: 'johnDoe',
                },
            },
        }),
    ],
};

export const LoggedOutDarkTheme: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: undefined,
            },
        }),
    ],
};
