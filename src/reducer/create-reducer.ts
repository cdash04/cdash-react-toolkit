import { Action, ActionsFunction, Reducer } from "../types";
import { ReducersAction } from "./reducers-action";

export function createReducer<S, A, P = any>(
  ...actions: ReducersAction<S, A, P>[]
): Reducer<S, A, P> {
  return (state: S, action: Action<A, P>): S => {
    const { type, payload } = action;
    const reducersAction = actions.find(
      (a: ReducersAction<S, A, P>) => a.actionType === type
    );
    return (
      reducersAction?.actionsFunctions.reduce(
        (newState, actionsFunction) =>
          actionsFunction(newState, payload as P) ?? newState,
        state
      ) ?? state
    );
  };
}

export function on<S, A, P>(
  actionType: A,
  ...actionsFunctions: ActionsFunction<S, P>[]
): ReducersAction<S, A, P> {
  return { actionType, actionsFunctions };
}
