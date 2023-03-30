/* eslint-disable prettier/prettier */
import React from 'react';
import { ACTION_SIGN_IN, ACTION_SIGN_OUT, AUTH_RESPONSES } from '@Constants/Contexts/AuthContext';
import { Action, DefaultValueAuth, SigninProps } from '@interfaces/Contexts.interface';
import CreateOwnContext from '../CreateOwnContext';
import { users } from '__mocks__';
import { IUsers } from '@interfaces/data/user.interface';

const defaultState: DefaultValueAuth = {
  id: '',
  password: '',
  userName: '',
  email: '',
  lastName: '',
  name: '',
  token: null,
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
        ...action.payload
      };
    default:
      return state;
  }
};

const validCredentials = (credentials: SigninProps): boolean | IUsers => {
  const user = users.find(({ id, userName }) => id === credentials.userName || userName === credentials.userName)
  if (user && user.password === credentials.password)
    return user
  return false
}

const signIn = (dispatch: React.Dispatch<Action<any>>) => {
  return (credentials: SigninProps) => {
    // Hacer el login y resolver los datos al dispatch
    const isValid = validCredentials(credentials)
    if (isValid) {
      dispatch({
        type: ACTION_SIGN_IN,
        payload: isValid
      });
      return AUTH_RESPONSES.success
    }
    return AUTH_RESPONSES.error_invalid
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
