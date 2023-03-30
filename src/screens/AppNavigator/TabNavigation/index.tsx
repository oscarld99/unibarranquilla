/* eslint-disable prettier/prettier */
import * as React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { News, Programs, Tab2, User } from '@screens/index';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Book, Location, News as NewsIcon, User as UserIcon } from '@components/icons';
import Radio from '@components/icons/radio';
import Menu from '@components/Menu';

const Tab = createBottomTabNavigator();

const tabScreensOptions = ({ route }: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}): BottomTabNavigationOptions => ({
    tabBarIcon: () => {
        switch (route.name) {
            case 'Noticias':
                return <NewsIcon />
            case 'Programas':
                return <Book />
            case 'Estudiante':
                return <UserIcon />
            case 'Map':
                return <Location />
            case 'Emisora':
                return <Radio />
            default:
                return <Book />
        }
    },
    header: () => <Menu tittle={route.name} />
})

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={tabScreensOptions} >
            <Tab.Screen name="Programas" component={Programs} />
            <Tab.Screen name="Map" component={Tab2} />
            <Tab.Screen name="Noticias" component={News} />
            <Tab.Screen name="Emisora" component={Tab2} />
            <Tab.Screen name="Estudiante" component={User} />
        </Tab.Navigator>
    );
}

export default TabNavigation