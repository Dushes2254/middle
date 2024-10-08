import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Description description description description description description'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Description description description description description description'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title'
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description description description description description description'
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description description description description description description'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Description description description description description description',
  theme: TextTheme.ERROR
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title',
  text: 'Description description description description description description',
  theme: TextTheme.ERROR
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
