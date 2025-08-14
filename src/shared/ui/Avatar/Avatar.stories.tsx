import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImg from '../../assets/tests/storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: [ 'autodocs' ],
    argTypes: {
        size: {
            control: 'number',
        },
        src: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const DefaultSize: Story = {
    args: {
        src: AvatarImg,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const LargeSize: Story = {
    args: {
        size: 350,
        src: AvatarImg,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};
