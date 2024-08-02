import { configureStore } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';
import userReducer from "../redux/userSlice"
import likeReducer from './likeSlice';

const userPersistor = {
    key:"user",
    storage,
}
const likePersistor = {
  key:"like",
  storage,
}

const persistedUserReducer = persistReducer(userPersistor, userReducer);
const persistedLikeReducer = persistReducer(likePersistor, likeReducer);

export const store = configureStore({
    reducer: {
      user: persistedUserReducer,
      like:persistedLikeReducer
    },
    
  });
  
  export const persistor = persistStore(store);