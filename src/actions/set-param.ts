import { KeysOfType, ActionsFunction } from "../types";

export function setParam<S, A>(param: KeysOfType<S, A>): ActionsFunction<S, A> {
  return (state: S, payload: A): S => ({
    ...state,
    [param]: payload,
  });
}
