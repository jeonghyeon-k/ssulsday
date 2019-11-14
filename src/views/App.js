import React from "react";
import { Switch, Route } from "react-router-dom";
import { SamplePage, NotFoundPage } from "./pages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={SamplePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
