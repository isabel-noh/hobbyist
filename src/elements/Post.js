import React from 'react';
import styled from "styled-components";
import Text from "./Text2";

const Post = (props) => {

    return (
       <Card>
           <ImageBox><img /></ImageBox>           
           <ContentBox>
               <Text fontWeight="800" fontSize="20px">TITLE</Text>
               <Text fontSize="16px"> NICKNAME</Text>
               <Text>DATE</Text>
           </ContentBox>

       </Card>
    )
}

const Card = styled.div`
    width: 300px;
    height: 320px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid darkgrey;
`
const ImageBox = styled.div`
    width: 300px;
    height: 200px;
    background-color: lightgrey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
const ContentBox = styled.div`
    width: 260px;
    height: 80px;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`
export default Post;