import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducesManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducesManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });

  // @ts-ignore
  store.reducerManager = reducesManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
