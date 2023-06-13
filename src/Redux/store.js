import { configureStore } from "@reduxjs/toolkit";
import PlanterReducer from "./Slices/PlanterSlice";
import VasesReducer from "./Slices/VaseSlice"

export const store = configureStore({
    reducer: {
        planters: PlanterReducer,
        vases: VasesReducer,
    }
})