import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);
    const { t } = useTranslation();

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
                <AppLink
                    to={ RoutePath.main }
                    className={ cls.item  }
                    theme={ AppLinkTheme.SECONDARY }
                >
                    <MainIcon className={ cls.icon } />
                    <span className={ cls.link }>{ t('links.main') }</span>
                </AppLink>
                <AppLink
                    to={ RoutePath.about }
                    className={ cls.item  }
                    theme={ AppLinkTheme.SECONDARY }
                >
                    <AboutIcon className={ cls.icon } />
                    <span className={ cls.link }>{ t('links.about_us') }</span>
                </AppLink>
            </div>
            <div className={ cls.switchers }>
                <ThemeSwitcher />
                <LanguageSwitcher short={ collapsed } />
            </div>
        </div>
    );
};
