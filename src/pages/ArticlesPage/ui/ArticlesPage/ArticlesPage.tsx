import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageVIew';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { Page } from 'shared/ui/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlesPage());
    };

    const onChangeView = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    };

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <Page
                className={ classNames(cls.ArticlesPage, {}, [ className ]) }
                onScrollEnd={ onLoadNextPart }
            >
                <ArticleViewSelector view={ view } onViewClick={ onChangeView } />
                <ArticleList
                    isLoading={ isLoading }
                    view={ view }
                    articles={ articles }
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
