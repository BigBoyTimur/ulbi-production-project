import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';
import { getArticlesPageHasMore } from '../selectors/getArticlesPageHasMore';
import { getArticlesPageNum } from '../selectors/getArticlesPageNum';
import { getArticlesPageIsLoading } from '../selectors/getArticlesPageIsLoading';
import { AppThunk } from 'app/providers/StoreProvider/config/StateSchema';

export const fetchNextArticlesPage = (): AppThunk => (dispatch, getState) => {
    dispatch({ type: 'articlesPage/fetchNextArticlesPage' });

    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
    }
};
