import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: VoidFunction;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={classNames(cls.loginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
    <LoginForm />
  </Modal>
);
