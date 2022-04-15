import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { RESP } from '../../response/response';
import moment from 'moment';
import { apis } from "../../shared/api";

const axios = require('axios').default;

//Action
const GET_HOBBIES = "GET_HOBBIES";
const POST_HOBBY = "POST_HOBBY";
const UPDATE_HOBBY = "UPDATE_HOBBY";
const DELETE_HOBBY = "DELETE_HOBBY";

//Action creators
const getHobbies = createAction(GET_HOBBIES, (hobbies) => ({hobbies}));
const postHobby = createAction(POST_HOBBY, (hobby) => ({hobby}));
const updateHobby = createAction(UPDATE_HOBBY, (hobby) => ({hobby}));
const deleteHobby = createAction(DELETE_HOBBY, (hobby) => ({hobby}));

//initialState
const initialState = {
    hobbies: [],
    hobby: null,
}
const initialHobby = {
    id: 0,
    title: "골프",
    img: "simba 복사본.png",
    nickname: "isabel",
    date: moment().format("YYYY-MM-DD hh:mm:ss"),
    commentCounts: 0,
}
//MiddleWares
const get_hobbies = () => {
    return function (dispatch, getState, {history}){
        const response = RESP.GETAPIHOBBIES;
        const hobbies_list = response.result;
        dispatch(getHobbies({hobbies_list}));
    }
}
const post_hobby = (content="", title="", image="", url="") => {
    return function (dispatch, getState, {history}){
        const _user = getState().user.username;

        apis
        //user의 정보도 같이 줘야되지 않나?! 
        .postHobby(content, title, image, url, _user)
        .then((response) => {
            dispatch(postHobby({content, title, image, url, _user}));
            window.alert(_user+"님의 취미를 공유하였습니다! :)")
            history.push("/");
        })
        .catch((err) => {
            console.log("hobby 작성을 실패하였습니다.", err);
            window.alert("작성에 실패하였습니다. "); 
            return;
        })
    }
}
const update_hobby = () => {

}
const delete_hobby = () => {

}

//Reducer
export default handleActions({
    [GET_HOBBIES]: (state, action) => produce(state, (draft) => {
        return {
            ...state,
            hobbies: action.payload.hobbies,
        }
        
    }),
    [POST_HOBBY]: (state, action) => produce(state, (draft) => {
        draft.hobbies.push(action.payload.hobby);
    }),
    [UPDATE_HOBBY]: (state, action) => produce(state,(draft) => {

    }),
    [DELETE_HOBBY]: (state, action) => produce(state, (draft) => {
        draft.hobbies.filter(!action.payload.hobby);
    })
}, initialState);

//export 
const actionCreators = {
    get_hobbies,
    post_hobby,
    
}
export {actionCreators};