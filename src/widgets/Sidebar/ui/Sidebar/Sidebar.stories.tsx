import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { Sidebar } from './Sidebar'

export default {
  title: 'widget/Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = args => {
  return <Sidebar {...args} />
}

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]