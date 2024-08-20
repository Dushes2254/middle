import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer
};

function ProfilePage() {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t('profilePage')}</div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
