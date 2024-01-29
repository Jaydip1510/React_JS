import { createStore } from "redux";
import DataReducer from "./Reducer";

const Store = createStore(DataReducer);
export default Store;