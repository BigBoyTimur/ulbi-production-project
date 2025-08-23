import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeOrder,
        onChangeSort,
        order,
        sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ];

    const sortFieldOptions = [
        {
            value: ArticleSortField.CREATED,
            content: t('by_created_at_date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('by_title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('by_views'),
        },
    ];


    const changeSortHandler = (newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    };

    const changeOrderHandler = (newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    };

    return (
        <div className={ classNames(cls.ArticleSortSelector, {}, [ className ]) }>
            <Select
                options={ sortFieldOptions }
                label={ t('sort_by') }
                value={ sort }
                onChange={ changeSortHandler }
            />
            <Select
                options={ orderOptions }
                label={ t('by') }
                value={ order }
                onChange={ changeOrderHandler }
                className={ cls.order }
            />
        </div>
    );
};
