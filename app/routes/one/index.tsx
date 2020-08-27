import './_one.css';
import * as React from 'react';
import { Link } from "react-router-dom";
import Panel from '@components/panel';
import { StringsContext } from '@providers/strings';

export function One() {
  const strings = React.useContext(StringsContext);
  return (
    <Panel>
      <Link to="/two">{strings.two}</Link>
    </Panel>
  );
}


export default One;
