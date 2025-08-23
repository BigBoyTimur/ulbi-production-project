import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Mainicon from 'shared/assets/icons/main-20-20.svg';
import Abouticon from 'shared/assets/icons/about-20-20.svg';
import Profileicon from 'shared/assets/icons/profile-20-20.svg';
import Articleicon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                icon: Mainicon,
                text: 'links.main',
            },
            {
                path: RoutePath.about,
                icon: Abouticon,
                text: 'links.about_us',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    icon: Profileicon,
                    text: 'links.profile',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    icon: Articleicon,
                    text: 'links.articles',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
