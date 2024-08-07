import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

export default {
  title: 'pages/MainPage',
  component: MainPage
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => {
  return <MainPage />
}

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
