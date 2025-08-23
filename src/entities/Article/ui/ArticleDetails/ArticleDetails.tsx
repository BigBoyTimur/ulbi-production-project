import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/getArticleDetailsIsLoading';
import { getArticleDetailsError } from 'entities/Article/model/selectors/getArticleDetailsError';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetailsData';
import { Text, TextAlign, TextSize } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={ block.id }
                        block={ block }
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={ block.id }
                        block={ block }
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={ block.id }
                        block={ block }
                    />
                );
            default:
                return null;
        }
    };

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <div className={ cls.avatarWrapper }>
                    <Skeleton width={ 200 } height={ 200 } borderRadius="50%" />
                </div>
                <Skeleton className={ cls.title } width={ 300 } height={ 32 } />
                <Skeleton className={ cls.skeleton } width={ 600 } height={ 24 } />
                <Skeleton className={ cls.skeleton } width="100%" height={ 200 } />
                <Skeleton className={ cls.skeleton } width="100%" height={ 200 } />
            </>
        );
    } else if(error) {
        content = (
            <Text
                title={ t('error_while_loading') }
                align={ TextAlign.CENTER }
            />
        );
    } else {
        content = (
            <>
                <div className={ cls.avatarWrapper }>
                    <Avatar
                        size={ 200 }
                        src={ article?.img }
                        className={ cls.avatar }
                    />
                </div>
                <Text
                    className={ cls.title }
                    title={ article?.title }
                    text={ article?.subtitle }
                    size={ TextSize.L }
                />
                <div className={ cls.articleInfo }>
                    <Icon Svg={ EyeIcon } />
                    <Text text={ String(article?.views) } />
                </div>
                <div className={ cls.articleInfo }>
                    <Icon Svg={ CalendarIcon } />
                    <Text text={ article?.createdAt } />
                </div>
                <div className={ cls.blocksWrapper }>
                    { article?.blocks.map(renderBlock) } 
                </div>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.ArticleDetails, {}, [ className ]) }>
                { content }
            </div>
        </DynamicModuleLoader>
    );
};
