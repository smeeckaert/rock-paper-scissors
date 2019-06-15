import { ADD_CHALLENGER } from "../constants/action-types";

export const initialState = {
  name: "",
};

function challengerName(state: any = initialState, action: any) {
  switch (action.type) {
    case ADD_CHALLENGER:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}

export default challengerName;
