import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducesManager = createReducerManager(rootReducer);

  const extraArgument: ThunkExtraArg = {
    api: $api,
    navigate
  };

  const store = configureStore({
    reducer: reducesManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument
        }
      })
  });

  // @ts-ignore
  store.reducerManager = reducesManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
