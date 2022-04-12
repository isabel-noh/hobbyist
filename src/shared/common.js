import React from "react";

//이메일 형식 확인하는 함수
export const idCheck = (username) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

    return _reg.test(username);
}