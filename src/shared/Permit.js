import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
    const isLocalStorage = localStorage.getItem('username')? true: false;
    const isLogin = useSelector(state => state.user.status);


    if(isLogin && isLocalStorage){
        return (
            <React.Fragment>
               {props.children}
            </React.Fragment>
        )
    }
    return null;
}
export default Permit;