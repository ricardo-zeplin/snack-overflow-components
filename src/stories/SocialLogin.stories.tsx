import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SocialLogin} from '../components/SocialLogin/SocialLogin';

export default {
  title: 'Social Login',
  component: SocialLogin,
} as ComponentMeta<typeof SocialLogin>;

/**
 * This is the Social Login button stack
 */
export const Basic: ComponentStory<typeof SocialLogin> = () => <SocialLogin />;
