import { ActionsFunction, KeysOfArray, KeysOfType } from "../types";

export function selectItemFromArray<S, A, T>(
  arrayParamKey: KeysOfArray<S, A>,
  selectedItemKey: KeysOfType<S, A | undefined>,
  itemParamKey: KeysOfType<A, T>
): ActionsFunction<S, A[KeysOfType<A, T>]> {
  return (state: S, payload: A[KeysOfType<A, T>]): S => {
    const selectedItem = ((state[arrayParamKey] as unknown) as A[]).find(
      (item: A) => item[itemParamKey] === payload
    );
    return {
      ...state,
      [selectedItemKey]: selectedItem,
    };
  };
}
