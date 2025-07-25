import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher,
    tags: [ 'autodocs' ],
    argTypes: {
        className: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Light: Story = {
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Dark: Story = {
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
