// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import BottomTabNavigator from './navigation/BottomTabNavigator';

// const Stack = createStackNavigator();

// function App() {
//     return (
//         <NavigationContainer>
//             <BottomTabNavigator></BottomTabNavigator>
//         </NavigationContainer>
//     );
// }

// export default App;

import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import {
    ApplicationProvider,
    Layout,
    Button,
    Icon,
    IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as lightTheme } from './src/shared/light.json'; // <-- Import app theme
import { default as darkTheme } from './src/shared/dark.json'; // <-- Import app theme
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Loading } from './src/loading';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/app.navigator';
import { AppRoute } from './src/navigation/app-routes';

const FacebookIcon = (props: any) => <Icon name="facebook" {...props} />;

export const LoginButton = () => (
    <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
);
// customMapping={...mapping}
export default () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [initialRoute, setInitialRoute] = useState(AppRoute.HOME);

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider
                {...eva}
                theme={
                    isDarkTheme
                        ? { ...eva.dark, ...darkTheme }
                        : { ...eva.light, ...lightTheme }
                }
            >
                <SafeAreaProvider>
                    {initialRoute ? (
                        <NavigationContainer>
                            <AppNavigator />
                        </NavigationContainer>
                    ) : (
                            <Loading></Loading>
                        )}
                </SafeAreaProvider>

            </ApplicationProvider>
        </>
    );
};
