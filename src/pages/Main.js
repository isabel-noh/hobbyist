import styled from "styled-components";
import React from "react";
import {Text, Input} from "../elements";
import Button from '@mui/material/Button';
import PostList from "../components/PostList";
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory();
    if(false) {// isLogin = true
        return (
            <React.Fragment>
                <MainWrap>
                    <Text fontWeight="1000" fontSize="30px">nickname님의 <span style={{color:"#ff9800", fontSize:"40px"}}>취미</span>를 공유해주세요</Text>
                    <Button style={{fontSize:"15px", borderRadius:"10px", marginTop: "20px", border:"1px solid #f7b028", color: "#ff9800"}} variant="outlined" >내 취미 공유하기</Button>
                </MainWrap>
                <PostList />
            </React.Fragment>
        )
    }
    else{ //로그인 아닌 상태 
        return (
            <React.Fragment>
                <MainWrap>
                    <Text fontWeight="1000" fontSize="30px">여러분의 <span style={{color:"#ff9800", fontSize:"40px"}}>취미</span>를 공유해주세요</Text>
                    <Button style={{marginTop: "30px", border:"1px solid #f7b028", color: "#ff9800"}} variant="outlined" 
                    onClick={()=>{history.push(("/user/login"))}}>로그인하러 가기</Button>
                </MainWrap>
                <PostList />
            </React.Fragment>
        )
    }
}
const MainWrap = styled.div`
width: 100%;
height: 150px;
text-align: center;
padding-top: 50px;
`

export default Main;