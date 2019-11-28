import React from "react";
import { Switch, Route } from "react-router-dom";
import { SamplePage, NotFoundPage, PostPage, SearchPage } from "./pages";

const Login = () => {
  return (
    <Switch>
      <Route exact path="/" component={SamplePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={SamplePage} />
      <Route path="/post" component={PostPage} />
      <Route path="/search" component={SearchPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const App = () => {
  localStorage.login = true;
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />;
};

export default App;
