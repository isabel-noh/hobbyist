import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Input2, Text2 } from "../elements";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from '../redux/modules/user';

const Login = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();

    const status = props.status;
     //로그인 상태이면 메인으로 돌아가기
     React.useEffect(() => {
		if (status) history.push('/');
	});

    const loginUsername = (e) => {
        setUsername(e.target.value);
    }
    const loginPassword = (e) => {
        setPassword(e.target.value);
    }
    const login = () => {
        dispatch(userActions.log_in({username, password}));
    }

    return (
        <React.Fragment>
           
            <Wrap>
                <div style={{textAlign: "center", margin: "20px auto"}}>
                    <Text2 fontWeight="1000" fontSize="35px" >Log In</Text2>
                </div>
                
                <div>
                    <label htmlFor="username">ID</label>
                    <Input2 id="username" _onChange={loginUsername} type="text" placeholder="아이디를 입력해주세요" />
                    <label htmlFor="password">Password</label>
                    <Input2 id="password" _onChange={loginPassword} type="password" placeholder="비밀번호를 입력해주세요"/>
                </div><br />

                <div>
                    <Button style={{width: "300px", color: "white", backgroundColor:"#ff9800"}}  
                            variant="contained"
                            onClick={login}
                            >Log In</Button>
                </div>
                
            </Wrap>
            <Joinus>
                <Text2 lineHeight="1.5em" fontSize="20px" fontWeight="1000">아직 회원이 아니신가요?</Text2>
                <Text2 lineHeight="3em">회원가입을 하시면 궁금하신 정보를 더 얻을 수 있습니다. </Text2>
                <Button style={{color:"#ff9800"}} 
                onClick={()=>{history.push(("/signup"))}}>회원가입하기</Button>
            </Joinus>
        </React.Fragment>
    )
}

const Wrap = styled.div`
    width: 300px;
    margin: 100px auto 30px auto;
`
const Joinus = styled.div`
    text-align: center;
    margin: 10px auto;
`
export default Login;