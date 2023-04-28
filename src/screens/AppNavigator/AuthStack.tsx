/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Contacts, Home, Login, NewsDetail } from '@screens/index';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import {
    Grades,
    OldGradeDetails,
    OldGrades,
    Schedule,
    VirtualCard
} from '@screens/User/Academics';
import { Header } from '@components/ui';
import { AuthContext } from '@contexts/AuthContext';
import FormPQR from '@screens/User/PQR/FormPQR';
import { Monitoring, MonitoringAvailible, Sports } from '@screens/User/Wellness';

const Stack = createNativeStackNavigator();

const stackOptions = ({ route }: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}): NativeStackNavigationOptions => ({
    headerShown: route.name !== 'Noticias',
    header: () => <Header tittle={route.name} />
})


const AuthStack = () => {

    const authContext = React.useContext(AuthContext)

    const isLogged = authContext?.token

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLogged ? 'Noticias' : 'Login'}>
                <Stack.Group screenOptions={stackOptions}>
                    <Stack.Screen
                        component={Contacts}
                        name="Contactos" />
                    <Stack.Screen
                        component={Home}
                        name="Noticias" />
                    <Stack.Screen
                        component={NewsDetail}
                        name="Detalle de noticias" />
                    <Stack.Screen
                        component={Grades}
                        name="Notas Actuales" />
                    <Stack.Screen
                        component={OldGrades}
                        name="Notas Historicas" />
                    <Stack.Screen
                        component={OldGradeDetails}
                        name="Detalle de notas" />
                    <Stack.Screen
                        component={Schedule}
                        name="Horario" />
                    <Stack.Screen
                        component={VirtualCard}
                        name="Carnet Virtual" />
                    <Stack.Screen
                        component={Monitoring}
                        name="Mis monitorias" />
                    <Stack.Screen
                        component={MonitoringAvailible}
                        name="Monitorias disponibles" />
                    <Stack.Screen
                        component={Sports}
                        name="Deportes" />
                    <Stack.Screen
                        component={FormPQR}
                        name="Peticiones, Quejas y reclamos" />
                </Stack.Group>
                <Stack.Screen
                    component={Login}
                    name="Login"
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthStack