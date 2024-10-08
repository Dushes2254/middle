import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'mainPage'
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'about'
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'profile'
  }
];
