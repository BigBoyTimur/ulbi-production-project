import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);

    return (
        <div className={ classNames(cls.ProfileCard, {}, [ className ]) }>
            <div className={ cls.header } >
                <Text
                    title={ t('profile') }
                />
                <Button className={ cls.editBtn }  theme={ ButtonTheme.OUTLINE }>{ t('edit') }</Button>
            </div>
            <div className={ cls.data }>
                <Input
                    value={ data?.first }
                    placeholder={ t('placeholders.first_name') }
                />
                <Input
                    value={ data?.lastname }
                    placeholder={ t('placeholders.last_name') }
                />
            </div>
        </div>
    );
};
