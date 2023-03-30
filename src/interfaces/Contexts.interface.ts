import { IUsers } from "./data/user.interface";

/* eslint-disable prettier/prettier */
export interface Action<T> {
  type: string;
  payload?: T;
}

export interface DefaultValueAuth extends IUsers {
  token: string | null
  signIn: (credentials: SigninProps) => void,
  signOut: () => void
}

export interface SigninProps {
  userName: string;
  password: string;
}

export interface DefaultValueMenuContext {
  activeScreen: string
  arrowBack: boolean
  open: boolean
  paramsActiveScreen: { [x: string]: any }
  prevScreen: string
  state?: DefaultValueMenuContext
  onBack: () => void
  onChangeScreen: (screen: string) => void
  onTouchMenu: () => void
}