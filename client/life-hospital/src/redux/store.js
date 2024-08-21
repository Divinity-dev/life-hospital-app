import { configureStore } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';
import userReducer from "../redux/userSlice"
import likeReducer from './likeSlice';
import bookingReducer from "./bookingSlice"

const userPersistor = {
    key:"user",
    storage,
}
const likePersistor = {
  key:"like",
  storage,
}
const bookingPersistor = {
  key:"booking",
  storage,
}

const persistedUserReducer = persistReducer(userPersistor, userReducer);
const persistedLikeReducer = persistReducer(likePersistor, likeReducer);
const persistedBookingReducer = persistReducer(bookingPersistor, bookingReducer );

export const store = configureStore({
    reducer: {
      user: persistedUserReducer,
      like:persistedLikeReducer,
      booking:persistedBookingReducer
    },
    
  });
  
  export const persistor = persistStore(store);