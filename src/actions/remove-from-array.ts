import { ActionsFunction, KeysOfArray } from '../types';

export function removeFromArrays<S, A>(
  param: KeysOfArray<S, A>,
  paramId: keyof A
): ActionsFunction<S, A[keyof A]> {
  return (state: S, payload: A[keyof A]): S => {
    return {
      ...state,
      [param]: ((state[param] as unknown) as A[]).filter(
        (item: A) => item[paramId] !== payload
      ),
    };
  };
}
