import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { memo } from 'react';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(profileActions.setReadonly(false));
    };

    const onCancelEdit = () => {
        dispatch(profileActions.cancelEdit());
    };

    const onSave = () => {
        dispatch(updateProfileData());
    };

    return (
        <div className={ classNames(cls.ProfilePageHeader, {}, [ className ]) }>
            <Text
                title={ t('profile') }
            />
            { readonly
                ? (
                    <Button
                        onClick={ onEdit }
                        className={ cls.editBtn } 
                        theme={ ButtonTheme.OUTLINE }
                    >
                        { t('edit') }
                    </Button>
                )
                :  (
                    <div>
                        <Button
                            onClick={ onCancelEdit }
                            className={ cls.editBtn } 
                            theme={ ButtonTheme.OUTLINE_RED }
                        >
                            { t('cancel') }
                        </Button>
                        <Button
                            onClick={ onSave }
                            className={ cls.editBtn } 
                            theme={ ButtonTheme.OUTLINE }
                        >
                            { t('save') }
                        </Button>
                    </div>
                ) }
        </div>
    );
});
