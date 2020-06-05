import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import MatBarIcon from '../components/MatBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import InboxScreen from '../screens/InboxScreen';
import LibraryScreen from '../screens/LibraryScreen';

const config = Platform.select({
  web: { headerMode: 'none', header: null},
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
  tabBarOptions: { 
    activeTintColor: "#ff0000",
    inactiveTintColor: '#454545',
  },
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

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  header: null,
  tabBarLabel: 'Explore',
  tabBarOptions: { 
    activeTintColor: "#ff0000",
    inactiveTintColor: '#454545',
  },
  tabBarIcon: ({ focused }) => (
    <MatBarIcon  focused={focused} name={Platform.OS === 'ios' ? 'explore' : 'md-link'} />
  ),
};

ExploreStack.path = '';

const SubscriptionStack = createStackNavigator(
  {
    Subscription: SubscriptionScreen,
  },
  config
);

SubscriptionStack.navigationOptions = {
  tabBarLabel: 'Subscription',
  tabBarOptions: { 
    activeTintColor: "#ff0000",
    inactiveTintColor: '#454545',
  },
  tabBarIcon: ({ focused }) => (
    <MatBarIcon focused={focused} name={Platform.OS === 'ios' ? 'subscriptions' : 'md-options'} />
  ),
};

SubscriptionStack.path = '';

const InboxStack = createStackNavigator(
  {
    Inbox: InboxScreen,
  },
  config
);

InboxStack.navigationOptions = {
  tabBarLabel: 'Inbox',
  tabBarOptions: { 
    activeTintColor: "#ff0000",
    inactiveTintColor: '#454545',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'md-mail' : 'md-mail'} />
  ),
};

InboxStack.path = '';

const LibraryStack = createStackNavigator(
  {
    Library: LibraryScreen    ,
  },
  config
);

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarOptions: { 
    activeTintColor: "#ff0000",
    inactiveTintColor: '#454545',
  },
  tabBarIcon: ({ focused }) => (
    <MatBarIcon focused={focused} name={Platform.OS === 'ios' ? 'video-library' : 'md-options'} />
  ),
};

LibraryStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  SubscriptionStack,
  InboxStack,
  LibraryStack,
});

tabNavigator.path = '';

export default tabNavigator;
