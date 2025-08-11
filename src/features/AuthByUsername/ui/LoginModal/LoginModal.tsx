import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader';
import { Suspense } from 'react';


interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {

    return (
        <Modal
            className={ classNames('', {}, [ className ]) }
            isOpen={ isOpen }
            onClose={ onClose }
            lazy
        >
            <Suspense fallback={ <Loader /> }>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
