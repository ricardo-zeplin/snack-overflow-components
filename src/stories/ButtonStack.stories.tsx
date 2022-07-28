import React from 'react';
import {ComponentStory, Meta} from '@storybook/react';

import {ButtonStack} from '../components/ButtonStack';
import {Icon} from '../components/Icon/Icon';
import {Button} from '../components/Button';

export default {
  title: 'Button Stack',
  component: ButtonStack,
  subcomponents: {Icon, Button},
} as Meta;

/**
 * This is a button stack with buttons on top of each other
 */
export const Normal: ComponentStory<typeof ButtonStack> = args => (
  <ButtonStack {...args} />
);

Normal.args = {
  primaryText: 'Primary',
  secondaryText: 'Secondary',
};

/**
 * This is a button stack with buttons side by side
 */
export const SideBySide: ComponentStory<typeof ButtonStack> = args => (
  <ButtonStack {...args} />
);

SideBySide.args = {
  primaryText: 'Primary',
  secondaryText: 'Secondary',
  sideBySide: true,
};
