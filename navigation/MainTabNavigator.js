import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'? "ios-home" : "md:home"
      }
    />
  ),
};

HomeStack.path = '';

const TrendStack = createStackNavigator(
  {
    Trend: LinksScreen,
  },
  config
);

TrendStack.navigationOptions = {
  tabBarLabel: 'Trending',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon  focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

TrendStack.path = '';

const SubscriptionStack = createStackNavigator(
  {
    Subscription: SettingsScreen,
  },
  config
);

SubscriptionStack.navigationOptions = {
  tabBarLabel: 'Subscription',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SubscriptionStack.path = '';

const InboxStack = createStackNavigator(
  {
    Inbox: SettingsScreen,
  },
  config
);

InboxStack.navigationOptions = {
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'} />
  ),
};

InboxStack.path = '';

const LibraryStack = createStackNavigator(
  {
    Library: SettingsScreen,
  },
  config
);

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

LibraryStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TrendStack,
  SubscriptionStack,
  InboxStack,
  LibraryStack,
});

tabNavigator.path = '';

export default tabNavigator;
