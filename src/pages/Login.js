import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Input, Text } from "../elements";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Wrap>
                <div style={{textAlign: "center", margin: "20px auto"}}>
                    <Text fontWeight="1000" fontSize="35px" >Log In</Text>
                </div>
                
                <div>
                    <label htmlFor="id">ID</label>
                    <Input id="id"  type="text" placeholder="아이디를 입력해주세요" />
                    <label htmlFor="password">Password</label>
                    <Input id="password" type="password" placeholder="비밀번호를 입력해주세요"/>
                </div><br />

                <div>
                    <Button style={{width: "300px", color: "white", backgroundColor:"#ff9800"}}  
                            variant="contained"
                            >Log In</Button>
                </div>
                
            </Wrap>
            <Joinus>
                <Text lineHeight="1.5em" fontSize="20px" fontWeight="1000">아직 회원이 아니신가요?</Text>
                <Text lineHeight="3em">회원가입을 하시면 궁금하신 정보를 더 얻을 수 있습니다. </Text>
                <Button style={{color:"#ff9800"}} 
                onClick={()=>{history.push(("/user/signup"))}}>회원가입하기</Button>
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