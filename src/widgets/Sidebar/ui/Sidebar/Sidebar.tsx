import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useCallback, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';


interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = useCallback(() => setCollapsed(prev => !prev), []);
    const itemsList = () => SidebarItemsList.map((item) => (
        <SidebarItem
            item={ item }
            collapsed={ collapsed }
            key={ item.path }
        />
    ));


    return (
        <div
            className={ classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [ className ]) }
            data-testid="sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={ onToggle }
                className={ cls.collapseBtn }
                theme={ ButtonTheme.BACKGROUND_INVERTED }
                square={ true }
                size={ ButtonSize.L }
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={ cls.items }>
                { itemsList }
            </div>
            <div className={ cls.switchers }>
                <ThemeSwitcher />
                <LanguageSwitcher short={ collapsed } />
            </div>
        </div>
    );
});
