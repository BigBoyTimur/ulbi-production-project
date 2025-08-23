import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t }= useTranslation();
    const [ isAuthModal, setIsAuthModal ] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [ dispatch ]);

    if(authData) {
        return (
            <header className={ classNames(cls.Navbar, {}, [ className ]) }>
                <Text
                    className={ cls.appName }
                    // eslint-disable-next-line i18next/no-literal-string
                    title={ 'Blog App' }
                    theme={ TextTheme.INVERTED }
                />
                <div className={ cls.links }>
                    <AppLink
                        to={ RoutePath.article_create }
                        theme={ AppLinkTheme.SECONDARY }
                        className={ cls.createBtn }
                    >
                        { t('create_article') }
                    </AppLink>
                    <Button
                        theme={ ButtonTheme.CLEAR_INVERTED }
                        onClick={ onLogout }
                    >
                        { t('sign_out') }
                    </Button>
                </div>
            </header>
        );
    }

    return (
        <header className={ classNames(cls.Navbar, {}, [ className ]) }>
            <div className={ cls.links }>
                <Button
                    theme={ ButtonTheme.CLEAR_INVERTED }
                    onClick={ onOpenModal }
                >
                    { t('sign_in') }
                </Button>
            </div>
            { isAuthModal &&
                <LoginModal isOpen={ isAuthModal } onClose={ onCloseModal } /> 
            }
        </header>
    );
});
