import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//Action
const GET_HOBBY_LIST = "GET_HOBBY_LIST";

//Action creators
const getHobbyList = createAction(GET_HOBBY_LIST, (hobby) => ({hobby}));

//initialState
const initialState = {
    hobby: null,
}

//MiddleWares

//Reducer



export default handleActions({

}, initialState);

//export 
const actionCreators = {

}
export {actionCreators};