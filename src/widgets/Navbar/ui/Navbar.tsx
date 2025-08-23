import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

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
                <div className={ cls.links }>
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
