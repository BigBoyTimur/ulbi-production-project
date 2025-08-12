import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading, 
    getProfileReadonly, 
    profileActions, 
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileValidateErrors } from 'entities/Profile';
import { Text, TextTheme } from 'shared/ui/Text';
import { ValidateProfileError } from 'entities/Profile';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const validateErrorsTranslateMap: Record<ValidateProfileError, string> = {
    [ValidateProfileError.SERVER_ERROR]: 'errors.server_error',
    [ValidateProfileError.INCORRECT_USER_DATA]: 'errors.incorrect_user_data',
    [ValidateProfileError.INCORRECT_AGE]: 'errors.incorrect_age',
    [ValidateProfileError.INCORRECT_COUNTRY]: 'errors.incorrect_country',
    [ValidateProfileError.NO_DATA]: 'errors.no_data',
};


export const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [ dispatch ]);

    
    const onFirstNameChange = (value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    };

    const onLastNameChange = (value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    };

    const onCityChange = (value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    };

    const onAgeChange = (value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    };

    const onUsernameChange = (value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    };

    const onAvatarChange = (value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    };

    const onCurrencyChange = (currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    };

    const onCountryChange = (country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    };

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames('', {}, [ className ]) }>
                <ProfilePageHeader />
                { validateErrors?.length && validateErrors.map((err: ValidateProfileError) => (
                    <Text
                        key={ err }
                        theme={ TextTheme.ERROR } 
                        text={ t(validateErrorsTranslateMap[err]) } />
                )) }
                <ProfileCard
                    data={ formData }
                    isLoading={ isLoading }
                    error={ error }
                    readonly= { readonly }
                    onFirstNameChange={ onFirstNameChange }
                    onLastNameChange={ onLastNameChange }
                    onCityChange={ onCityChange }
                    onAgeChange={ onAgeChange }
                    onUsernameChange={ onUsernameChange }
                    onAvatarChange={ onAvatarChange }
                    onCurrencyChange={ onCurrencyChange }
                    onCountryChange={ onCountryChange }
                />
            </div>

        </DynamicModuleLoader>
    );
};

export default ProfilePage;
