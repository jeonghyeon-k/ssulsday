import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  SamplePage,
  NotFoundPage,
<<<<<<< HEAD
  PostPage,
  SearchPage,
  ListPage,
  DetailsPage,
=======
>>>>>>> b6afb40b4204f1913abea27efaee8bb1e2fb0f0c
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
<<<<<<< HEAD
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
=======
    <div>
      <Switch>
        <Route exact path="/" component={SamplePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/find-password" component={FindPasswordPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
>>>>>>> b6afb40b4204f1913abea27efaee8bb1e2fb0f0c
  );
};

const App = () => {
  console.log(process.env)
  localStorage.login = true;
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />;
};

export default App;
