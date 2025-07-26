import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t }= useTranslation();
    const [ isAuthModal, setIsAuthModal ] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

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
            <div className={ classNames(cls.Navbar, {}, [ className ]) }>
                <div className={ cls.links }>
                    <Button
                        theme={ ButtonTheme.CLEAR_INVERTED }
                        onClick={ onLogout }
                    >
                        { t('sign_out') }
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={ classNames(cls.Navbar, {}, [ className ]) }>
            <div className={ cls.links }>
                <Button
                    theme={ ButtonTheme.CLEAR_INVERTED }
                    onClick={ onOpenModal }
                >
                    { t('sign_in') }
                </Button>
            </div>
            <LoginModal isOpen={ isAuthModal } onClose={ onCloseModal } />
        </div>
    );
};
