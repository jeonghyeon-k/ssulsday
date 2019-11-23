import React from "react";
import { Switch, Route } from "react-router-dom";
import { SamplePage, NotFoundPage, PostPage } from "./pages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SamplePage} />
        <Route path="/post" component={PostPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
