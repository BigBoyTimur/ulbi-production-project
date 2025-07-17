import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div className={ classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [ className ]) }>
            { /* eslint-disable i18next/no-literal-string */ }
            <button onClick={ onToggle }>toggle</button>
            <div className={ cls.switchers }>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
