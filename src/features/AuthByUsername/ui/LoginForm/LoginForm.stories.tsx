import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const LightEmpty: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: '',
                password: '',
            },
        }),
    ],
};

export const LightFilled: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: 'johnDoe',
                password: 'password123',
            },
        }),
    ],
};

export const DarkEmpty: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: '',
                password: '',
            },
        }),
    ],
};

export const DarkFilled: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: 'johnDoe',
                password: 'password123',
            },
        }),
    ],
};
