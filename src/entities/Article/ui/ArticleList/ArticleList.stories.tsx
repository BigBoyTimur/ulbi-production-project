import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Article, ArticleView } from '../../model/types/article';
import { articleMock } from '../../lib/mocks/articleMock';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/ArticleList',
    component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

const articles: Article[] = new Array(9).fill(articleMock);

export const Small: Story = {
    args: {
        articles,
        view: ArticleView.SMALL,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const LoadingSmall: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.SMALL,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};


export const Big: Story = {
    args: {
        articles,
        view: ArticleView.BIG,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const LoadingBig: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.BIG,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};
