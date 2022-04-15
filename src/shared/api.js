import axios from "axios";

const api = axios.create({
	baseURL: 'http://localhost:3000', //연결할 url
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	},
});

export const apis ={
    //post
    hobbies: () => {
        api.get('/api/hobbies');
    },
    postHobby: (img, title, content, url, _user) => {
        api.post('/api/hobby',{
            img: img,
            title: title,
            content: content,
            url: url,
            //hobby posting할 때 username확인 해야되지 않아? nickname이라던지
            //username: _user,
        })
    },
    //comment


    //user
    signup: (username, nickname, password, passwordCheck) => {
        api.post('/user/signup',{
            username: username,
            nickname: nickname,
            password: password,
            passwordCheck: passwordCheck,
        })
    },
    login: (username, password) => {
        api.post('/user/login',{
            username: username,
            password: password,
        })
    },
    userAuth: (username) =>{
        api.get('/user/auth');
    },
    logout: () => {
        api.post('/user/logout')
    }

}