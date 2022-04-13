import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Text from "../elements/Text2";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {actionCreators as userActions} from '../redux/modules/user';

const Header = (props) => {
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
    const logOut = () => {
        dispatch(userActions.log_out());
    }
    if(status_login){ //if(status) > status가 true이면 로그인했다는 것
        return(
            <React.Fragment>
                <HeaderWrap>
                    <Button variant="text" style={{fontSize: "2em", color: "white"}} 
                    onClick={()=>{history.push(("/"))}}>HOBBYIST</Button>
                    <ProfileWrap style={{display: "flex"}}>
                        <Text fontSize="17px" margin="2%" color="white" style={{display:"inline-block"}}>{nickname} 님 반갑습니다. </Text>
                        <Button style={{backgroundColor: "white", color: "#ff9800"}}
                        onClick={logOut}
                    >log out</Button>
                    </ProfileWrap>
                </HeaderWrap>
            </React.Fragment>
            )
    }else
     {
        return (
            <React.Fragment>
                <HeaderWrap>
                        <Button variant="text" style={{fontSize: "2em", color: "white"}}
                        onClick={()=>{history.push(("/"))}}>HOBBYIST</Button>
                        <BtnWrap>
                        <Button style={{backgroundColor: "white", border:"1px solid #f7b028", color: "#ff9800"}} variant="outlined" 
                        onClick={()=>{history.push(("/login"))}}>
                            log in</Button>
                            <Button style={{backgroundColor: "white", border:"1px solid #f7b028", color: "#ff9800"}} variant="outlined"
                            onClick={()=>{history.push(("/signup"))}} >sign up</Button>
                        </BtnWrap>
                </HeaderWrap>
            </React.Fragment>
        )
    }
    
}

const HeaderWrap = styled.div`
    width: 100%;
    height: 100px;
    background-color: #ff9800;

    display: flex;
    align-items: center;
    justify-content: space-around; 
`
const BtnWrap = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    margin-right: 5px;
`
const ProfileWrap = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    margin-right: 10px;
`
export default Header;