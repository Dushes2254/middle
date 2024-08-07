import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import AboutPage from './AboutPage'

export default {
  title: 'pages/AboutPage',
  component: AboutPage
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => {
  return <AboutPage />
}

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]