import React from "react";


const Permit = (props) => {
    const isLogin = localStorage.getItem('username')? true: false;

    if(isLogin){
        return (
            <React.Fragment>
               {props.children}
            </React.Fragment>
        )
    }
    return null;
}
export default Permit;