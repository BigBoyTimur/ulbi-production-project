/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';
import { articleMock as article } from 'entities/Article';

const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const Normal: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
    ],
};

export const Loading: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            articleDetails: {
                error: 'error',
            },
        }),
    ],
};
