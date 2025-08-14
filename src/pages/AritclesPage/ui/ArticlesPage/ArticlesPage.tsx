import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={ classNames(cls.ArticlesPage, {}, [ className ]) }>
            ARTICLE PAGE
        </div>
    );
};

export default ArticlesPage;
