import { ActionsFunction } from '../types/actions-function';

export interface ReducersAction<S, A, P> {
  actionType: A;
  actionsFunctions: ActionsFunction<S, P>[];
}
