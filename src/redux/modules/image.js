import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
//Action
const PREVIEW = "PREVIEW";

//Action creators
const preview = createAction(PREVIEW, (preview) => ({preview}));

//initialState 
const initialState = {
    image_url: 'image.png',
    preview: false,
}


//reducer
export default handleActions(
    {
        
        [PREVIEW] : (state, action) => produce (state, (draft) => {
            draft.preview = action.payload.preview;
        })
    }
, initialState);

//export
const actionCreators = {
    preview,
}
export { actionCreators };

