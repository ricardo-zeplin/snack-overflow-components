import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Icon} from '../components/Icon/Icon';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

/**
 * This is the add icon
 */
export const Add: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Add.args = {
  name: 'add',
};

/**
 * This is the bundle icon
 */
export const Bundle: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Bundle.args = {
  name: 'bundle',
};

/**
 * This is the filled check icon
 */
export const Check: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Check.args = {
  name: 'check',
};

/**
 * This is the empty check icon
 */
export const CheckEmpty: ComponentStory<typeof Icon> = args => (
  <Icon {...args} />
);

CheckEmpty.args = {
  name: 'checkEmpty',
};

/**
 * This is the close icon
 */
export const Close: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Close.args = {
  name: 'close',
};

/**
 * This is the create icon
 */
export const Create: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Create.args = {
  name: 'create',
};

/**
 * This is the email icon
 */
export const Email: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Email.args = {
  name: 'email',
};

/**
 * This is the expand right icon
 */
export const ExpandRight: ComponentStory<typeof Icon> = args => (
  <Icon {...args} />
);

ExpandRight.args = {
  name: 'expandRight',
};

/**
 * This is the go back icon
 */
export const GoBack: ComponentStory<typeof Icon> = args => <Icon {...args} />;

GoBack.args = {
  name: 'goBack',
};

/**
 * This is the hide icon
 */
export const Hide: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Hide.args = {
  name: 'hide',
};

/**
 * This is the home icon
 */
export const Home: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Home.args = {
  name: 'home',
};

/**
 * This is the info icon
 */
export const Info: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Info.args = {
  name: 'info',
};

/**
 * This is the loading icon
 */
export const Loading: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Loading.args = {
  name: 'loading',
};

/**
 * This is the location icon
 */
export const Location: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Location.args = {
  name: 'location',
};

/**
 * This is the lock icon
 */
export const Lock: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Lock.args = {
  name: 'lock',
};

/**
 * This is the market icon
 */
export const Market: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Market.args = {
  name: 'market',
};

/**
 * This is the save icon
 */
export const Saved: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Saved.args = {
  name: 'saved',
};

/**
 * This is the search icon
 */
export const Search: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Search.args = {
  name: 'search',
};

/**
 * This is the snack icon
 */
export const Snack: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Snack.args = {
  name: 'snack',
};

/**
 * This is the speed icon
 */
export const Speed: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Speed.args = {
  name: 'speed',
};

/**
 * This is the star icon
 */
export const Star: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Star.args = {
  name: 'star',
};

/**
 * This is the time icon
 */
export const Time: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Time.args = {
  name: 'time',
};

/**
 * This is the to be saved icon
 */
export const ToBeSaved: ComponentStory<typeof Icon> = args => (
  <Icon {...args} />
);

ToBeSaved.args = {
  name: 'toBeSaved',
};

/**
 * This is the tokens icon
 */
export const Tokens: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Tokens.args = {
  name: 'tokens',
};

/**
 * This is the user icon
 */
export const User: ComponentStory<typeof Icon> = args => <Icon {...args} />;

User.args = {
  name: 'user',
};

/**
 * This is the warning icon
 */
export const Warning: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Warning.args = {
  name: 'warning',
};

/**
 * This is the wishlist icon
 */
export const Wishlist: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Wishlist.args = {
  name: 'wishlist',
};
