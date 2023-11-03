import React, { createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Context = createContext<ContextType | any>({});

type Provider = {
  children: React.ReactNode;
}

type ContextType = {
  navigate: (name: string, params?: any) => void;
  goBack: () => void;
}

export const ContextProvider = ({ children }: Provider) => {
  const navigationRef = React.useRef<any>();

  const navigate = (name: string, params?: any) => {
    navigationRef.current?.navigate(name, params);
  };

  const goBack = () => {
    navigationRef.current?.goBack();
  };

  const actions = {
    navigate,
    goBack
  }

  const state = {

  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Context.Provider value={{ ...actions, ...state }}>
        {children}
      </Context.Provider>
    </NavigationContainer>
  );
};

export const useContextProvider = () => {
  return useContext<ContextType>(Context);
};
