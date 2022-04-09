import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Text from "../elements/Text";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    if(false){
        return(
            <React.Fragment>
                <HeaderWrap>
                    <Button variant="text" style={{fontSize: "2em", color: "white"}} onClick={()=>{history.push(("/"))}}>HOBBYIST</Button>
                    <ProfileWrap style={{display: "flex"}}>
                        <Text fontSize="17px" margin="2%" style={{display:"inline-block"}}>nickname님 반갑습니다. </Text>
                        <Button style={{backgroundColor: "white", color: "#ff9800"}}
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
                        onClick={()=>{history.push(("/user/login"))}}>
                            log in</Button>
                            <Button style={{backgroundColor: "white", border:"1px solid #f7b028", color: "#ff9800"}} variant="outlined"
                            onClick={()=>{history.push(("/user/signup"))}} >sign up</Button>
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