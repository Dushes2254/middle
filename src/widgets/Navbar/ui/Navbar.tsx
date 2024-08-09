/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} type='button' className={cls.links} onClick={onToggleModal}>
        {t('enter')}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae architecto autem esse a beatae,
        tempore nisi suscipit odit soluta fugit id nobis pariatur facilis, perferendis magnam! At, dicta quasi.
      </Modal>
    </div>
  );
};
