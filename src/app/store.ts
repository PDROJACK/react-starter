import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postSlice';
import userReducer from '../features/userinfo/userSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: { 
    counter: counterReducer,
    post: postReducer,
    user: userReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
