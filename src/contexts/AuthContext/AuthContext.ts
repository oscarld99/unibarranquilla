/* eslint-disable prettier/prettier */
import React from 'react';
import { ACTION_SIGN_IN, ACTION_SIGN_OUT, AUTH_RESPONSES } from '@Constants/Contexts/AuthContext';
import { Action, DefaultValueAuth, SigninProps } from '@interfaces/Contexts.interface';
import CreateOwnContext from '../CreateOwnContext';

const defaultState: DefaultValueAuth = {
  email: '',
  lastName: '',
  name: '',
  token: null,
  userName: '',
  signIn: () => { },
  signOut: () => { }
}

const authReducer = (state: DefaultValueAuth, action: Action<any>): DefaultValueAuth => {
  switch (action.type) {
    case ACTION_SIGN_OUT:
      return defaultState;
    case ACTION_SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const validCredentials = (credentials: SigninProps): boolean => {
  if (credentials.userName === '1234' && credentials.password === '1234')
    return true
  return false

}

const signIn = (dispatch: React.Dispatch<Action<SigninProps>>) => {
  return (credentials: SigninProps) => {
    // Hacer el login y resolver los datos al dispatch
    const isValid = validCredentials(credentials)
    if (isValid) {
      dispatch({
        type: ACTION_SIGN_IN,
        payload: credentials
      });
      return AUTH_RESPONSES.success
    }
    throw AUTH_RESPONSES.error_invalid
  };
};

const signOut = (dispatch: React.Dispatch<Action<undefined>>) => {
  return () => {
    dispatch({ type: ACTION_SIGN_OUT });
  };
};


export const { Context, Provider } = CreateOwnContext({
  action: { signIn, signOut },
  defaultValue: defaultState,
  reducer: authReducer
})

export default authReducer;
