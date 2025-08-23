import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Page } from 'widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [ value, setValue ] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            { t('main_page') }
            <Input
                placeholder="Введите текст"
                value={ value }
                onChange={ onChange }
            />
        </Page>
    );
};

export default MainPage;
