import React from 'react';
import {ComponentStory, Meta} from '@storybook/react';

import {Button} from '../components/Button';
import {Icon} from '../components/Icon/Icon';

export default {
  title: 'Button',
  component: Button,
  subcomponents: {Icon},
} as Meta;

/**
 * This is a primary button with an icon in enabled state
 */
export const PrimaryHasIconEnabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

PrimaryHasIconEnabled.args = {
  text: 'Primary button with icon',
  icon: 'market',
  primary: true,
};

/**
 * This is a primary button without an icon in enabled state
 */
export const PrimaryNoIconEnabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

PrimaryNoIconEnabled.args = {
  text: 'Primary button without icon',
  primary: true,
};

/**
 * This is a primary button with an icon in disabled state
 */
export const PrimaryHasIconDisabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

PrimaryHasIconDisabled.args = {
  text: 'Primary button with icon',
  icon: 'market',
  primary: true,
  disabled: true,
};

/**
 * This is a primary button without an icon in disabled state
 */
export const PrimaryNoIconDisabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

PrimaryNoIconDisabled.args = {
  text: 'Primary button without icon',
  primary: true,
  disabled: true,
};

/**
 * This is a secondary button with an icon in enabled state
 */
export const SecondaryHasIconEnabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

SecondaryHasIconEnabled.args = {
  text: 'Secondary button with icon',
  icon: 'market',
  primary: false,
};

/**
 * This is a secondary button without an icon in enabled state
 */
export const SecondaryNoIconEnabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

SecondaryNoIconEnabled.args = {
  text: 'Secondary button without icon',
  primary: false,
};

/**
 * This is a secondary button with an icon in disabled state
 */
export const SecondaryHasIconDisabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

SecondaryHasIconDisabled.args = {
  text: 'Secondary button with icon',
  icon: 'market',
  primary: false,
  disabled: true,
};

/**
 * This is a secondary button without an icon in disabled state
 */
export const SecondaryNoIconDisabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

SecondaryNoIconDisabled.args = {
  text: 'Secondary button without icon',
  primary: false,
  disabled: true,
};
