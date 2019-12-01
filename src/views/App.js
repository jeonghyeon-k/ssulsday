import React from "react";
import { Switch, Route } from "react-router-dom";
import {
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
>>>>>>> c5630b6bfce9eb77102c80f487f797567862585a
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
<<<<<<< HEAD
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
=======
      <Route path="/list" component={ListPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
>>>>>>> c5630b6bfce9eb77102c80f487f797567862585a
=======
>>>>>>> 3acf100... 비밀번호 찾기 마무리
      <Route path="/mypage" component={Mypage} />
=======
      <Route path="/mypage/updateuser" component={UpdatePage} />
>>>>>>> 738cf39... fix. error
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
