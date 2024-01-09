import {configureStore} from '@reduxjs/toolkit';


import { reducer } from '@/components/functionality/reducer';

export const makeStore = () => {
  return configureStore({
    reducer: reducer
    // reducer: {
    //   modalReducer: reducer
    // }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];