import React from "react";
import { Route, Switch } from  "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Router from "./components/Router";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import { useSelector, useDispatch} from "react-redux";
import styled from "styled-components";


function App() {
  //function loginCheck()
  return (
    <Wrap>
      <Header />
      <Router />
      
    </Wrap>
  );
}
const Wrap = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 20px);
`


export default App;
