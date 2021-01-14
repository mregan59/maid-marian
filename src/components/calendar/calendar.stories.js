// components/Task.stories.js
import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ThemedCalendar as Calendar } from './calendar.styles';
export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
};
storiesOf('Calendar', module)
  .addDecorator(story => <View >{story()}</View>)
  .add('default', () => <Calendar/>)