// import React from 'react';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import { AppRoute } from './app-routes';
// import { HomeScreen } from '../screens/HomeScreen';
// import { SettingsIcon, HomeIcon, OrderIcon } from '../shared/icons';

// import { TopTabs } from './top-tabs';

// const TopTab = createMaterialTopTabNavigator();

// export const MainTopNavigator = (): React.ReactElement => (
//     <TopTab.Navigator
//         swipeEnabled={false}
//         tabBar={(props: any) => <TopTabs {...props} />}
//     >
//         {/* <TopTab.Screen
//             name={AppRoute.ORDER_HISTORY}
//             component={OrderHistory}
//             options={{ title: 'Orders', tabBarIcon: OrderIcon }}
//         />
//         <TopTab.Screen
//             name={AppRoute.HOME}
//             component={BeerNavigator}
//             options={{ title: 'Beer', tabBarIcon: HomeIcon }}
//         />
//         <TopTab.Screen
//             name={AppRoute.SETTINGS}
//             component={Settings}
//             options={{ title: 'Settings', tabBarIcon: SettingsIcon }}
//         /> */}
//     </TopTab.Navigator>
// );
