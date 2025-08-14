import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Currency } from 'entities/Currency/model/types/currency';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Default: Story = {
    args: {
        value: Currency.RUB,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Disabled: Story = {
    args: {
        value: Currency.RUB,
        disabled: true,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};
