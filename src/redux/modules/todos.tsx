//1. action items
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

//2. action create
export const addTodo = (payload: string) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload: string) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload: string) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

//initialstate
const initialstate = [];

//3. initial State =>  reducer
const todos = (state = initialstate, action) => {};

//4. reducer를 export 한다
export default reducer;
