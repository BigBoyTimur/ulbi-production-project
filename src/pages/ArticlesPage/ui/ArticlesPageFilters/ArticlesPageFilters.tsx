import cls from './ArticlesPageFilters.module.scss';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageVIew';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder';
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch';
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { 
    ArticleSortField, ArticleSortSelector, ArticleType, ArticleTypeTabs, ArticleView, ArticleViewSelector, 
} from 'entities/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles-list');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = () => {
        dispatch(fetchArticlesList({ replace: true }));
    };

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    };

    const onChangeSort = (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };

    const onChangeOrder = (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };

    const onChangeSearch = (search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    };

    const onChangeType = (value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };

    return (
        <div className={ classNames(cls.ArticlesPageFilters, {}, [ className ]) }>
            <div className={ cls.sortWrapper }>
                <ArticleSortSelector
                    order={ order }
                    sort={ sort }
                    onChangeOrder={ onChangeOrder }
                    onChangeSort={ onChangeSort }
                />
                <ArticleViewSelector
                    view={ view }
                    onViewClick={ onChangeView }
                />
            </div>
            <Card className={ cls.search }>
                <Input
                    onChange={ onChangeSearch }
                    value={ search }
                    placeholder={ t('search') }
                />
            </Card>
            <ArticleTypeTabs
                value={ type }
                onChangeType={ onChangeType }
                className={ cls.tabs }
            />
        </div>
    );
};
