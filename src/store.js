import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { greetingApi } from "./services/greeting";

export const store = configureStore({
  reducer: {
    [greetingApi.reducerPath]: greetingApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(greetingApi.middleware),
});

setupListeners(store.dispatch);
