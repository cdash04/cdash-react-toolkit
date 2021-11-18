import { ActionsFunction, KeysOfArray } from "../types";

export function pushToArrays<S, A>(
  param: KeysOfArray<S, A>
): ActionsFunction<S, A> {
  return (state: S, payload: A): S => ({
    ...state,
    [param]: [...((state[param] as unknown) as A[]), payload],
  });
}
