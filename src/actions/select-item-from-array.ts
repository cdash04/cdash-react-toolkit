import { ActionsFunction } from '../reducer/actions-function';
import { KeysOfArray } from '../types/keys-of-array';
import { KeysOfType } from '../types/keys-of-type';

export function selectItemFromArray<S, A, T>(
    arrayParamKey: KeysOfArray<S, A>,
    selectedItemKey: KeysOfType<S, A | undefined>,
    itemParamKey: KeysOfType<A, T>,
  ): ActionsFunction<S, A[KeysOfType<A, T>]> {
    return (state: S, payload: A[KeysOfType<A, T>]): S => {
      const selectedItem = (state[arrayParamKey] as A[]).find((item: A) => item[itemParamKey] === payload)
      return {
        ...state,
        [selectedItemKey]: selectedItem,
      }
    }
}