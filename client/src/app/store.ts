import { configureStore } from "@reduxjs/toolkit";

import { adsApi } from "@/entities/adsApi";
import { authApi } from "@/entities/authApi";
import { usersApi } from "@/entities/usersApi";

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([adsApi.middleware, usersApi.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
