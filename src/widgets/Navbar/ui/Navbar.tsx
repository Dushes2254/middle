import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('enter')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
    </div>
  );
};
