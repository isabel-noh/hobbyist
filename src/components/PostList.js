import React from 'react';
import styled from "styled-components";
import Post from '../elements/Post';

const PostList = () => {

    return (
       <Postlist>
           <Post />
           <Post />
           <Post />
           <Post />
       </Postlist>
    )
}

const Postlist = styled.div`
    max-width: 1000px;
    padding: 0px 20px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
`
export default PostList;