/* eslint-disable prettier/prettier */
export interface Action<T> {
  type: string;
  payload?: T;
}

export interface DefaultValueAuth {
  userName: string
  name: string
  lastName: string
  email: string
  token: string | null
  signIn: (credentials: SigninProps) => void,
  signOut: () => void
}

export interface SigninProps {
  userName: string;
  password: string;
}