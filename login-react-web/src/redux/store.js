import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { useReducer } from "react";

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };
  const rootReducer = combineReducers({auth: authReducer});
  const persistedReducer = persistReducer(persistConfig, rootReducer);


// export default configureStore({
//     reducer:{
//         auth: authReducer
//     }
// })

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
  });
  
export let persistor = persistStore(store);