import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePage } from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Profile } from 'entities/Profile/model/types/profile';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const WithProfileData: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            profile: {
                form: {
                    first: 'John',
                    lastname: 'Doe',
                    age: 30,
                    city: 'New York',
                    username: 'johndoe',
                    currency: Currency.RUB,
                    country: Country.Russia,
                    avatar: AvatarImg,
                } as Profile,
                readonly: true,
            },
        }),
    ],
};


