import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginFormComponent = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

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
    );
};

export const LoginForm = memo(LoginFormComponent);
