import { FC } from 'react'
import { Link } from 'react-router-dom'

import './styles/index.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={RoutePath[AppRoutes.MAIN]}>Главная</Link>
      <Link to={RoutePath[AppRoutes.ABOUT]}>О сайте</Link>
      <AppRouter />
    </div>
  )
}
