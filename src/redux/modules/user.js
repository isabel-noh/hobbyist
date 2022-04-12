import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { RESP } from '../../response/response';
import api, { apis } from "../../shared/api";

const axios = require('axios').default;

//action creator를 통해 생성한 action을 redux-store에 전달 > store 값 변경

//Action(type: "" , payload: "")
const SIGN_UP = "/user/SIGNUP"; //sign up
const LOG_IN = "/user/LOGIN"; // log in 
const LOG_OUT = "/user/LOGOUT"; //log out
const USER_AUTH = "/user/USERAUTH"; //log_in_check


//Action creators
const signUp = createAction(SIGN_UP, (user) => ({user}));
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const userAuth = createAction(USER_AUTH, (user) => ({user}));

//initialState
const initialState = {
    user:null,
    // username: null,
    // status: false, // status : 로그인 상태 여부
    nickname: null,
}

//MiddleWares
const sign_up = (username, nickname, password, passwordCheck) => {
    return function (dispatch, getState, {history}){
        const response = RESP.POSTSIGNUP;
        if(response.result.status === true){
            console.log("middleware signup response : " + response.result.status );
            window.alert("회원가입하셨습니다! 로그인을 해주세요.")
            history.push("/login");
        }

        // apis
        // .signup(username, nickname, password, passwordCheck)
        // .then((response) => {
        //     window.alert('성공적으로 회원가입 되었습니다! 로그인을 해주세요.');
        //     history.push('/login');
        // })
        // .catch((err) =>{
        //     window.alert('이미 존재하는 아이디 혹은 닉네임입니다. ');
        // })
    }   
}

const log_in = (username, password) => {
    return function (dispatch, getState, {history}) {
        const response = RESP.POSTUSERLOGIN;

        // apis
        // .login(username, password)
        // .then((response) => {
            if(response.result.status === true)
            {
            //server로부터 받은 메시지를 리덕스 status에 저장하고 싶은데 .
            dispatch(logIn({
                user: response.result.username, 
                status: response.result.status
            }))
            localStorage.setItem('username', username);
            history.push('/');
        }
        // .catch((err) => {
        //     window.alert("회원 정보를 다시 확인해주세요. 회원가입하지 않으셨다면 회원가입을 해주세요! ")
        // })
    }   
}

const log_out = () => {
    return function (dispatch, getState, {history}){
        localStorage.removeItem('username');
        dispatch(logOut());
        history.push("/");
    }
}

const user_auth = () => {
    return function (dispatch, getState) {
        // const username = localStorage.getItem('username');
        // apis
        // .userAuth(username)
        // .then()
        const response = RESP.GETUSERAUTH;
        if(response.result.status === true) {
            dispatch(log_in({
                username: response.result.username, status: true,
                nickname: response.result.nickname,
            }));
        }else{
            dispatch(log_out());
        }
    }
}
//Reducer
export default handleActions({
    [LOG_IN]: (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.status = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        draft.user = null;
        draft.status = false;
    }),
    [USER_AUTH]: (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.status = true;
    })
}, initialState);

//export 
const actionCreators = {
    sign_up,
    log_in,
    log_out,
    user_auth,
}
export {actionCreators};