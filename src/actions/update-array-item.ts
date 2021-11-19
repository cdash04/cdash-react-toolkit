import { ActionsFunction, KeysOfArray } from '../types';

export function updateParamArrays<S, A>(
  param: KeysOfArray<S, A>,
  paramId: keyof A
): ActionsFunction<S, A> {
  return (state: S, payload: A): S => {
    return {
      ...state,
      [param]: ((state[param] as unknown) as A[]).map((item: A) =>
        item[paramId] === payload[paramId] ? payload : item
      ),
    };
  };
}
