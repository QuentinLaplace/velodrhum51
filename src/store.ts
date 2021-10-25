import { createStore } from '@reduxjs/toolkit';
import reducers from './reducer';

export const store = createStore(reducers, 
  { 
    avatar: { 
      name: null,
      img: null
    } 
  });

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
export const removeStoreLogger = store.subscribe(() =>
    console.log('State after dispatch: ', store.getState())
);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch