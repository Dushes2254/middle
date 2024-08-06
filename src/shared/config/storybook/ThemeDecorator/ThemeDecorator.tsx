import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { Theme } from 'app/providers/themeProvider'

export const ThemeDecorator = (theme: Theme) => {
  return (StoryComponent: Story) => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    )
  }
}
