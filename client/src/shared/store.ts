import { configureStore } from "@reduxjs/toolkit";

import { adsApi } from "@/entities/adsApi";
import { authApi } from "@/entities/auth/authApi";

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([adsApi.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
