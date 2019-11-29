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
  PageMain,
} from "./pages";
import Mypage from "./pages/Mypage";

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
      <Route path="/details/:postid" component={DetailsPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/mypage/:userid" component={Mypage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const App = () => {
  console.log(process.env)
  localStorage.login = true;
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />;
};

export default App;
