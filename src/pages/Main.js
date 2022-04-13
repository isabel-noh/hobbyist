import styled from "styled-components";
import React from "react";
import {Text2, Input2} from "../elements";
import Button from '@mui/material/Button';
import PostList from "../components/PostList";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";

const Main = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const status_login = useSelector((state) => state.user.status);
    const nickname = localStorage.getItem('nickname');
    // React.useEffect = () => {
    //     if(status){
    //         setStatus(true);
    //     }else { 
    //         setStatus(false);
    //     }
    // }
    if(status_login) {// isLogin = true
        return (
            <React.Fragment>
                <MainWrap>
                    <Text2 fontWeight="1000" fontSize="30px">{nickname}님의 <span style={{color:"#ff9800", fontSize:"40px"}}>취미</span>를 공유해주세요</Text2>
                    <Button style={{fontSize:"15px", borderRadius:"10px", marginTop: "20px", border:"1px solid #f7b028", color: "#ff9800"}} variant="outlined"
                    onClick={() => history.push("/post")} >내 취미 공유하기</Button>
                </MainWrap>
                <PostList />
            </React.Fragment>
        )
    }
    else{ //로그인 아닌 상태 
        return (
            <React.Fragment>
                <MainWrap>
                    <Text2 fontWeight="1000" fontSize="30px">여러분의 <span style={{color:"#ff9800", fontSize:"40px"}}>취미</span>를 공유해주세요</Text2>
                    <Button style={{marginTop: "30px", border:"1px solid #f7b028", color: "#ff9800"}} variant="outlined" 
                    onClick={()=>{history.push(("/login"))}}>로그인하러 가기</Button>
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