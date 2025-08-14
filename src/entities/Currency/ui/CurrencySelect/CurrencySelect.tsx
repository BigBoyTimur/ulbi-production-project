import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    disabled?: boolean;
}

const options = [
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
    {
        value: Currency.EUR,
        content: Currency.EUR,
    },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        disabled,
    } = props;

    const { t } = useTranslation('profile');

    const onCurrencyChange = (value: string) => {
        onChange?.(value as Currency);
    };
    
    return (
        <Select
            className={ classNames('', {}, [ className ]) }
            label={  t('placeholders.currency') }
            options={ options }
            value={ value }
            onChange={ onCurrencyChange }
            disabled={ disabled }
        / >
    );
};
