import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text';
import { getLoginUsername, getLoginPassword, getLoginIsLoading, getLoginError } from '../../model/selectors';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [ dispatch ]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [ dispatch ]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [ dispatch, password, username ]);

    return (
        <DynamicModuleLoader reducers={ initialReducers }>
            <div className={ classNames(cls.LoginForm, {}, [ className ]) }>
                <Text title={ t('sign_in_form') } />
                { error && <Text text={ t('auth_error') } theme={ TextTheme.ERROR } /> }
                <Input
                    type="text"
                    placeholder={ t('enter_username') }
                    autofocus
                    onChange={ onChangeUsername }
                    className={ cls.input }
                    value={ username }
                />
                <Input
                    type="text"
                    placeholder={ t('enter_password') }
                    onChange={ onChangePassword }
                    className={ cls.input }
                    value={ password }
                />
                <Button
                    className={ cls.loginBtn }
                    theme={ ButtonTheme.OUTLINE }
                    onClick={ onLoginClick }
                    disabled={ isLoading }
                >
                    { t('sign_in') }
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
