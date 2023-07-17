import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('unknownError')}</p>
      <Button onClick={reloadPage}>{t('updatePage')}</Button>
    </div>
  )
}
