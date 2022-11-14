import { createStore } from "redux";
import { rootReducer } from "./Reducer/rootReducer";

export const Store = createStore(rootReducer);
