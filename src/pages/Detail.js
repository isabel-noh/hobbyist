import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {Text2, Input2} from "../elements";
import Button from '@mui/material/Button';

const Detail = () => {
    const isLogin = localStorage.getItem('username') ? true: false;
    const dispatch = useDispatch();
    const history = useHistory();
    const nickname = localStorage.getItem('nickname');
    return (
        <React.Fragment>
            <DetailWrap>
                <HobbyWrap>
                    <ImagePreview>
                        <img src="" id="detailPreview"/>
                    </ImagePreview>
                    <div style={{width: "100%"}}>
                        <Text2>date: 2022-4-13 00:00:00</Text2>
                        <div>
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                        <Text2>title</Text2>
                        <Text2>nickname</Text2>
                        <hr />
                        <Text2>content</Text2>
                        <hr />
                        <Text2>url</Text2>
                    </div>
                </HobbyWrap>
                <CommentWrap>
                    <Input2 placeholder="댓글을 남겨보세요." type="text"></Input2>
                    <Button>등록</Button>
                </CommentWrap>
                {/*아래부분은 댓글의 수만큼 반복됩니다. */}
                <CommentWrap>
                    <Text2>nickname</Text2>
                    <Text2>date: 2022-4-13 00:00:00</Text2>
                    <Text2>댓글을 남겼습니다.</Text2>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                </CommentWrap>
            </DetailWrap>
        </React.Fragment>
    )
}
const DetailWrap = styled.div`
width: 100%;
text-align: center;
padding-top: 50px;
`
const HobbyWrap = styled.div`
width: 70%;
margin:10px auto;
padding: 20px;
border-radius: 10px;
border: 1px solid grey;
display: flex;
` 
const CommentWrap = styled.div`
width: 70%;
margin: 20px auto;
padding: 20px;
border-radius: 10px;
border: 1px solid grey;
display: flex;
`
const ImagePreview = styled.div`
width: 300px;
height: 200px;
display: flex;
background-color: lightgrey;
`
export default Detail;