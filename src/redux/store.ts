import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "rootPersist",
  storage,
};

const rootReducer = combineReducers({ bookSlice });
const reduxPersistReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: {
    reduxPersistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
