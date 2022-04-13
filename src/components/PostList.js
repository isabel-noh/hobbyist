import React from 'react';
import styled from "styled-components";
import Post from '../elements/Post';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as HobbyActions } from '../redux/modules/hobby';


const PostList = (props) => {
    const dispatch = useDispatch();
    const hobbies = useSelector((state) => state.hobby.hobbies);
    React.useEffect (()=> {
        dispatch(HobbyActions.get_hobbies())
    }, []);
    return (
       <Postlist>
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