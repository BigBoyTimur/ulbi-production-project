import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    disabled?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        disabled,
    } = props;

    const { t } = useTranslation('profile');

    const onCountryChange = (value: string) => {
        onChange?.(value as Country);
    };
    
    return (
        <Select
            className={ classNames('', {}, [ className ]) }
            label={  t('placeholders.country') }
            options={ options }
            value={ value }
            onChange={ onCountryChange }
            disabled={ disabled }
        / >
    );
};
