import React from 'react';
import {Text2, Input2} from "../elements";
import Button from '@mui/material/Button';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Wrap404>
                <Text2 fontWeight="1000" fontSize="50px">404 NOT FOUND</Text2>
                <Button style={{fontSize:"15px", borderRadius:"10px", marginTop: "20px", border:"1px solid #f7b028", color: "#ff9800"}} variant="outlined" onClick={history.push("/")} >메인 페이지로 돌아가기 </Button>
            </Wrap404>
        </React.Fragment>
    )
}

const Wrap404 = styled.div`
width: 100%;
height: 150px;
text-align: center;
padding-top: 50px;
`
export default PageNotFound;
