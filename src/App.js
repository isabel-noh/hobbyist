import React from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {actionCreators as userActions} from "./redux/modules/user";
import { Route, Switch } from  "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const dispatch = useDispatch();
  //const status = redux에 status라는 변수를 만들어서 거기다가 저장하는 방식으로 갈까봐
  const status = '';
  React.useEffect (() => {
    if(status){
      dispatch(userActions.user_auth());
    }
  }, []);
  return (
    <Wrap>
      <Header status={status} />
      <Switch>
          <Route path="/" exact status={status}>
              <Main />
          </Route>
          <Route path="/login" exact status={status}>
              <Login />
          </Route>
          <Route path="/signup" exact status={status}>
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
