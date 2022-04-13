import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import Text from "./Text2";

const Post = (props) => {
    const dispatch = useDispatch();
    const hobbies = useSelector((state) => state.hobby.hobbies);
    const hobbies_list = (hobbies.hobbies_list);
    console.log(hobbies_list);
    return (
        <React.Fragment>
        {hobbies_list&&hobbies_list.map((p, index) => 
            (   <Card key={p.id}>
                <ImageBox><img style={{width: "300px", height: "200px", backgroundSize:"cover"}}
                src={p.img} /></ImageBox> 
                <ContentBox>
                    <Text fontWeight="800" fontSize="20px">{p.title}</Text>
                    <Text fontSize="16px"> {p.nickname}</Text>
                    <Text>{p.date}</Text>
                </ContentBox>
                </Card>
            )
        )}
        </React.Fragment>
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