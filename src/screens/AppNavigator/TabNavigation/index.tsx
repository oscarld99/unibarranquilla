/* eslint-disable prettier/prettier */
import * as React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Location,
    News,
    Programs,
    Radio,
    User
} from '@screens/index';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
    Book,
    Location as LocationIcon,
    News as NewsIcon,
    User as UserIcon
} from '@components/icons';
import RadioIcon from '@components/icons/radio';
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
                return <LocationIcon />
            case 'Emisora':
                return <RadioIcon />
            default:
                return <Book />
        }
    },
    header: () => <Menu tittle={route.name} />
})

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={tabScreensOptions} initialRouteName='Noticias'>
            <Tab.Screen name="Programas" component={Programs} />
            <Tab.Screen name="Map" component={Location} />
            <Tab.Screen name="Noticias" component={News} />
            <Tab.Screen name="Emisora" component={Radio} />
            <Tab.Screen name="Estudiante" component={User} />
        </Tab.Navigator>
    );
}

export default TabNavigation