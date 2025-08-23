import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleListItem } from './ArticleListItem';
import { ArticleView } from '../../model/types/article';
import { articleMock as article } from '../../lib/mocks/articleMock';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/ArticleListItem/ArticleListItem',
    component: ArticleListItem,
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Small: Story = {
    args: {
        article,
        view: ArticleView.SMALL,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Big: Story = {
    args: {
        article,
        view: ArticleView.BIG,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

