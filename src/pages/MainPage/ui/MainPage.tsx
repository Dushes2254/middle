import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('mainPage')}
    </div>
  );
}

export default MainPage;
