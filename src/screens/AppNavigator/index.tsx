/* eslint-disable prettier/prettier */
import * as React from "react";
import { AuthContextProvider } from '@contexts/AuthContext';
import AuthStack from "./AuthStack";

const AppNavigator = () => {
  return (
    <AuthContextProvider>
      <AuthStack />
    </AuthContextProvider>
  )
}



export default AppNavigator