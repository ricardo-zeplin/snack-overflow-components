import React from 'react';
import {ComponentStory, Meta} from '@storybook/react';

import {ButtonStack} from '../components/ButtonStack/ButtonStack';
import {Icon} from '../components/Icon/Icon';
import {Button} from '../components/Button/Button';

export default {
  title: 'components/Button Stack',
  component: ButtonStack,
  subcomponents: {Icon, Button},
} as Meta;

export const Basic: ComponentStory<typeof ButtonStack> = args => (
  <ButtonStack {...args} />
);

Basic.args = {
  primaryText: 'Primary',
  secondaryText: 'Secondary',
};
