import { combineReducers } from "redux";
import challengerName from "./reducers/challengerName";
import challengerWinCounter from "./reducers/challengerWinCounter";
import challengerLooseCounter from "./reducers/challengerLooseCounter";

export default combineReducers({
  challengerName,
  challengerWinCounter,
  challengerLooseCounter,
});
