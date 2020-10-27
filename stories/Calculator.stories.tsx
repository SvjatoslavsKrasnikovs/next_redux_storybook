import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';

import {CalculatorCanvas} from '../components/CalculatorCanvas/CalculatorCanvas'


export default {
  title: '/Calculator/Calculator',
  component: CalculatorCanvas,
} as Meta;

const Template: Story = (args) => <CalculatorCanvas {...args} />;

export const Default = Template.bind({});