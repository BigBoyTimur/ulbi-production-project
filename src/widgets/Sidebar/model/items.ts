import { RoutePath, AppRoutes } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        text: 'links.main',
        icon: MainIcon,
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        text: 'links.about_us',
        icon: AboutIcon,
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        text: 'links.profile',
        icon: ProfileIcon,
    },
];
