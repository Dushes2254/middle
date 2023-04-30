import { useContext } from 'react'
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

interface UseThemeProps {
  theme: Theme
  toggleTheme: VoidFunction
}

export const useTheme = (): UseThemeProps => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
