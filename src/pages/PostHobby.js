import React from "react";

const Post = () => {
    const isLogin = localStorage.getItem('username') ? true: false;
    
    if(isLogin){
        return (
            <div>취미를 공유하자</div>
        )
    }
    else {
        return (
            <div>돌아가서 로그인해라</div>
        )
    }
}
export default Post;