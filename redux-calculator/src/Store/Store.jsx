import { createStore } from "redux";
import CalculatorReducer from "../Reducer/CalculatorReducer";

const Store = createStore(CalculatorReducer);

export default Store;