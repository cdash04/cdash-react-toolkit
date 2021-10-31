import { ActionsFunction } from '../reducer/actions-function';
import { KeysOfArray } from '../types/keys-of-array';

export function pushToParamArrays<S, A>(param: KeysOfArray<S, A>): ActionsFunction<S, A> {
  return (state: S, payload: A): S => ({
    ...state,
    [param]: [...state[param], payload],
  })
}
