import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Icon} from '../components/Icon/Icon';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Add: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Add.args = {
  name: 'add',
};

export const Bundle: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Bundle.args = {
  name: 'bundle',
};

export const Check: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Check.args = {
  name: 'check',
};

export const CheckEmpty: ComponentStory<typeof Icon> = args => (
  <Icon {...args} />
);

CheckEmpty.args = {
  name: 'checkEmpty',
};

export const Close: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Close.args = {
  name: 'close',
};

export const Create: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Create.args = {
  name: 'create',
};

export const Email: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Email.args = {
  name: 'email',
};

export const ExpandRight: ComponentStory<typeof Icon> = args => (
  <Icon {...args} />
);

ExpandRight.args = {
  name: 'expandRight',
};

export const GoBack: ComponentStory<typeof Icon> = args => <Icon {...args} />;

GoBack.args = {
  name: 'goBack',
};

export const Hide: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Hide.args = {
  name: 'hide',
};

export const Home: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Home.args = {
  name: 'home',
};

export const Info: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Info.args = {
  name: 'info',
};

export const Loading: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Loading.args = {
  name: 'loading',
};

export const Location: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Location.args = {
  name: 'location',
};

export const Lock: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Lock.args = {
  name: 'lock',
};

export const Market: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Market.args = {
  name: 'market',
};

export const Saved: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Saved.args = {
  name: 'saved',
};

export const Search: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Search.args = {
  name: 'search',
};

export const Snack: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Snack.args = {
  name: 'snack',
};

export const Speed: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Speed.args = {
  name: 'speed',
};

export const Star: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Star.args = {
  name: 'star',
};

export const Time: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Time.args = {
  name: 'time',
};

export const ToBeSaved: ComponentStory<typeof Icon> = args => (
  <Icon {...args} />
);

ToBeSaved.args = {
  name: 'toBeSaved',
};

export const Tokens: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Tokens.args = {
  name: 'tokens',
};

export const User: ComponentStory<typeof Icon> = args => <Icon {...args} />;

User.args = {
  name: 'user',
};

export const Warning: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Warning.args = {
  name: 'warning',
};

export const Wishlist: ComponentStory<typeof Icon> = args => <Icon {...args} />;

Wishlist.args = {
  name: 'wishlist',
};
