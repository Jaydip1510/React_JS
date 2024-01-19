import { createStore } from "redux";
import UserReducer from "../Reducer/UserReducer";

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('userState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Error loading state from localStorage:', err);
      return undefined;
    }
  };
  
  // Save state to localStorage
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('userState', serializedState);
    } catch (err) {
      console.error('Error saving state to localStorage:', err);
    }
  };
  
  const preloadedState = loadState();
  
  const Store = createStore(
    UserReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  Store.subscribe(() => {
    saveState(Store.getState());
  });
  
  export default Store;