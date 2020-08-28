import * as React from 'react';

export function Panel({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>{children}</div>
  );
}

export default Panel;
