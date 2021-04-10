import types from "./../ref/types";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_TICKET:
      return {
        ...state,
        ticket: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
