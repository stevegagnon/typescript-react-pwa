import * as React from 'react';

const en = {
  one: 'one',
  two: 'two'
}

export const StringsContext = React.createContext(en);

export default function StringsProvider({ children }: React.PropsWithChildren<{}>) {
  return <StringsContext.Provider value={en}>{children}</StringsContext.Provider>
}
