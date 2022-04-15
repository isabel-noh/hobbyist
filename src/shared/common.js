import React from "react";

//아이디 형식 확인하는 함수
export const idCheck = (username) => {
    let _reg = /^[0-9a-zA-Z]{3,20}$/;

    return _reg.test(username);
}
export const pwdCheck = (password) => {
    const pwdRegExp = /^[A-Za-z\d@$!%*?&]{4,20}$/;
    return pwdRegExp.test(pwd);
}

export { idCheck, pwdCheck};