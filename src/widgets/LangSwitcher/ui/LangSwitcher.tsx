import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './LangSwitcher.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleLang} className={classNames(cls.langSwitcher, {}, [className])}>
      {t('Language')}
    </Button>
  )
}