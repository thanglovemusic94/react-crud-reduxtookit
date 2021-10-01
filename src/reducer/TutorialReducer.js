import {TUTORIAL_ACTION} from "../action/types";


const TutorialReducer = (state = null , action) =>{
    const {type, payload} = action
    switch (type) {
        case TUTORIAL_ACTION.REFRESH_TUTORIALS:
            return payload;
        case TUTORIAL_ACTION.CREATE_TUTORIAL:
            return [...state, payload]
        case TUTORIAL_ACTION.UPDATE_TUTORIAL:
            return [...state, payload]
        case TUTORIAL_ACTION.DELETE_TUTORIAL:
            return state.filter(v => v.id !== payload.id)
        case TUTORIAL_ACTION.DELETE_ALL_TUTORIALS:
            return []
        default:
            return state;
    }
}

export default TutorialReducer
