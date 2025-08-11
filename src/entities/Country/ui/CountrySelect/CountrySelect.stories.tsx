import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from 'entities/Country/model/types/country';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
    args: {
        value: Country.Russia,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Disabled: Story = {
    args: {
        value: Country.Russia,
        disabled: true,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};
