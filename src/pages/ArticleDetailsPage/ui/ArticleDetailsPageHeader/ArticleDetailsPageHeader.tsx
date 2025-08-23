import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    // const canEdit = true;
    const article = useSelector(getArticleDetailsData);

    const onBackToList = () => {
        navigate(RoutePath.articles);
    };

    const onEditArticle = () => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    };

    return (
        <div className={ classNames(cls.ArticleDetailsPageHeader, {}, [ className ]) }>
            <Button theme={ ButtonTheme.OUTLINE } onClick={ onBackToList }>
                { t('back_to_list') }
            </Button>
            { canEdit && (
                <Button
                    className={ cls.editBtn }
                    theme={ ButtonTheme.OUTLINE }
                    onClick={ onEditArticle }
                >
                    { t('edit') }
                </Button>
            ) }
        </div>
    );
};
