import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/getArticleCommentsIsLoading';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Page } from 'shared/ui/Page';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onBackToList = () => {
        navigate(RoutePath.articles);
    };

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
                <Button theme={ ButtonTheme.OUTLINE } onClick={ onBackToList }>
                    { t('back_to_list') }
                </Button>
                <ArticleDetails id={ id } />
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
