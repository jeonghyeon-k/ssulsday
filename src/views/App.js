import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  NotFoundPage,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
  PostPage,
  SearchPage,
  PageList,
  DetailsPage,
<<<<<<< HEAD
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
=======
  SignUpPage,
  FindPasswordPage,
  PageMain,
  Mypage,
  question,
  LoginPage,
  UpdatePage
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
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
<<<<<<< HEAD
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
    <Switch>
      <Route exact path="/" component={PageMain} />
      <Route path="/post" component={PostPage} />
      <Route path="/search" component={SearchPage} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
      <Route path="/details/:postid" component={DetailsPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/list" component={PageList} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/mypage/" component={Mypage} />
      <Route path="/mypage/question" component={question} />
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      <Route path="/mypage/updateuser" component={UpdatePage} />
      <Route component={NotFoundPage} />
    </Switch>
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
  );
};

const App = () => {
  return localStorage.getItem("login") === "true" ? <Main /> : <Login />;
};

export default App;
