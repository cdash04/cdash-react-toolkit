export interface Action<T = unknown, P = unknown> {
  type: T;
  payload?: P;
}
