import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = args => {
  return <ThemeSwitcher {...args} />
}

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]