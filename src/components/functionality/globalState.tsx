import React, { createContext, useReducer, useContext} from 'react';
import {reducer} from './reducer';


const initialState = false;

const GlobalStateContext: React.Context<any> = createContext<{ state: any; dispatch: any }>({
  state: initialState,
  dispatch: () => null,
});

export const GlobalStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);