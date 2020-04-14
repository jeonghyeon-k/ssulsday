import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  NotFoundPage,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  PostPage,
  SearchPage,
<<<<<<< HEAD
=======
  PageList,
>>>>>>> f073f03f245d74ab977ac426c282360a8173967e
  DetailsPage,
=======
>>>>>>> b6afb40b4204f1913abea27efaee8bb1e2fb0f0c
  SignUpPage,
<<<<<<< HEAD
  FindPasswordPage
=======
  FindPasswordPage,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f073f03f245d74ab977ac426c282360a8173967e
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
>>>>>>> f073f03f245d74ab977ac426c282360a8173967e
=======
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
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
<<<<<<< HEAD
=======
      <Route path="/find-password" component={FindPasswordPage} />
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const Main = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      <Route path="/details/:postid" component={DetailsPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/find-password" component={FindPasswordPage} />
=======
>>>>>>> f073f03f245d74ab977ac426c282360a8173967e
<<<<<<< HEAD
      <Route path="/mypage/" component={Mypage} />
>>>>>>> 47e641a... feat. 마이페이지 라우터
=======
      <Route exact path="/mypage/" component={Mypage} />
      <Route path="/mypage/question" component={question} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bc0949e... feat. 마이페이지- 문의하기
=======
<<<<<<< HEAD
>>>>>>> bc0949e... feat. 마이페이지- 문의하기
=======
<<<<<<< HEAD
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
>>>>>>> 3c72d1f... fix. starcount error
=======
      <Route path="/details" component={DetailsPage} />
      <Route path="/find-password" component={FindPasswordPage} />
      <Route path="/mypage" component={Mypage} />
>>>>>>> 84a06a7... 리베이스 커밋
=======
      <Route path="/mypage" component={Mypage} />
<<<<<<< HEAD
>>>>>>> a949e3845704c9639f343fbfe1b2757af112d8ef
>>>>>>> f073f03f245d74ab977ac426c282360a8173967e
=======
=======
      <Route path="/mypage/updateuser" component={UpdatePage} />
>>>>>>> 738cf39... fix. error
>>>>>>> 3c72d1f... fix. starcount error
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
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
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
