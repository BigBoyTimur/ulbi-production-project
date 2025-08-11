import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {
        className: '',
    },
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

export const Dark: Story = {
    args: {
        className: '',
    },
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

export const UnAuthorized: Story = {
    args: {
        className: '',
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: { },
        }),
    ],
};
