import { ADD_WIN_POINT } from "../constants/action-types";

export const initialState = {
  count: 0,
};

function challengerWinCounter(state: any = initialState, action: any) {
  let count = state.count;
  count++;
  switch (action.type) {
    case ADD_WIN_POINT:
      return {
        ...state,
        count: count,
      };
    default:
      return state;
  }
}

export default challengerWinCounter;
