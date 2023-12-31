// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { petApi } from "./petApi"; // Adjust the import if necessary

export const store = configureStore({
  reducer: {
    // Assuming petApi.reducerPath is defined in your petApi.ts
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

// Setup listeners for handling refetching, polling, etc.
petApi.enhanceEndpoints({ addTagTypes: ["Pet"] });

// Export hooks for usage in functional components, which are auto-generated by createApi
export const {
  useGetPetByIdQuery,
  // Add other hooks here
} = petApi;
