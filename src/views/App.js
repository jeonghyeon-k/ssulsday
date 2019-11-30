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
<<<<<<< HEAD
  PageMain,
<<<<<<< HEAD
  Mypage
>>>>>>> 47e641a... feat. 마이페이지 라우터
=======
  Mypage,
<<<<<<< HEAD
  question
>>>>>>> bc0949e... feat. 마이페이지- 문의하기
=======
  question,
  LoginPage
>>>>>>> 84a06a7... 리베이스 커밋
=======
  Mypage,
  PageMain,
  LoginPage
>>>>>>> b7a3397... 헤더 마무리
>>>>>>> a949e3845704c9639f343fbfe1b2757af112d8ef
} from "./pages";

const Login = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
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
      <Route path="/find-password" component={FindPasswordPage} />
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> bc0949e... feat. 마이페이지- 문의하기
=======
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/mypage" component={Mypage} />
>>>>>>> 84a06a7... 리베이스 커밋
=======
      <Route path="/mypage" component={Mypage} />
>>>>>>> a949e3845704c9639f343fbfe1b2757af112d8ef
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
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />;
};

export default App;
