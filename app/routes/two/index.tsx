import { h } from 'preact';
import { useContext } from "preact/hooks";
import { Link } from 'preact-router/match';
import Panel from '@components/panel';
import { StringsContext } from '@providers/strings';

export function Two() {
  const strings = useContext(StringsContext);
  return (
    <div className="two">
      <Panel>
        <Link href="/one">{strings.one}</Link>
      </Panel>
    </div>
  );
}

export default Two;
