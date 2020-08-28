import { h } from 'preact';
import { createContext } from "preact";

const en = {
  one: 'one',
  two: 'two'
}

export const StringsContext = createContext(en);

export default function StringsProvider({ children }) {
  return <StringsContext.Provider value={en}>{children}</StringsContext.Provider>
}
