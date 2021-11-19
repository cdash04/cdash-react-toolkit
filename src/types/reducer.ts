import { Action } from './action';

export type Reducer<S, A, P> = (state: S, A: Action<A, P>) => S;
