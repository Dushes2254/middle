import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

type StateType = DeepPartial<StateSchema>;

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
};

export const StoreDecorator = (state: StateType, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
  (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
