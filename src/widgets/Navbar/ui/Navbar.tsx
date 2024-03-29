/* eslint-disable i18next/no-literal-string */
import { FC } from 'react'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.MAIN]} className={cls.mainLink}>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.ABOUT]}>
        О сайте
      </AppLink>
    </div>
  </div>
)
