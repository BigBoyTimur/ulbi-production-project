/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';
import { Text } from '../Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: [ 'autodocs' ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Dark: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
