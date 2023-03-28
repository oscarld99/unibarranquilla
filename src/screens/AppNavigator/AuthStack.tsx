/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from '@screens/index';
import { NavigationContainer } from '@react-navigation/native';
import {
    Grades,
    OldGradeDetails,
    OldGrades,
    Schedule,
    VirtualCard
} from '@screens/User/Academics';

const Stack = createNativeStackNavigator();


const AuthStack = () => {

    const isLogged = true

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLogged ? 'Home' : 'Login'}>
                {isLogged &&
                    <Stack.Group>
                        <Stack.Screen
                            component={Home}
                            name="Home"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            component={Grades}
                            name="Grades"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            component={OldGrades}
                            name="OldGrades"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            component={OldGradeDetails}
                            name="OldGradeDetails"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            component={Schedule}
                            name="Shedule"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            component={VirtualCard}
                            name="VirtualCard"
                            options={{ headerShown: false }} />
                    </Stack.Group>
                }
                {!isLogged &&
                    <Stack.Screen
                        component={Login}
                        name="Login"
                        options={{ headerShown: false }}
                    />
                }

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthStack