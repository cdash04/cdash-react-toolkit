import React, { Context, FunctionComponent } from 'react';

type ContextProvider<C> = () => C

export function withContext<C, P>(
  contextProvider: ContextProvider<C>,
  context: Context<C>,
): (WrappedComponent: FunctionComponent<P>) => FunctionComponent<P> {
  return (WrappedComponent: FunctionComponent<P>): FunctionComponent<P> => {
    const ComponentWithContext: FunctionComponent<P> = (props: P) => (
      <context.Provider value={contextProvider()}>
        <WrappedComponent {...props} />
      </context.Provider>
    );

    return ComponentWithContext;
  };
}
