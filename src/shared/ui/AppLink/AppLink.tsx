import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...props }) => {
  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...props}>
      {children}
    </Link>
  )
}
