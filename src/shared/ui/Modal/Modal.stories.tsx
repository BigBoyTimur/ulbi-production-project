import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
        children: {
            control: 'text',
        },
        isOpen: {
            control: 'boolean',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Modal content Modal content Modal content Modal content Modal content Modal content Modal \
        content Modal content Modal content Modal content ',
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Modal content Modal content Modal content Modal content Modal content Modal content Modal \
        content Modal content Modal content Modal content ',
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
