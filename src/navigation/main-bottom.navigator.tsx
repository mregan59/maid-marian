import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRoute } from './app-routes';
import { HomeScreen } from '../screens/HomeScreen';
import { LinksScreen } from '../screens/LinksScreen';
import { LayoutIcon, PersonIcon, PlusIcon, HomeIcon } from '../shared/icons';
import { BottomTabs } from './bottom-tabs';

const BottomTab = createBottomTabNavigator();

export const MainBottomNavigator = (): React.ReactElement => (
    <BottomTab.Navigator tabBar={props => <BottomTabs {...props} />}>
        <BottomTab.Screen
            name={AppRoute.HOME}
            component={HomeScreen}
            options={{ title: 'Home', tabBarIcon: HomeIcon }}
        />
        <BottomTab.Screen
            name={AppRoute.STORIES}
            component={LinksScreen}
            options={{ title: 'Stories', tabBarIcon: PlusIcon }}
        />
    </BottomTab.Navigator>
);
