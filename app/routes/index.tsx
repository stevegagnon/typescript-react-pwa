import { h } from 'preact';
import  PreactRouter from 'preact-router';
import One from './one';
import Two from './two';

export function Router() {
  return (
    <PreactRouter>
      <One path="/" />
      <One path="/one" />
      <Two path="/two" />
    </PreactRouter>
  );
}

export default Router;
