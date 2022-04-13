import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {Text2, Input2} from "../elements";
import Button from '@mui/material/Button';


const Post = () => {
    const isLogin = localStorage.getItem('username') ? true: false;
    const dispatch = useDispatch();
    const history = useHistory();
    const nickname = localStorage.getItem('nickname');

    if(isLogin) {// isLogin = true
        return (
            <React.Fragment>
                <PostWrap>
                    <Text2 fontWeight="1000" fontSize="30px"><span style={{color:"#ff9800", fontSize:"40px"}}> {nickname} </span>님의 멋진 취미를 공유해주세요</Text2>

                    <InputWrap>
                        <label htmlFor="title" style={{float: "left"}}>title</label>
                        <Input2 id="title" type="text"/>
                        <hr />
                        <label htmlFor="img" style={{float: "left"}}>image</label>
                        <Input2 id="img" type="file" />
                        <ImagePreview>
                            <img src="" id="preview"/>
                        </ImagePreview>
                        <hr />
                        <label htmlFor="content" style={{float: "left"}}>content</label>
                        <Input2 id="content" type="text" multiLine/>
                        <hr />
                        <label htmlFor="url" style={{float: "left"}}>url</label>
                        <Input2 id="url" type="url"/>
                    </InputWrap>
                    <Button style={{color: "white", backgroundColor: "#ff9800", borderRadius: "10px", width: "80px"}}>등록하기</Button>
                </PostWrap>
            </React.Fragment>
        )
    }
    else {
        return (
            <div>돌아가서 로그인해라</div>
        )
    }
}
const PostWrap = styled.div`
width: 100%;
text-align: center;
padding-top: 50px;
`
const InputWrap = styled.div`
width: 70%;
margin:10px auto;
padding: 20px;
border-radius: 10px;
border: 1px solid grey;
` 
const ImagePreview = styled.div`
width: 300px;
height: 200px;
display: flex;
background-color: lightgrey;
`
export default Post;