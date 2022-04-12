import axios from "axios";

const api = axios.create({
	baseURL: 'http://', //연결할 url
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