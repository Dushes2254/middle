import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ThemeButton } from './Button'

export default {
  title: 'shared/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => {
  return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Button',
  theme: ThemeButton.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE
}
