import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

const ANIMATION_DELAY = 300;

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: VoidFunction;
}

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
