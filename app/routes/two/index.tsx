import * as React from 'react';
import { Link } from "react-router-dom";
import Panel from '@components/panel';
import { StringsContext } from '@providers/strings';

export function Two() {
  const strings = React.useContext(StringsContext);
  return (
    <div className="two">
      <Panel>
        <Link to="/one">{strings.one}</Link>
      </Panel>
    </div>
  );
}

export default Two;
