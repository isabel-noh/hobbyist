import React, { useEffect } from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import PostHobby from "./pages/PostHobby";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {actionCreators as userActions} from "./redux/modules/user";
import { Route, Switch } from  "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Permit from './shared/Permit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useHistory } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  //const status = redux에 status라는 변수를 만들어서 거기다가 저장하는 방식으로 갈까봐
  const isLogin = useSelector((state) => state.user.status);

  useEffect(() => {
		if(isLogin){
      dispatch(userActions.user_auth());
    }
	}, []);
  //cookie - jsessionID

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
          <Route path="/hobby/:id">
              <Detail />
          </Route>
          <Route path="/post" exact>
              <PostHobby />
          </Route>
          <Route path={"*"} component={PageNotFound}/>
      </Switch>
      <Permit>
        <AddCircleIcon style={{width: "40px", height:"40px", color: "orange", zIndex: "9999", position:"absolute", right:"10px", bottom:"10px"}}
        onClick={()=>{history.push(("/post"))}}/>  
      </Permit>
      
    </Wrap>
  );
}
const Wrap = styled.div`
  min-width: 100%;
  min-height: calc(100vh - 20px);
`


export default App;
