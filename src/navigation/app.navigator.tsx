import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { HomeScreen } from '../screens/HomeScreen';
import { LinksScreen } from '../screens/LinksScreen';
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
    [AppRoute.HOME]: undefined;
    [AppRoute.STORIES]: undefined;
    [AppRoute.DETAILS]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
    props: Partial<StackNavigatorProps>
): React.ReactElement => (
    <Stack.Navigator {...props} headerMode="none">
        <Stack.Screen name={AppRoute.HOME} component={HomeScreen} />
        <Stack.Screen name={AppRoute.STORIES} component={LinksScreen} />
        <Stack.Screen name={AppRoute.DETAILS} component={LinksScreen} />
    </Stack.Navigator>
);
