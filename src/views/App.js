import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  NotFoundPage,
  PostPage,
  SearchPage,
  PageList,
  DetailsPage,
  SignUpPage,
  FindPasswordPage,
  PageMain,
  Mypage,
  question,
  LoginPage,
  UpdatePage
} from "./pages";
import styles from "./App.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Login = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const Main = () => {
  return (
    <div className={cx("container")}>
      <Switch>
        <Route exact path="/" component={PageMain} />
        <Route path="/post" component={PostPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/details/:postid" component={DetailsPage} />
        <Route path="/details" component={DetailsPage} />
        <Route path="/list" component={PageList} />
        <Route path="/signup" component={SignUpPage} />
        <Route exact path="/mypage/" component={Mypage} />
        <Route path="/mypage/question" component={question} />
        <Route path="/mypage/updateuser" component={UpdatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

const App = () => {
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />  ;
};

export default App;
