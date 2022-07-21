import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button} from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

Basic.args = {
  text: 'This is a button',
};

export const PrimaryHasIconEnabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

PrimaryHasIconEnabled.args = {
  text: 'Primary button with icon',
  icon: 'market',
  primary: true,
};

export const PrimaryNoIconEnabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

PrimaryNoIconEnabled.args = {
  text: 'Primary button without icon',
  primary: true,
};

export const PrimaryHasIconDisabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

PrimaryHasIconDisabled.args = {
  text: 'Primary button with icon',
  icon: 'market',
  primary: true,
  disabled: true,
};

export const PrimaryNoIconDisabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

PrimaryNoIconDisabled.args = {
  text: 'Primary button without icon',
  primary: true,
  disabled: true,
};

export const SecondaryHasIconEnabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

SecondaryHasIconEnabled.args = {
  text: 'Secondary button with icon',
  icon: 'market',
  primary: false,
};

export const SecondaryNoIconEnabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

SecondaryNoIconEnabled.args = {
  text: 'Secondary button without icon',
  primary: false,
};

export const SecondaryHasIconDisabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

SecondaryHasIconDisabled.args = {
  text: 'Secondary button with icon',
  icon: 'market',
  primary: false,
  disabled: true,
};

export const SecondaryNoIconDisabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

SecondaryNoIconDisabled.args = {
  text: 'Secondary button without icon',
  primary: false,
  disabled: true,
};
