import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {Text2, Input2} from "../elements";
import Button from '@mui/material/Button';
import { actionCreators as hobbyCreators } from "../redux/modules/hobby";
import { actionCreators as imageCreators } from "../redux/modules/image";
import { useEffect } from "react";

//게시글 수정
const Edit = () => {
    const isLogin = useSelector((state) => state.user.status);
    const dispatch = useDispatch();
    const history = useHistory();
    const fileInput = React.useRef();
    const nickname = localStorage.getItem('nickname');

    const reader = new FileReader();

    const [content, setContent] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [image, setImage] = React.useState("");
    const [url, setUrl] = React.useState("");

    const changeContent = (e) => {
        setContent(e.target.value);
    }
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeUrl = (e) => {
        setUrl(e.target.value);
    }
    
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob); //base64로 encode
        return new Promise((resolve) => {//Promise.resolve - 비동기 객체 > success ? resolve메소드 반환 : reject
            reader.onload = () => {
                setImage(reader.result);
                //
                dispatch (imageCreators.preview(image)) 
            }
        })
    }

    const editHobby = () => {
        if(title === '' || content===''){
            alert('제목과 내용을 적어주세요.');
            return;
        }else{
            dispatch(hobbyCreators.update_hobby(content, image, title, url));
        }
    } 

    if(isLogin) {// isLogin = true
        return (
            <React.Fragment>
                <PostWrap>
                    <Text2 fontWeight="1000" fontSize="30px"><span style={{color:"#ff9800", fontSize:"40px"}}> {nickname} </span>님의 멋진 취미를 공유해주세요</Text2>

                    <InputWrap>
                        {/*제목 */}
                        <label htmlFor="title" style={{float: "left", margin: "auto 10px"}}>title</label>
                        <Input2 id="title" type="text" width="90%"
                        _onChange={changeTitle}
                        />
                        <hr />
                        {/* 이미지업로드&preview */}
                            <label htmlFor="imageFile" style={{float: "left"}}>image</label>
                            <input 
                            id="imageFile" type="file" 
                            onChange={(e) => encodeFileToBase64(e.target.files[0])} 
                            ref={fileInput}/>
                        <ImageAndContent>
                            {/* 이미지 미리보기 */}
                            <ImagePreview className="preview">
                                {image && <img src={image} alt="preview-img" style={{width: "100%", height:"100%", backgroundSize:"cover"}}/>}
                            </ImagePreview>
                            {/* 글 쓰기 */}
                            <WriteWrap>
                                <label htmlFor="content" style={{float: "left", margin: "auto 10px"}}>content</label>
                                <Input2 id="content" type="text" multiLine max-width="300px"
                            _onChange={changeContent}/>
                            </WriteWrap>
                        </ImageAndContent>
                        <hr />
                        {/* url쓰기 */}
                        <label htmlFor="url" style={{float: "left", margin: "auto 10px" }}>url</label>
                        <Input2 id="url" type="url" width="90%"
                        _onChange={changeUrl}/>
                    </InputWrap>

                    {/* 등록하기 버튼 */}
                    <Button style={{color: "white", backgroundColor: "#ff9800", borderRadius: "10px", width: "80px"}}
                    onClick={postHobby}>등록하기</Button>
                </PostWrap>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <PostWrap>
                    <Text2 fontSize="30px">로그인 후에만 글을 작성할 수 있습니다. </Text2>
                    <Button 
                    style={{margin: "30px auto", backgroundColor:"#ff9800" ,color: "white"}}
                    onClick={() => history.replace('/login')}>로그인 하러 가기</Button>
                </PostWrap>
            </React.Fragment>
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
const ImageAndContent = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 2fr;
`
const ImagePreview = styled.div`
width: 350px;
height: 220px;
display: flex;
background-color: lightgrey;
align-items: center;
margin: 10px auto 0px 40px;
`
const WriteWrap = styled.div`
width: 85%;
height: 250px;
margin: auto;
display: flex;
`
export default Edit;