import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextTheme, TextAlign } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onFirstNameChange?: (value?: string) => void;
    onLastNameChange?: (value?: string) => void;
    onCityChange?: (value?: string) => void;
    onAgeChange?: (value?: string) => void;
    onUsernameChange?: (value?: string) => void;
    onAvatarChange?: (value?: string) => void;
    onCurrencyChange?: (currency: Currency) => void;
    onCountryChange?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading, 
        error,
        readonly,
        onFirstNameChange,
        onLastNameChange,
        onCityChange,
        onAgeChange,
        onUsernameChange,
        onAvatarChange,
        onCurrencyChange,
        onCountryChange,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={ classNames(cls.ProfileCard, {}, [ cls.loading ]) }>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={ classNames(cls.ProfileCard, {}, [ ]) }>
                <Text
                    theme={ TextTheme.ERROR }
                    title={ t('error_while_loading') }
                    text={ t('try_reload') }
                    align={ TextAlign.CENTER }
                    className={ cls.error }
                />
            </div>
        );
    }

    return (
        <div className={ classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [ className ]) }>
            <div className={ cls.data }>
                { data?.avatar &&
                    <div className={ cls.avatarWrapper }>
                        <Avatar
                            src={ data?.avatar }
                            alt="avatar"
                        />
                    </div>
                }
                <div className={ cls.username }>
                    <Text title={ data?.username } />
                </div>
                <Input
                    value={ data?.first }
                    placeholder={ t('placeholders.first_name') }
                    onChange={ onFirstNameChange }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.lastname }
                    placeholder={ t('placeholders.last_name') }
                    onChange={ onLastNameChange }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.age }
                    placeholder={ t('placeholders.age') }
                    onChange={ onAgeChange }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.city }
                    placeholder={ t('placeholders.city') }
                    onChange={ onCityChange }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.username }
                    placeholder={ t('placeholders.username') }
                    onChange={ onUsernameChange }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.avatar }
                    placeholder={ t('placeholders.link_to_avatar') }
                    onChange={ onAvatarChange }
                    readonly={ readonly }
                />
                <CurrencySelect
                    value={ data?.currency }
                    onChange={ onCurrencyChange }
                    disabled={ readonly }
                />
                <CountrySelect
                    value={ data?.country }
                    onChange={ onCountryChange }
                    disabled={ readonly }
                />
            </div>
        </div>
    );
};
