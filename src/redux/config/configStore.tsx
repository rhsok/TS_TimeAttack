import { combineReducers, createStore } from "redux";

//1. rootReducer 만들고 reducer 합치기
// modules밑에 있는 여러 파일들이 반환하는 값
// 현재 todos
const rootReducer = combineReducers({});

//2. store
const store = createStore(rootReducer);

//3. export
export default store;
