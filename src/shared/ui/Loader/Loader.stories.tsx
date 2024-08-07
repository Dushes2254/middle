import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { Loader } from './Loader'

export default {
  title: 'shared/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = args => {
  return <Loader {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]