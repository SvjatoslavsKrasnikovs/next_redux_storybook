import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';

import { Button, Props } from '../components/CalculatorCanvas/UI/Button'

export default {
  title: '/Calculator/UI/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Number = Template.bind({});
Number.args = {
  number: true,
  label: '1',
};

export const Action = Template.bind({});
Action.args = {
  number: false,
  label: '+',
};