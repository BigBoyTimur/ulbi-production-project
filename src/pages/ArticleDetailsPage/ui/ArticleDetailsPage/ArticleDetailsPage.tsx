import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/getArticleCommentsIsLoading';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { Text, TextSize } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';
import { Page } from 'widgets/Page';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import {
    getArticleRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = (comment: string) => {
        dispatch(addCommentForArticle(comment));
    };

    if (!id) {
        return (
            <Page className={ classNames(cls.ArticleDetailsPage, {}, [ className ]) }>
                { t('article_id_not_given') }
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <Page className={ classNames(cls.ArticleDetailsPage, {}, [ className ]) }>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={ id } />
                <Text size={ TextSize.L } title={ t('we_recommend') } className={ cls.recommendations } />
                <ArticleList
                    articles={ recommendations }
                    isLoading={ recommendationsIsLoading }
                    className={ cls.recommendations }
                    noWrap = { true }
                    target="_blank"
                />
                <Text className={ cls.commentTitle } title={ t('comments') } />
                <AddCommentForm className={ cls.addCommentForm } onSendComment={ onSendComment } />
                <CommentList
                    isLoading={ commentsIsLoading }
                    comments={ comments }
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default ArticleDetailsPage;
