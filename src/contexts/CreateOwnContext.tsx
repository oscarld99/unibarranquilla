/* eslint-disable prettier/prettier */
import React, { ReactNode, useReducer } from 'react';

interface createAuthContextProps<T> {
  action: any;
  defaultValue: T;
  reducer: any;
}

type createAuthContextType<T> = {
  Context: React.Context<T>;
  Provider: ({ children }: {
    children: ReactNode;
  }) => JSX.Element;
}

const createAuthContext = <T extends unknown>({
  action,
  defaultValue,
  reducer
}: createAuthContextProps<T>): createAuthContextType<T> => {

  const Context = React.createContext(defaultValue);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: any = {};

    for (let key in action) {
      boundActions[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )

  }

  return { Context: Context, Provider: Provider }

}

export default createAuthContext