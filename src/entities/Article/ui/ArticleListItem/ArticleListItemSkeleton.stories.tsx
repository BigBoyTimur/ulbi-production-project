import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';
import { ArticleView } from '../../model/types/article';

const meta: Meta<typeof ArticleListItemSkeleton> = {
    title: 'entities/ArticleListItem/ArticleListItemSkeleton',
    component: ArticleListItemSkeleton,
};

export default meta;
type Story = StoryObj<typeof ArticleListItemSkeleton>;



export const Small: Story = {
    args: {
        view: ArticleView.SMALL,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const Big: Story = {
    args: {
        view: ArticleView.BIG,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

