import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid='sidebar' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        className={cls.collapsedBtn}
        data-testid='sidebar-toggle'
        type='button'
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('mainPage')}</span>
        </AppLink>
        <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('about')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
