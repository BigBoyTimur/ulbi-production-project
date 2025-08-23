import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageVIew';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

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
    const [ searchParams ] = useSearchParams();

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlesPage());
    };

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ false }>
            <Page
                className={ classNames(cls.ArticlesPage, {}, [ className ]) }
                onScrollEnd={ onLoadNextPart }
            >
                <ArticlesPageFilters />
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
