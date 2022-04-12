import React, { useEffect } from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {actionCreators as userActions} from "./redux/modules/user";
import { Route, Switch } from  "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const dispatch = useDispatch();
  //const status = redux에 status라는 변수를 만들어서 거기다가 저장하는 방식으로 갈까봐
  useEffect(() => {
		dispatch(userActions.log_in());
	}, []);

  // const isLogin = useSelector((state) =>state.user.status);
  // console.log(isLogin);

  // React.useEffect (() => {
  //   if(isLogin){
  //     dispatch(userActions.user_auth());
  //   }
  // }, []);

  return (
    <Wrap>
      <Header />
      <Switch>
          <Route path="/" exact >
              <Main />
          </Route>
          <Route path="/login" exact>
              <Login />
          </Route>
          <Route path="/signup" exact>
              <Signup />
          </Route>
  {/* 
          <Route>
              <Detail />
          </Route>
          <Route>
              <Post />
          </Route>
  */}             
          <Route path={"*"} component={PageNotFound}/>
      </Switch>
    </Wrap>
  );
}
const Wrap = styled.div`
  min-width: 100%;
  min-height: calc(100vh - 20px);
`


export default App;
