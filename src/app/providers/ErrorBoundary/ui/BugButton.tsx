import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button/Button'

// component for tests
export const BugButton = () => {
  const [error, setError] = useState(false)

  const { t } = useTranslation()

  const onThrow = () => {
    return setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return <Button onClick={onThrow}>{t('error')}</Button>
}
