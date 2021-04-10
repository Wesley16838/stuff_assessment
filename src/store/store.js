import thunkMiddleware from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./../reducers";

let preloadedState = {
  ticket: [
    {
      _id: "5cdb6454107a752e479349f9",
      Title: "New Task",
      Assignee: "Razan Kiwan",
      Status: "selected",
      Goal: "Buy a product",
    },
    {
      _id: "5cdb6454107aewvre79349f9",
      Title: "Cancel an account on Sunday",
      Assignee: "Sharon Wong",
      Status: "waiting",
      Goal: "Cancel an account",
    },
    {
      _id: "5cdb64adsfvcdsce479349f9",
      Title: "Buy a ticket on Saturday",
      Assignee: "Wesley Lee",
      Status: "waiting",
      Goal: "Buy and Recommemd a gift",
    },
    {
      _id: "5cdcsadvvdsa752e479349f9",
      Title: "New Task",
      Assignee: "Team Rocket",
      Status: "delay",
      Goal: "Ask for the business",
    },
  ],
};

const store = createStore(
  reducer,
  preloadedState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
  )
);
export default store;
