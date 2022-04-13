import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { RESP } from '../../response/response';

//Action
const GET_HOBBIES = "GET_HOBBIES";
const POST_HOBBY = "POST_HOBBY";
//Action creators
const getHobbies = createAction(GET_HOBBIES, (hobbies) => ({hobbies}));

//initialState
const initialState = {
    hobbies: [],
}
const initialHobby = {
    id: 0,
    title: "골프",
    img: "simba 복사본.png",
    nickname: "isabel",
    date: "2022-04-09",
    commentCounts: 10,
}
//MiddleWares
const get_hobbies = () => {
    return function (dispatch, getState, {history}){
        const response = RESP.GETAPIHOBBIES;
        const hobbies_list = response.result;
        console.log(hobbies_list)
        dispatch(getHobbies({hobbies_list}))


    }
}
//Reducer
export default handleActions({
    [GET_HOBBIES]: (state, action) => produce(state, (draft) => {
        draft.hobbies = action.payload.hobbies
    })
}, initialState);

//export 
const actionCreators = {
    get_hobbies,
}
export {actionCreators};