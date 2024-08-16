import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('authorizationForm')} />
      {error && <Text text={t('wrongLoginData')} theme={TextTheme.ERROR} />}
      <Input onChange={onChangeUsername} placeholder={t('enterUsername')} autoFocus value={username} />
      <Input onChange={onChangePassword} placeholder={t('enterPassword')} value={password} />
      <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
        {t('enter')}
      </Button>
    </div>
  );
});
