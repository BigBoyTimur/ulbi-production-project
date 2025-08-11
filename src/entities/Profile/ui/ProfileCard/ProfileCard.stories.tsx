import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Profile } from 'entities/Profile/model/types/profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const WithProfileData: Story = {
    args: {
        data: {
            first: 'John',
            lastname: 'Doe',
            age: 30,
            city: 'New York',
            username: 'johndoe',
            currency: Currency.RUB,
            country: Country.Russia,
            avatar: AvatarImg,
        } as Profile,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const WithError: Story = {
    args: {
        error: 'Error loading profile data',
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};
