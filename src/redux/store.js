import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";


//birden fazla reducer varsa birleştirme
const rootReducer = combineReducers({ todoReducer, userReducer });

// store oluşturma ve reducerları tanıtma 
const store = createStore(rootReducer);

export default store;