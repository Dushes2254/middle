import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('unexpectedError')}</p>
      <button onClick={reload} type='button'>
        {t('reloadPage')}
      </button>
    </div>
  )
}
