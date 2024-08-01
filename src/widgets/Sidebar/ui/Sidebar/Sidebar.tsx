import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(prev => {
      return !prev
    })
  }

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type='button' onClick={onToggle}>
        {t('language')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
