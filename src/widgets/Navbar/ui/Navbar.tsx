import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation(['main', 'about'])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
          {t('mainPage')}
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to='/about'>
          {t('about', { ns: 'about' })}
        </AppLink>
      </div>
    </div>
  )
}
