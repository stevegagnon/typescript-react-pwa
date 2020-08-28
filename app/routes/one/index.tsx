import { h } from 'preact';
import { useContext } from "preact/hooks";
import { Link } from 'preact-router/match';
import Panel from '@components/panel';
import { StringsContext } from '@providers/strings';

export function One() {
  const strings = useContext(StringsContext);
  return (
    <div className="one">
      <Panel>
        <Link href="/two">{strings.two}</Link>
      </Panel>
    </div>
  );
}


export default One;
