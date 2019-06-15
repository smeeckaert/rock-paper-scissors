import { ADD_LOOSE_POINT } from "../constants/action-types";

export const initialState = {
  count: 0,
};

function challengerLooseCounter(state: any = initialState, action: any) {
  let count = state.count;
  count++;
  switch (action.type) {
    case ADD_LOOSE_POINT:
      return {
        ...state,
        count: count,
      };
    default:
      return state;
  }
}

export default challengerLooseCounter;
