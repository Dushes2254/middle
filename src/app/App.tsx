import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/themeProvider'
import { AppRouter } from 'app/providers/router'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>
      <AppRouter />
    </div>
  )
}
