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
  FindPasswordPage,
<<<<<<< HEAD
  PageMain,
  Mypage,
  question,
=======
  Mypage,
  PageMain,
>>>>>>> b7a33972f3cc18e8ac567d1a402c7ea9368a0583
  LoginPage
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
<<<<<<< HEAD
    <Switch>
      <Route exact path="/" component={PageMain} />
      <Route path="/post" component={PostPage} />
      <Route path="/search" component={SearchPage} />
<<<<<<< HEAD
      <Route path="/details/:postid" component={DetailsPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/list" component={PageList} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/mypage/" component={Mypage} />
      <Route path="/mypage/question" component={question} />
<<<<<<< HEAD
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
=======
      <Route path="/list" component={ListPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
>>>>>>> b7a33972f3cc18e8ac567d1a402c7ea9368a0583
=======
>>>>>>> 3acf100... 비밀번호 찾기 마무리
      <Route path="/mypage" component={Mypage} />
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
  localStorage.login = true;
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />;
};

export default App;
