import { configureStore } from "@reduxjs/toolkit";
import { projectSlice } from './body';

export const store = configureStore({  
    reducer: {
    projects: projectSlice.reducer,
  },
});
