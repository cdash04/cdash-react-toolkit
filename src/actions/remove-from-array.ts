import { ActionsFunction } from "../reducer/actions-function"
import { KeysOfArray } from "../types/keys-of-array"

export function removeFromArrays<S, A>(
    param: KeysOfArray<S, A>,
    paramId: keyof A,
  ): ActionsFunction<S, A[keyof A]> {
    return (state: S, payload: A[keyof A]): S => {
      return {
        ...state,
        [param]: (state[param] as A[]).filter((item: A) => item[paramId] !== payload),
      }
    }
  }
