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
  question,
  LoginPage,
  Mypage,
  PageMain,
  LoginPage,
  PostPage,
  SearchPage,
  PageList,
  DetailsPage,
  SignUpPage,
  FindPasswordPage,
  PageMain,
  Mypage,
  question,
  Mypage,
  PageMain,
  LoginPage,
  LoginPage,
  SignUpPage,
  FindPasswordPage,
  PageMain,
  Mypage,
  question,
  LoginPage,
  UpdatePage
} from "./pages";

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
    <Switch>
      <Route exact path="/" component={SamplePage} />
      <Route path="/post" component={PostPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/list" component={ListPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/details/:postid" component={DetailsPage} />
      <Route path="/list" component={PageList} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/find-password" component={FindPasswordPage} />

      <Route path="/mypage/" component={Mypage} />
      <Route exact path="/" component={PageMain} />
      <Route path="/post" component={PostPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/details/:postid" component={DetailsPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/list" component={PageList} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/mypage/" component={Mypage} />
      <Route path="/mypage/question" component={question} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/mypage/updateuser" component={UpdatePage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/list" component={ListPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/mypage/updateuser" component={UpdatePage} />
      <Route component={NotFoundPage} />
    </Switch>

    <div>
      <Switch>
        <Route exact path="/" component={SamplePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/find-password" component={FindPasswordPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
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
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/list" component={ListPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />

      <Route path="/mypage" component={Mypage} />

      <Route path="/mypage/updateuser" component={UpdatePage} />

      <Route component={NotFoundPage} />
    </Switch>

    <div>
      <Switch>
        <Route exact path="/" component={SamplePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/find-password" component={FindPasswordPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
      <Route path="/mypage/updateuser" component={UpdatePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const App = () => {
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />;
};

export default App;
