import { createStore } from "redux";

const initialState = {
  likes: 1,
};

const reducer = (state = initialState, action) => {
  console.log("reducer >", action);
};

const store = createStore(reducer);

export default store;
