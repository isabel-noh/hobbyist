import React, {useRef} from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Input2, Text2 } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as UserActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
    const history = useHistory();
    const status = props.status;
    const dispatch = useDispatch(); 

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [nickname, setNickname] = React.useState();
    const [passwordCheck, setPasswordCheck] = React.useState();

    //로그인 상태이면 메인으로 돌아가기
    React.useEffect(() => {
		if (status) history.push('/');
	});

    const signupUsername = (e) => {
        setUsername(e.target.value);
    }
    const signupPassword = (e) => {
        setPassword(e.target.value);
    }

    const signupNickname = (e) => {
        setNickname(e.target.value);
    }
    const signupPasswordCheck = (e) => {
        setPasswordCheck(e.target.value);
    }

    const signup = () => {
        if(username === '' || nickname === '' || password  === '' || passwordCheck === ''){
            alert("아이디, 닉네임, 비밀번호를 모두 입력해주세요.");
            return;
        }
        //아이디 비밀번호 정규식 만들어야됨
        if(username.length < 3){
            alert("3글자 이상의 아이디를 입력해주세요.");
        }
        if(password.length < 4){
            alert("4자 이상의 비밀번호를 입력해주세요.");
        }
        if(password !== passwordCheck){
            alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
            return;
        }
        if(password.includes(username)){
            alert('아이디를 포함하지 않는 비밀번호를 입력해주세요.');
        }
        else{
            dispatch(UserActions.sign_up(username, nickname, password, passwordCheck));
        }   
    }
        
    return (
        <Wrap> 
                <div>
                    <div style={{textAlign: "center", margin: "20px auto"}}>
                        <Text2 fontWeight="1000" fontSize="35px" >Sign up</Text2>
                    </div>
                    
                    <div>
                        <label htmlFor="id">ID</label><Detail>(영문, 숫자만 사용가능, 3글자 이상)</Detail>
                        <Input2 id="id" type="text" placeholder="아이디를 입력해주세요" 
                        _onChange={signupUsername} 
                         />

                        <label htmlFor="nickname">Nickname</label>
                        <Input2 id="nickname" type="text" placeholder="닉네임을 입력해주세요"
                        _onChange={signupNickname}  />

                        <label htmlFor="pwd">Password</label><Detail>(영문, 숫자만 사용가능, 4자 이상)</Detail>
                        <Input2 id="pwd" type="password" placeholder="비밀번호를 입력해주세요(아이디 포함 불가)"
                        _onChange={signupPassword}  />

                        <label htmlFor="pwd_check">Confirm Password</label>
                        <Input2 id="pwd_check" type="password" placeholder=" 비밀번호를 다시 입력해주세요" 
                         _onChange={signupPasswordCheck}  />
                    </div>
                    <br />
                    <div>
                        <Button style={{width: "300px" ,color:"white", backgroundColor:"#ff9800"}} 
                                variant="contained" 
                                onClick={signup}
                                >회원가입하기</Button>
                    </div>
                </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 300px;
    margin: 100px auto;
`
const Detail = styled.span`
    font-size: 13px;
    margin: 0 0 0 15px;
`
export default Signup;