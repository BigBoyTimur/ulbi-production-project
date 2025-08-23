import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleEditPageProps {
    className?: string;
}

export const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={ classNames('', {}, [ className ]) }>
            { isEdit ? 'EDIT' : 'CREATE' }
        </div>
    );
};

export default ArticleEditPage;
