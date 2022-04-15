import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {Text2, Input2} from "../elements";
import Button from '@mui/material/Button';
import Permit from "../shared/Permit";
import { actionCreators as hobbyCreators } from "../redux/modules/hobby";

const Detail = (props) => {
    const username = localStorage.getItem('username');
    const dispatch = useDispatch();
    const history = useHistory();
    const isLogin = useSelector((state) => state.user.status);

    const deleteHobby = () => {
        dispatch(hobbyCreators.delete_hobby(...props)); // ...props부분 수정해야돼
    }
    //글쓴이와 현재 로그인한 사람이 동일인이면
    if(username === props.username){
        return (
            <React.Fragment>
                <DetailWrap>
                    <HobbyWrap>
                        <ImagePreview>
                            <img src="" id="detailPreview"/>
                        </ImagePreview>
                        <div style={{width: "100%"}}>
                            <Text2>date: 2022-4-13 00:00:00</Text2>
                            {/* 이 글 쓴 username과 localStorage의 username이 같으면 permit ok */}
                                <div>
                                    <button>수정</button>
                                    <button onClick={deleteHobby}>삭제</button>
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
                    {/* 댓글 수정 삭제 부분은 어떻게 해야되지 */}
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
    //글쓴이와 현재로그인한 사람이 동일인이 아니거나 로그인상태가 아니면
    }else{
        return (
            <React.Fragment>
                <DetailWrap>
                    <HobbyWrap>
                        <ImagePreview>
                            <img src="" id="detailPreview"/>
                        </ImagePreview>
                        <div style={{width: "100%"}}>
                            <Text2>date: 2022-4-13 00:00:00</Text2>
                            <Text2>title</Text2>
                            <Text2>nickname</Text2>
                            <hr />
                            <Text2>content</Text2>
                            <hr />
                            <Text2>url</Text2>
                        </div>
                    </HobbyWrap>
                    <Permit>
                        <CommentWrap>
                            <Input2 placeholder="댓글을 남겨보세요." type="text"></Input2>
                            <Button>등록</Button>
                        </CommentWrap>
                    </Permit>
                    
                    {/*아래부분은 댓글의 수만큼 반복됩니다. */}
                    <CommentWrap>
                        <Text2>nickname</Text2>
                        <Text2>date: 2022-4-13 00:00:00</Text2>
                        <Text2>댓글을 남겼습니다.</Text2>
                        {/* 댓글 수정 삭제 부분은 어떻게 해야되지 */}
                        <Permit>
                            <Button>수정</Button>
                            <Button>삭제</Button>
                        </Permit>
                    </CommentWrap>
                </DetailWrap>
            </React.Fragment>
        ) 
    }
    
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