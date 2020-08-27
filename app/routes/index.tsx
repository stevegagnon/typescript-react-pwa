import * as React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import One from './one';
import Two from './two';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/one">
          <One />
        </Route>
        <Route path="/two">
          <Two />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
