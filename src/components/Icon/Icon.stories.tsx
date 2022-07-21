import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Icon} from './Icon';

export default {
  title: 'components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Basic: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Basic.args = {
  name: 'add',
};
