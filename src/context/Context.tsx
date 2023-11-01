import React, { createContext, useContext } from 'react';
import { useNavigation as useReactNavigation } from '@react-navigation/native';

const Context = createContext({});

type Provider = {
    children: React.ReactNode;
}

export const ContextProvider = ({ children }: Provider) => {

    const actions = {

    }

    const state = {

    }

  return (
    <Context.Provider value={{ ...actions, ...state }}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => {
  return useContext(Context);
};
