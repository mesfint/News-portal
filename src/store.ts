// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './features/articles/articlesSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

//It is important to note that the RootState type 
//is generated using the ReturnType utility type.
// This utility type is used to extract the return type of a function type.
// In this case, the RootState type is generated by extracting 
//the return type of the store.getState() method.
// The AppDispatch type is generated using the typeof operator to extract 
//the type of the store.dispatch method. 
//These types are then exported for use in other parts of the application.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
