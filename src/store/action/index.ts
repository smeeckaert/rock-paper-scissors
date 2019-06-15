import {
  ADD_CHALLENGER,
  ADD_WIN_POINT,
  ADD_LOOSE_POINT,
} from "../constants/action-types";

export function challengerName(payload: string) {
  return { type: ADD_CHALLENGER, payload };
}

export function challengerWinCounter() {
  return { type: ADD_WIN_POINT };
}

export function challengerLooseCounter() {
  return { type: ADD_LOOSE_POINT };
}
