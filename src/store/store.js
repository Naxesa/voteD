import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import voteReducer from "./vote-slice";  // Import properly

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        vote: voteReducer, // ✅ Make sure it's using voteReducer
    },
});

export default store;

