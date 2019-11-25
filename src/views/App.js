import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  SamplePage,
  NotFoundPage,
  PostPage,
  SearchPage,
  ListPage,
  DetailsPage,
  SignUpPage,
  FindPasswordPage,
  PageMain
} from "./pages";

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
      <Route exact path="/" component={PageMain} />
      <Route path="/post" component={PostPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/list" component={ListPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const App = () => {
  localStorage.login = true;
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />;
};

export default App;
