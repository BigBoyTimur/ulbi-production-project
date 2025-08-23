/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPage } from './ArticleDetailsPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { articleMock as article } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
    ],
};
