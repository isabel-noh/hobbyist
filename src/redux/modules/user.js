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
    username: null,
    status: false, // status : 로그인 상태 여부
    nickname: null,
}

//MiddleWares
const sign_up = (username, nickname, password, passwordCheck) => {
    return function (dispatch, getState, {history}){
        // const response = RESP.POSTSIGNUP;
        // if(response.result.status === true){
        //     console.log("middleware signup response : " + response.result.status );
        //     //api...
        //     window.alert("회원가입하셨습니다! 로그인을 해주세요.")
        //     history.push("/login");
        // }
        apis
        .signup(username, nickname, password, passwordCheck)
        .then((response) => {
            window.alert('성공적으로 회원가입 되었습니다! 로그인을 해주세요.');
            history.push('/login');
        })
        .catch((err) =>{
            window.alert('이미 존재하는 아이디 혹은 닉네임입니다. ');
        })
    }   
}

const log_in = (username, password) => {
    return function (dispatch, getState, {history}) {
        // const response = RESP.POSTUSERLOGIN;
        // if(response.result.status === true){
        //     //sessionstorage말고, redux에 status, true 저장
        //     dispatch(logIn({
        //         user: response.result.username, 
        //         status: true
        //     }));
        //     window.alert("로그인되었습니다.")
        //     history.replace("/");
        // }else {
        //     window.alert("회원정보를 다시 확인해주세요.")
        // }
        apis
        .login(username, password)
        .then((response) => {
            dispatch(logIn({username: username}))
            localStorage.setItem('username', username);
            history.push('/');
        })
    }   
}

const log_out = () => {
    return function (dispatch, getState, {history}){
        dispatch(logOut());
        history.push("/");
    }
}

const user_auth = () => {
    return async function (dispatch, getState) {
        console.log("로그인체크합니다. ");
        const response = RESP.GETUSERAUTH;
        // const isLogin = sessionStorage.getItem('status');
        // const username = localStorage.getItem('username');
        if(response.result.nickname) {
            dispatch(log_in({user: response.result.username, status: response.result.status}));
        }else{
            dispatch(log_out());
        }
    }
}
//server login check api만들어야됨.'
//username nickname - > api / user/auth.. 

//Reducer
export default handleActions({
    [SIGN_UP]: (state, action) => produce(state, (draft) => {
        
    }),
    [LOG_IN]: (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.status = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        draft.user = null;
        draft.status = false;
    }),
    [USER_AUTH]: (state, action) => produce(state, (draft) => {

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