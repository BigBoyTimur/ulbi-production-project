import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useCallback, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';


interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = useCallback(() => setCollapsed(prev => !prev), []);
    
    const itemsList = sidebarItemsList.map((item) => (
        <SidebarItem
            item={ item }
            collapsed={ collapsed }
            key={ item.path }
        />
    ));

    return (
        <menu
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
        </menu>
    );
});
