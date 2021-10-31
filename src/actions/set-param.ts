import { ActionsFunction } from '../reducer/actions-function';
import { KeysOfType } from '../types/keys-of-type';

export function setParam<S, A>(param: KeysOfType<S, A>): ActionsFunction<S, A> {
    return (state: S, payload: A): S => ({
      ...state,
      [param]: payload,
    })
  }
  