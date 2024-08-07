import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { PageError } from './PageError'

export default {
  title: 'widget/PageError',
  component: PageError
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = args => {
  return <PageError {...args} />
}

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
