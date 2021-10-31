import { ActionsFunction } from '../reducer/actions-function';
import { KeysOfArray } from '../types/keys-of-array';

export function updateParamArrays<S, A>(param: KeysOfArray<S, A>, paramId: keyof A): ActionsFunction<S, A> {
    return (state: S, payload: A): S => {
      return {
        ...state,
        [param]: (state[param] as A[]).map((item: A) => (item[paramId] === payload[paramId] ? payload : item)),
      }
    }
  }
  