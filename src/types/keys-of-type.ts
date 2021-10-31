export type KeysOfType<T, A> = {
    [K in keyof T]: T[K] extends A ? (A extends T[K] ? K : never) : never
  }[keyof T]