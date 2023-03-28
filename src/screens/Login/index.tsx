/* eslint-disable prettier/prettier */
import React, { useState, useContext, useRef, LegacyRef } from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from 'react-native';
import { AuthContext } from '@contexts/AuthContext'
import styles from './Login.styles'
import { AUTH_RESPONSES } from '@Constants/Contexts/AuthContext';
//import { InputText } from '@components/index';

const imgLogin = require('@assets/images/logo__unibarranquilla__itsa.png');

interface LoginButon extends TouchableOpacityProps {
    text: string
}

const LoginButon = ({
    text,
    onPress
}: LoginButon) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.login__button}>
            <Text style={styles.login__buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const Signin = ({ navigation }: { navigation: any }): React.ReactElement => {
    const passwordInputRef: LegacyRef<TextInput> = useRef(null)
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(AuthContext);

    const login = () => {
        const response = signIn({ userName, password }) as unknown as string;
        switch (response) {
            case AUTH_RESPONSES.success:
                navigation.navigate('Home')
                break;
            case AUTH_RESPONSES.error_invalid:
            default:
                console.log('Credenciales incorrectas')
                break;
        }

    }

    return (
        <View style={styles.login__body}>
            <View >
                <Image
                    alt='logo__unibarranquilla__itsa'
                    source={imgLogin}
                    style={styles.login__img}
                />
            </View>
            <View style={styles.login__form}>
                <View style={styles.login__input__view}>
                    <TextInput
                        keyboardType='default'
                        placeholder="Usuario"
                        onChangeText={setUserName}
                        style={styles.login__textInput}
                        value={userName}
                        blurOnSubmit={false}
                        onSubmitEditing={() => passwordInputRef.current?.focus()}
                    />
                </View>
                <View style={styles.login__input__view}>
                    <TextInput
                        onChangeText={setPassword}
                        placeholder="Contraseña"
                        style={styles.login__textInput}
                        value={password}
                        textContentType='password'
                        ref={passwordInputRef}
                        blurOnSubmit={false}
                        onSubmitEditing={login}
                    />
                </View>
                <View style={styles.login__button}>
                    <LoginButon
                        disabled={userName.trim() === '' || password.trim() === ''}
                        onPress={login}
                        text="INGRESAR"
                        accessibilityLabel="Da click aqui para ingresar"
                    />
                </View>
            </View>
        </View >
    );
};


export default Signin;