import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Input, Text } from "../elements";

const Signup = () => {
    return (
        <Wrap>
                <div>
                    <div style={{textAlign: "center", margin: "20px auto"}}>
                        <Text fontWeight="1000" fontSize="35px" >Sign up</Text>
                    </div>
                    
                    <div>
                        <label htmlFor="id">ID</label>
                        <Input id="id" type="text" placeholder="아이디를 입력해주세요" 
                         />

                        <label htmlFor="nickname">Nickname</label>
                        <Input id="nickname" type="text" placeholder="닉네임을 입력해주세요"/>

                        <label htmlFor="pwd">Password</label>
                        <Input id="pwd" type="password" placeholder="비밀번호를 입력해주세요" />

                        <label htmlFor="pwd_check">Confirm Password</label>
                        <Input id="pwd_check" type="password" placeholder=" 비밀번호를 다시 입력해주세요" />
                    </div>
                    <br />
                    <div>
                        <Button style={{width: "300px" ,color:"white", backgroundColor:"#ff9800"}} 
                                variant="contained" 
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
export default Signup;