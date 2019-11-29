import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  SamplePage,
  NotFoundPage,
<<<<<<< HEAD
  PostPage,
  SearchPage,
  PageList,
  DetailsPage,
=======
>>>>>>> b6afb40b4204f1913abea27efaee8bb1e2fb0f0c
  SignUpPage,
<<<<<<< HEAD
  FindPasswordPage
=======
  FindPasswordPage,
  PageMain,
<<<<<<< HEAD
  Mypage
>>>>>>> 47e641a... feat. 마이페이지 라우터
=======
  Mypage,
  question
>>>>>>> bc0949e... feat. 마이페이지- 문의하기
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
      <Route exact path="/" component={SamplePage} />
      <Route path="/post" component={PostPage} />
      <Route path="/search" component={SearchPage} />
<<<<<<< HEAD
      <Route path="/list" component={ListPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/find-password" component={FindPasswordPage} />
=======
      <Route path="/details/:postid" component={DetailsPage} />
      <Route path="/list" component={PageList} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/find-password" component={FindPasswordPage} />
<<<<<<< HEAD
      <Route path="/mypage/" component={Mypage} />
>>>>>>> 47e641a... feat. 마이페이지 라우터
=======
      <Route exact path="/mypage/" component={Mypage} />
      <Route path="/mypage/question" component={question} />
>>>>>>> bc0949e... feat. 마이페이지- 문의하기
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
